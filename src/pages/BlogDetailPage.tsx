import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getBlogBySlug } from "@/utils/blogUtils";
import BlogDetails from "@/components/Blog/BlogDetails";
import RenderMdx from "@/components/Blog/RenderMdx";
import Tag from "@/components/Blog/Tag";
import TableOfContents from "@/components/Blog/TableOfContents";
import SEOHead from "@/components/SEO/SEOHead";
import { slug as slugify } from "github-slugger";
import { useBlogViews } from "@/hooks/useBlogViews";
import { createArticleSchema } from "@/utils/schemas";
import type { Blog } from "@/utils/blogUtils";

export default function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const previousSlugRef = useRef<string | undefined>(undefined);
  
  // Utiliser le hook pour les vues (fonctionne même si Supabase n'est pas configuré)
  const { viewCount, incrementView } = useBlogViews(slug || "");

  // Scroll vers le haut uniquement lors du changement de slug - version optimisée
  useEffect(() => {
    // Ne scroll que si le slug a changé (nouvelle navigation)
    if (slug && slug !== previousSlugRef.current) {
      // Scroll synchrone sans animation pour éviter les blocages
      window.scrollTo(0, 0);
      previousSlugRef.current = slug;
    }
  }, [slug]);

  // Référence pour éviter les chargements multiples
  const isLoading = useRef(false);
  
  useEffect(() => {
    const loadBlog = async () => {
      if (!slug) {
        navigate("/blog");
        return;
      }

      // Éviter les chargements multiples simultanés
      if (isLoading.current) return;
      
      try {
        isLoading.current = true;
        setLoading(true);
        const blogData = await getBlogBySlug(slug);

        if (!blogData) {
          navigate("/blog");
          return;
        }

        setBlog(blogData);
        
        // Incrémenter la vue après le chargement du blog
        // Délai pour éviter de bloquer le rendu
        setTimeout(() => {
          incrementView();
        }, 1000);
      } catch (error) {
        console.error("Erreur lors du chargement du blog:", error);
        navigate("/blog");
      } finally {
        setLoading(false);
        isLoading.current = false;
      }
    };

    loadBlog();
  }, [slug, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Chargement de l'article...</p>
        </div>
      </div>
    );
  }

  if (!blog) {
    return null;
  }

  // Créer le schema JSON-LD pour l'article
  const articleSchema = createArticleSchema(blog, blog.url);

  return (
    <>
      {/* SEO Head avec meta tags dynamiques et JSON-LD */}
      <SEOHead
        title={blog.title}
        description={blog.description}
        image={blog.image.src}
        url={blog.url}
        type="article"
        publishedTime={blog.publishedAt}
        modifiedTime={blog.updatedAt}
        author={blog.author}
        tags={blog.tags}
        schema={articleSchema}
      />
      
      <article className="w-full overflow-visible">
        {/* Hero Section */}
        <div className="mb-8 text-center relative w-full h-[70vh] bg-dark overflow-hidden">
          <div className="w-full z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Tag
              name={blog.tags[0]}
              link={`/blog?tag=${slugify(blog.tags[0])}`}
              className="px-6 text-sm py-2"
            />
            <h1 className="inline-block mt-6 font-semibold capitalize text-light text-2xl md:text-3xl lg:text-5xl !leading-normal relative w-5/6">
              {blog.title}
            </h1>
          </div>
          <div className="absolute top-0 left-0 right-0 bottom-0 h-full bg-dark/60 dark:bg-dark/40" />
          <img
            src={blog.image.src}
            alt={blog.title}
            className="aspect-square w-full h-full object-cover object-center"
            loading="eager"
            width={blog.image.width || 1200}
            height={blog.image.height || 630}
          />
        </div>

        {/* Blog Details avec le vrai compteur de vues */}
        <BlogDetails blog={blog} slug={slug || ""} viewCount={viewCount} />

        {/* Content with TOC */}
        <div className="grid grid-cols-12 gap-y-8 lg:gap-8 sxl:gap-16 mt-8 mb-16 px-5 md:px-10">
          {/* Table of Contents */}
          <div className="col-span-12 lg:col-span-4">
            <TableOfContents content={blog.body} />
          </div>
          
          {/* Blog Content */}
          <div className="col-span-12 lg:col-span-8">
            <RenderMdx blog={blog} />
          </div>
        </div>
      </article>
    </>
  );
}

