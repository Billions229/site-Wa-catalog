You are given a task to integrate an existing React component in the codebase

The codebase should support:
- shadcn project structure  
- Tailwind CSS
- Typescript

If it doesn't, provide instructions on how to setup project via shadcn CLI, install Tailwind or Typescript.

Determine the default path for components and styles. 
If default path for components is not /components/ui, provide instructions on why it's important to create this folder
Copy-paste this component to /components/ui folder:
\`\`\`tsx
product-feature-card.tsx
// components/ui/product-feature-card.tsx

"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Define the props for the component
interface ProductFeatureCardProps {
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  className?: string;
}

// Framer Motion animation variants
const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const ProductFeatureCard = React.forwardRef<
  HTMLDivElement,
  ProductFeatureCardProps
>(
  (
    {
      imageUrl,
      imageAlt,
      title,
      description,
      linkText,
      linkHref,
      className,
    },
    ref
  ) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          "group relative w-full max-w-sm overflow-hidden rounded-xl border bg-card p-6 shadow-sm",
          "transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1",
          className
        )}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
        variants={cardVariants}
      >
        {/* Image Section */}
        <div className="mb-6 flex justify-center">
          <img
            src={imageUrl}
            alt={imageAlt}
            width={300}
            height={200}
            className="h-auto w-full max-w-[280px] object-contain"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold text-card-foreground">{title}</h2>
          <p className="mt-2 text-muted-foreground">{description}</p>
          <a
            href={linkHref}
            className="group/link mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground"
          >
            {linkText}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
          </a>
        </div>
      </motion.div>
    );
  }
);

ProductFeatureCard.displayName = "ProductFeatureCard";

export { ProductFeatureCard };

demo.tsx
// demo.tsx

import { ProductFeatureCard } from "@/components/ui/product-feature-card";

export default function ProductFeatureCardDemo() {
  return (
    <div className="flex min-h-[500px] w-full items-center justify-center bg-background p-4">
      <ProductFeatureCard
        title="Personalized weight care,"
        description="lasting results by certified doctors."
        linkText="Take the quiz"
        linkHref="#"
        // Replace with your actual image source
        imageUrl="https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-0QlbZHclWAdizaFGxn2Nv3ECg3zLG7.png&w=320&q=75"
        imageAlt="Measured product box and vial"
      />
    </div>
  );
}
\`\`\`

Install NPM dependencies:
\`\`\`bash
lucide-react, framer-motion
\`\`\`

Implementation Guidelines
 1. Analyze the component structure and identify all required dependencies
 2. Review the component's argumens and state
 3. Identify any required context providers or hooks and install them
 4. Questions to Ask
 - What data/props will be passed to this component?
 - Are there any specific state management requirements?
 - Are there any required assets (images, icons, etc.)?
 - What is the expected responsive behavior?
 - What is the best place to use this component in the app?

Steps to integrate
 0. Copy paste all the code above in the correct directories
 1. Install external dependencies
 2. Fill image assets with Unsplash stock images you know exist
 3. Use lucide-react icons for svgs or logos if component requires them
