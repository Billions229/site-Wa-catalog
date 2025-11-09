import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { slug } from 'github-slugger';
import type { Blog } from '@/utils/blogUtils';

interface RenderMdxProps {
  blog: Blog;
}

const RenderMdx = ({ blog }: RenderMdxProps) => {
  return (
    <div className='font-in prose sm:prose-base md:prose-lg max-w-none
    prose-blockquote:bg-primary-50 
    prose-blockquote:p-2
    prose-blockquote:px-6
    prose-blockquote:border-primary-500
    prose-blockquote:not-italic
    prose-blockquote:rounded-r-lg

    prose-figure:relative
    prose-figcaption:mt-1
    prose-figcaption:mb-2

    prose-li:marker:text-primary-500

    dark:prose-invert
    dark:prose-blockquote:border-primary-400
    dark:prose-blockquote:bg-primary-900/20
    dark:prose-li:marker:text-primary-400

    first-letter:text-3xl
    sm:first-letter:text-5xl'> 
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        components={{
          // Ajouter des IDs aux headings pour le TOC
          h1: ({node, children, ...props}) => {
            const id = typeof children === 'string' ? slug(children) : slug(String(children));
            return <h1 id={id} {...props} className="scroll-mt-20">{children}</h1>;
          },
          h2: ({node, children, ...props}) => {
            const id = typeof children === 'string' ? slug(children) : slug(String(children));
            return <h2 id={id} {...props} className="scroll-mt-20">{children}</h2>;
          },
          h3: ({node, children, ...props}) => {
            const id = typeof children === 'string' ? slug(children) : slug(String(children));
            return <h3 id={id} {...props} className="scroll-mt-20">{children}</h3>;
          },
          img: ({node, ...props}) => (
            <img 
              {...props} 
              className="w-full h-auto rounded-lg my-4"
              loading="lazy"
            />
          ),
          a: ({node, href, ...props}) => {
            // Si c'est un lien interne (commence par #), ne pas ouvrir dans un nouvel onglet
            if (href?.startsWith('#')) {
              return (
                <a 
                  href={href} 
                  {...props} 
                  className="text-primary-600 hover:text-primary-700 hover:underline dark:text-primary-400 dark:hover:text-primary-300"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                />
              );
            }
            // Liens externes
            return (
              <a 
                href={href} 
                {...props} 
                className="text-primary-600 hover:text-primary-700 hover:underline dark:text-primary-400 dark:hover:text-primary-300" 
                target="_blank" 
                rel="noopener noreferrer" 
              />
            );
          },
          code: ({node, inline, ...props}) => (
            inline ? (
              <code {...props} className="bg-dark/10 dark:bg-light/10 px-1.5 py-0.5 rounded text-sm" />
            ) : (
              <code {...props} className="block bg-dark text-light p-4 rounded-lg overflow-x-auto text-sm" />
            )
          ),
        }}
      >
        {blog.body}
      </ReactMarkdown>
    </div>
  );
};

export default RenderMdx;

