import { useEffect, useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { slug as slugify } from "github-slugger";
import { Search } from "lucide-react";
import { getAllBlogs, sortBlogs, getBlogCategories, getBlogsByCategory } from "@/utils/blogUtils";
import BlogLayoutThree from "@/components/Blog/BlogLayoutThree";
import SEOHead from "@/components/SEO/SEOHead";
import { createBlogListSchema } from "@/utils/schemas";
import type { Blog } from "@/utils/blogUtils";

export default function BlogPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedTag = searchParams.get('tag');

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

  // Filtrer les blogs par tag si un tag est sélectionné
  let filteredBlogs = blogs;
  if (selectedTag) {
    filteredBlogs = getBlogsByCategory(blogs, selectedTag);
  }

  // Filtrer par recherche textuelle
  const searchedBlogs = useMemo(() => {
    if (!searchQuery.trim()) {
      return filteredBlogs;
    }
    const query = searchQuery.toLowerCase();
    return filteredBlogs.filter(blog => 
      blog.title.toLowerCase().includes(query) ||
      blog.description.toLowerCase().includes(query) ||
      blog.tags.some(tag => tag.toLowerCase().includes(query)) ||
      blog.body.toLowerCase().includes(query)
    );
  }, [filteredBlogs, searchQuery]);

  const sortedBlogs = sortBlogs(searchedBlogs);
  const categories = getBlogCategories(blogs);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    // Réinitialiser le filtre de tag si on cherche
    if (e.target.value && selectedTag) {
      setSearchParams({});
    }
  };

  const handleTagClick = (tag: string) => {
    setSearchQuery(""); // Réinitialiser la recherche
    setSearchParams({ tag });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Chargement des articles...</p>
        </div>
      </div>
    );
  }

  // Créer le schema JSON-LD pour la liste des blogs
  const blogListSchema = createBlogListSchema(sortedBlogs);

  return (
    <>
      <SEOHead
        title="Blog - Articles et Actualités"
        description="Découvrez nos derniers articles sur le commerce électronique, les conseils pour vendeurs et acheteurs, et les actualités du marché béninois."
        url="/blog"
        schema={blogListSchema}
      />
      
      <main className="min-h-screen py-16 px-5 sm:px-10 md:px-24 sxl:px-32 bg-light dark:bg-dark">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-dark dark:text-light mb-4">
            Blog
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Découvrez nos derniers articles et actualités
          </p>

        {/* Barre de recherche */}
        <div className="mb-8">
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Rechercher un article..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-primary-500 dark:focus:border-primary-400 bg-white dark:bg-dark text-dark dark:text-light"
            />
          </div>
        </div>

        {/* Filtres par catégorie */}
        {categories.length > 0 && (
          <div className="mb-8 flex flex-wrap gap-3">
            <button
              onClick={() => {
                setSearchQuery("");
                setSearchParams({});
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                !selectedTag && !searchQuery
                  ? 'bg-primary-500 dark:bg-primary-600 text-white shadow-md font-semibold'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600'
              }`}
            >
              Tous
            </button>
            {categories.map((category) => {
              const categorySlug = slugify(category);
              const isActive = selectedTag === categorySlug;
              return (
                <button
                  key={category}
                  onClick={() => handleTagClick(categorySlug)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-primary-500 dark:bg-primary-600 text-white shadow-md font-semibold'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        )}

        {/* Message si un filtre ou une recherche est active */}
        {(selectedTag || searchQuery) && (
          <div className="mb-6">
            <p className="text-gray-600 dark:text-gray-400">
              {selectedTag && (
                <>
                  Articles filtrés par : <span className="font-semibold text-primary-600 dark:text-primary-400">
                    {categories.find(cat => slugify(cat) === selectedTag) || selectedTag}
                  </span>
                </>
              )}
              {searchQuery && (
                <>
                  {selectedTag && ' | '}
                  Résultats de recherche pour : <span className="font-semibold text-primary-600 dark:text-primary-400">
                    "{searchQuery}"
                  </span>
                </>
              )}
              {' '}
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSearchParams({});
                }}
                className="text-primary hover:underline"
              >
                Voir tous les articles
              </button>
            </p>
          </div>
        )}

        {sortedBlogs.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              {searchQuery
                ? `Aucun article trouvé pour "${searchQuery}".`
                : selectedTag
                ? `Aucun article trouvé pour la catégorie "${categories.find(cat => slugify(cat) === selectedTag) || selectedTag}".`
                : 'Aucun article disponible pour le moment.'}
            </p>
            {(selectedTag || searchQuery) && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSearchParams({});
                }}
                className="mt-4 inline-block text-primary hover:underline font-medium"
              >
                Voir tous les articles
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {sortedBlogs.map((blog, index) => (
              <article key={index} className="col-span-1">
                <BlogLayoutThree blog={blog} />
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
    </>
  );
}

