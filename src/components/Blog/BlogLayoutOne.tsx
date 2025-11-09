import { Link } from "react-router-dom";
import Tag from "./Tag";
import { slug } from "github-slugger";
import type { Blog } from "@/utils/blogUtils";

interface BlogLayoutOneProps {
  blog: Blog;
}

const BlogLayoutOne = ({ blog }: BlogLayoutOneProps) => {
  return (
    <div className="group inline-block overflow-hidden rounded-xl relative w-full h-full">
      <div
        className="absolute top-0 left-0 bottom-0 right-0 h-full
            bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-xl z-10
            "
      />
      <img
        src={blog.image.src}
        alt={blog.title}
        className="w-full h-full object-center object-cover rounded-xl group-hover:scale-105 transition-all ease duration-300"
        loading="lazy"
      />

      <div className="w-full absolute bottom-0 p-4 xs:p-6 sm:p-10 z-20">
        <Tag 
          link={`/blog?tag=${slug(blog.tags[0])}`} 
          name={blog.tags[0]}
          className="px-6 text-xs sm:text-sm py-1 sm:py-2 !border"
        />
        <Link to={blog.url} className="mt-6">
          <h2 className="font-bold capitalize text-sm xs:text-base sm:text-xl md:text-2xl text-light mt-2 sm:mt-4">
            <span
              className="bg-gradient-to-r from-primary-400 to-primary-400 bg-[length:0px_6px] dark:from-primary-400/50 dark:to-primary-400/50
                group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 "
            >
              {blog.title}
            </span>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default BlogLayoutOne;

