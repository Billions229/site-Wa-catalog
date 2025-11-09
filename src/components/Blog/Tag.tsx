import { Link } from "react-router-dom";
import { cx } from "@/utils/blogUtils";
import type { Blog } from "@/utils/blogUtils";

interface TagProps {
  link?: string;
  name: string;
  className?: string;
}

const Tag = ({ link = "#", name, className }: TagProps) => {
  return (
    <Link
      to={link}
      className={cx(
        "inline-block py-2 sm:py-3 px-6 sm:px-10 bg-dark text-light rounded-full capitalize font-semibold border-2 border-solid border-light hover:scale-105 transition-all ease duration-200 text-sm sm:text-base",
        className
      )}
    >
      {name}
    </Link>
  );
};

export default Tag;

