import { format, parseISO } from "date-fns";
import { fr } from "date-fns/locale";
import { Link } from "react-router-dom";
import { slug } from "github-slugger";
import { Eye, Clock } from "lucide-react";
import type { Blog } from "@/utils/blogUtils";

interface BlogDetailsProps {
  blog: Blog;
  slug: string;
  viewCount?: number; // Ajouter le viewCount en prop (optionnel pour compatibilité)
}

const BlogDetails = ({ blog, slug: blogSlug, viewCount: propViewCount }: BlogDetailsProps) => {
  // Si viewCount n'est pas fourni, utiliser un compteur simulé (fallback)
  const getViewCount = (slug: string) => {
    let hash = 0;
    for (let i = 0; i < slug.length; i++) {
      hash = ((hash << 5) - hash) + slug.charCodeAt(i);
      hash = hash & hash;
    }
    return Math.abs(hash) % 10000 + 100; // Entre 100 et 10099
  };

  const viewCount = propViewCount !== undefined ? propViewCount : getViewCount(blogSlug);

  return (
    <div className="px-4 md:px-10 bg-primary-500 dark:bg-primary-600 text-white py-3 flex items-center justify-around flex-wrap text-base sm:text-lg font-medium mx-5 md:mx-10 rounded-lg shadow-md">
      <time className="m-2 flex items-center gap-2 text-white">
        <span>{format(parseISO(blog.publishedAt), "d MMMM yyyy", { locale: fr })}</span>
      </time>
      <div className="m-2 flex items-center gap-2 text-white">
        <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
        <span>{viewCount.toLocaleString()} vues</span>
      </div>
      <div className="m-2 flex items-center gap-2 text-white">
        <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
        <span>{blog.readingTime.text}</span>
      </div>
      <Link 
        to={`/blog?tag=${slug(blog.tags[0])}`} 
        className="m-2 hover:underline font-semibold text-white"
      >
        #{blog.tags[0]}
      </Link>
    </div>
  );
};

export default BlogDetails;

