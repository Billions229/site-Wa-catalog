import { siteMetadata } from './siteMetadata';
import type { Blog } from './blogUtils';

// Schema pour un article de blog
export function createArticleSchema(blog: Blog, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": blog.title,
    "description": blog.description,
    "image": {
      "@type": "ImageObject",
      "url": `${siteMetadata.siteUrl}${blog.image.src}`,
      "width": blog.image.width || 1200,
      "height": blog.image.height || 630
    },
    "author": {
      "@type": "Person",
      "name": blog.author,
      "url": siteMetadata.siteUrl
    },
    "publisher": {
      "@type": "Organization",
      "name": siteMetadata.title,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteMetadata.siteUrl}${siteMetadata.siteLogo}`,
        "width": 200,
        "height": 200
      }
    },
    "datePublished": blog.publishedAt,
    "dateModified": blog.updatedAt || blog.publishedAt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${siteMetadata.siteUrl}${url}`
    },
    "keywords": blog.tags.join(", "),
    "articleSection": blog.tags[0] || "Blog",
    "wordCount": blog.readingTime.words,
    "timeRequired": `PT${blog.readingTime.minutes}M`,
    "inLanguage": "fr-FR",
    "url": `${siteMetadata.siteUrl}${url}`
  };
}

// Schema pour la page blog (liste des articles)
export function createBlogListSchema(blogs: Blog[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": `${siteMetadata.title} - Blog`,
    "description": "Articles et actualités sur le commerce électronique, les vendeurs et les produits au Bénin",
    "url": `${siteMetadata.siteUrl}/blog`,
    "publisher": {
      "@type": "Organization",
      "name": siteMetadata.title,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteMetadata.siteUrl}${siteMetadata.siteLogo}`,
        "width": 200,
        "height": 200
      }
    },
    "blogPost": blogs.slice(0, 10).map(blog => ({
      "@type": "BlogPosting",
      "headline": blog.title,
      "description": blog.description,
      "url": `${siteMetadata.siteUrl}${blog.url}`,
      "datePublished": blog.publishedAt,
      "dateModified": blog.updatedAt || blog.publishedAt,
      "author": {
        "@type": "Person",
        "name": blog.author
      },
      "image": `${siteMetadata.siteUrl}${blog.image.src}`
    })),
    "inLanguage": "fr-FR"
  };
}

// Schema pour l'organisation (site principal)
export function createOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteMetadata.title,
    "description": siteMetadata.description,
    "url": siteMetadata.siteUrl,
    "logo": {
      "@type": "ImageObject",
      "url": `${siteMetadata.siteUrl}${siteMetadata.siteLogo}`,
      "width": 200,
      "height": 200
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": siteMetadata.email,
      "contactType": "Customer Service",
      "availableLanguage": "French"
    },
    "sameAs": [
      siteMetadata.facebook,
      siteMetadata.twitter,
      siteMetadata.linkedin,
      siteMetadata.youtube
    ].filter(Boolean),
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "BJ",
      "addressLocality": "Cotonou"
    }
  };
}

// Schema pour le site web
export function createWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteMetadata.title,
    "description": siteMetadata.description,
    "url": siteMetadata.siteUrl,
    "inLanguage": "fr-FR",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteMetadata.siteUrl}/blog?search={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": siteMetadata.title,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteMetadata.siteUrl}${siteMetadata.siteLogo}`,
        "width": 200,
        "height": 200
      }
    }
  };
}
