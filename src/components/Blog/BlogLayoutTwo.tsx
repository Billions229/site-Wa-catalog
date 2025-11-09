import { format, parseISO } from "date-fns";
import { Link } from "react-router-dom";
import { slug } from "github-slugger";
import type { Blog } from "@/utils/blogUtils";

interface BlogLayoutTwoProps {
  blog: Blog;
}

const BlogLayoutTwo = ({ blog }: BlogLayoutTwoProps) => {
  return (
    <div className="group grid grid-cols-12 gap-4 items-center text-dark dark:text-light">
      <Link
        to={blog.url}
        className="col-span-12 lg:col-span-4 h-full rounded-xl overflow-hidden"
      >
        <img
          src={blog.image.src}
          alt={blog.title}
          className="aspect-square w-full h-full object-cover object-center group-hover:scale-105 transition-all ease duration-300"
          loading="lazy"
        />
      </Link>

      <div className="col-span-12 lg:col-span-8 w-full">
        <Link 
          to={`/blog?tag=${slug(blog.tags[0])}`}
          className="inline-block w-full uppercase text-primary-600 dark:text-primary-400 font-semibold text-xs sm:text-sm hover:text-primary-700 dark:hover:text-primary-300 hover:underline"
        >
          {blog.tags[0]}
        </Link>
        <Link to={blog.url} className="inline-block my-1">
          <h2 className="font-semibold capitalize text-base sm:text-lg">
            <span
              className="bg-gradient-to-r from-primary-400/50 dark:from-primary-400/50 to-primary-400/50 dark:to-primary-400/50 bg-[length:0px_6px]
                group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 "
            >
              {blog.title}
            </span>
          </h2>
        </Link>

        <span className="inline-block w-full capitalize text-gray dark:text-light/50 font-semibold text-xs sm:text-base">
          {format(parseISO(blog.publishedAt), "MMMM dd, yyyy")}
        </span>
      </div>
    </div>
  );
};

export default BlogLayoutTwo;

