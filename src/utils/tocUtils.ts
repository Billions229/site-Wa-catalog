import { slug } from "github-slugger";

export interface TOCItem {
  title: string;
  url: string;
  items?: TOCItem[];
}

// Fonction pour extraire les headings du markdown et créer un TOC
export function generateTOC(content: string): TOCItem[] {
  const lines = content.split('\n');
  const toc: TOCItem[] = [];
  const stack: Array<{ level: number; item: TOCItem }> = [];

  lines.forEach((line) => {
    // Détecter les headings markdown (# ## ###)
    const headingMatch = line.match(/^(#{1,6})\s+(.+)$/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      const title = headingMatch[2].trim().replace(/\{#[^}]+\}/g, ''); // Enlever les IDs existants
      const url = `#${slug(title)}`;

      const item: TOCItem = {
        title,
        url,
        items: [],
      };

      // Retirer les éléments de la stack qui sont au même niveau ou supérieurs
      while (stack.length > 0 && stack[stack.length - 1].level >= level) {
        stack.pop();
      }

      if (stack.length === 0) {
        // Premier élément ou retour au niveau racine
        toc.push(item);
        stack.push({ level, item });
      } else {
        // Ajouter comme enfant du dernier élément de la stack
        const parent = stack[stack.length - 1].item;
        if (!parent.items) {
          parent.items = [];
        }
        parent.items.push(item);
        stack.push({ level, item });
      }
    }
  });

  // Nettoyer les items vides
  function cleanItems(items: TOCItem[]): TOCItem[] {
    return items.map(item => ({
      ...item,
      items: item.items && item.items.length > 0 ? cleanItems(item.items) : undefined,
    })).filter(item => item.title);
  }

  return cleanItems(toc);
}

// Fonction pour ajouter des IDs aux headings dans le markdown
export function addHeadingIds(content: string): string {
  const lines = content.split('\n');
  return lines.map((line) => {
    const headingMatch = line.match(/^(#{1,6})\s+(.+)$/);
    if (headingMatch) {
      const title = headingMatch[2].trim();
      const id = slug(title);
      return `${headingMatch[1]} ${title} {#${id}}`;
    }
    return line;
  }).join('\n');
}

