import { useState, useRef, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
  sizes?: string;
  onLoad?: () => void;
  onError?: () => void;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  priority = false,
  sizes,
  onLoad,
  onError
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Générer les sources WebP et AVIF si possible
  const generateSources = (originalSrc: string) => {
    // Si l'image est déjà optimisée ou c'est une URL externe, la retourner telle quelle
    if (originalSrc.includes('http') || originalSrc.includes('.webp') || originalSrc.includes('.avif')) {
      return { webp: null, avif: null, original: originalSrc };
    }

    // Pour les images locales, générer les versions optimisées
    const basePath = originalSrc.replace(/\.[^/.]+$/, ''); // Enlever l'extension
    return {
      avif: `${basePath}.avif`,
      webp: `${basePath}.webp`,
      original: originalSrc
    };
  };

  const sources = generateSources(src);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  // Preload pour les images critiques
  useEffect(() => {
    if (priority && !isLoaded) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      if (sizes) link.setAttribute('imagesizes', sizes);
      document.head.appendChild(link);

      return () => {
        if (document.head.contains(link)) {
          document.head.removeChild(link);
        }
      };
    }
  }, [priority, src, sizes, isLoaded]);

  // Placeholder pendant le chargement
  const placeholder = (
    <div 
      className={`bg-gray-200 dark:bg-gray-700 animate-pulse ${className}`}
      style={{ 
        width: width ? `${width}px` : '100%', 
        height: height ? `${height}px` : '200px',
        aspectRatio: width && height ? `${width}/${height}` : undefined
      }}
    />
  );

  // Image d'erreur
  if (hasError) {
    return (
      <div 
        className={`bg-gray-100 dark:bg-gray-800 flex items-center justify-center ${className}`}
        style={{ 
          width: width ? `${width}px` : '100%', 
          height: height ? `${height}px` : '200px',
          aspectRatio: width && height ? `${width}/${height}` : undefined
        }}
      >
        <span className="text-gray-400 text-sm">Image non disponible</span>
      </div>
    );
  }

  return (
    <div className="relative">
      {!isLoaded && placeholder}
      
      <picture>
        {/* Source AVIF (meilleure compression) */}
        {sources.avif && (
          <source srcSet={sources.avif} type="image/avif" sizes={sizes} />
        )}
        
        {/* Source WebP (bonne compression, largement supporté) */}
        {sources.webp && (
          <source srcSet={sources.webp} type="image/webp" sizes={sizes} />
        )}
        
        {/* Image originale (fallback) */}
        <img
          ref={imgRef}
          src={sources.original}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : loading}
          decoding="async"
          className={`${className} ${!isLoaded ? 'opacity-0 absolute inset-0' : 'opacity-100'} transition-opacity duration-300`}
          sizes={sizes}
          onLoad={handleLoad}
          onError={handleError}
          style={{
            aspectRatio: width && height ? `${width}/${height}` : undefined
          }}
        />
      </picture>
    </div>
  );
}
