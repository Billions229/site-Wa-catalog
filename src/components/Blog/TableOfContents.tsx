import { useEffect, useState } from "react";
import { generateTOC, type TOCItem } from "@/utils/tocUtils";

interface TableOfContentsProps {
  content: string;
}

function TableOfContentsItem({ item, level = "two" }: { item: TOCItem; level?: string }) {
  return (
    <li className="py-1">
      <a
        href={item.url}
        data-level={level}
        className="data-[level=two]:pl-0 data-[level=two]:pt-2
                  data-[level=two]:border-t border-solid border-dark/40 dark:border-light/40
                  data-[level=three]:pl-4
                  sm:data-[level=three]:pl-6
                  flex items-center justify-start
                  text-dark dark:text-light
                  hover:text-primary-600 dark:hover:text-primary-400
                  transition-colors"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          const element = document.querySelector(item.url);
          if (element) {
            // Calculer la position avec offset pour la navbar
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - 100;
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
            // Mettre à jour l'URL sans recharger la page
            window.history.pushState(null, '', item.url);
          }
        }}
      >
        {level === "three" && (
          <span className="flex w-1 h-1 rounded-full bg-dark dark:bg-light mr-2">&nbsp;</span>
        )}
        <span className="hover:underline">{item.title}</span>
      </a>
      {item.items && item.items.length > 0 && (
        <ul className="mt-1">
          {item.items.map((subItem) => (
            <TableOfContentsItem 
              key={subItem.url} 
              item={subItem} 
              level="three"
            />
          ))}
        </ul>
      )}
    </li>
  );
}

const TableOfContents = ({ content }: TableOfContentsProps) => {
  const [toc, setToc] = useState<TOCItem[]>([]);

  useEffect(() => {
    const generatedTOC = generateTOC(content);
    setToc(generatedTOC);
  }, [content]);

  if (toc.length === 0) {
    return null;
  }

  return (
    <div className="lg:sticky lg:top-6 lg:self-start">
      <details
        className="border-[1px] border-solid border-dark dark:border-light text-dark dark:text-light rounded-lg p-4"
        open
      >
        <summary className="text-lg font-semibold capitalize cursor-pointer mb-2">
          Table des matières
        </summary>
        <nav className="mt-2">
          <ul className="font-in text-base space-y-1">
            {toc.map((item) => (
              <TableOfContentsItem key={item.url} item={item} />
            ))}
          </ul>
        </nav>
      </details>
    </div>
  );
};

export default TableOfContents;

