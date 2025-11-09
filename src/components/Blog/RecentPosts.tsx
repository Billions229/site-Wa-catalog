import { useState, useEffect } from "react";
import { sortBlogs, getAllBlogs } from "@/utils/blogUtils";
import { Link } from "react-router-dom";
import BlogLayoutThree from "./BlogLayoutThree";
import type { Blog } from "@/utils/blogUtils";

// Version optimisée qui charge les blogs elle-même
const RecentPosts = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  // Charger les blogs en arrière-plan
  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const allBlogs = await getAllBlogs();
        setBlogs(allBlogs);
      } catch (error) {
        console.error("Erreur lors du chargement des blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    loadBlogs();
  }, []);

  // Afficher un placeholder pendant le chargement
  if (loading) {
    return (
      <section className="w-full mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col items-center justify-center">
        <div className="w-full flex justify-between items-center mb-8">
          <h2 className="w-fit inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light">
            Nos articles récents
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 w-full">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="col-span-1 h-64 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse"></div>
          ))}
        </div>
      </section>
    );
  }
  
  const sortedBlogs = sortBlogs(blogs);
  
  if (sortedBlogs.length === 0) {
    return null;
  }

  return (
    <section className="w-full mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col items-center justify-center">
      <div className="w-full flex justify-between items-center mb-8">
        <h2 className="w-fit inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light">
          Nos articles récents
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 w-full">
        {sortedBlogs.slice(0, 3).map((blog, index) => {
          return (
            <article key={index} className="col-span-1 relative">
              <BlogLayoutThree blog={blog} />
            </article>
          );
        })}
      </div>

      {/* Bouton Voir tous les articles */}
      <div className="mt-12 text-center">
        <Link
          to="/blog"
          className="inline-flex items-center justify-center px-6 py-3 bg-primary-500 dark:bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-600 dark:hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
        >
          Voir tous les articles
          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default RecentPosts;

