"use client"

import type React from "react"

import { motion, useInView } from "framer-motion"
import { useRef, forwardRef, type ReactNode, type JSX } from "react"
import { cn } from "@/lib/utils"

interface TimelineContentProps {
  children: ReactNode
  animationNum: number
  timelineRef: React.RefObject<HTMLElement>
  customVariants?: any
  className?: string
  as?: keyof JSX.IntrinsicElements
}

export const TimelineContent = forwardRef<HTMLElement, TimelineContentProps>(
  ({ children, animationNum, timelineRef, customVariants, className, as: Component = "div" }, ref) => {
    const contentRef = useRef<HTMLElement>(null)
    const isInView = useInView(contentRef, {
      once: true,
      margin: "-100px",
    })

    const defaultVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: i * 0.2,
          duration: 0.5,
        },
      }),
    }

    const variants = customVariants || defaultVariants

    return (
      <motion.div
        ref={contentRef as any}
        custom={animationNum}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variants}
        className={cn(className)}
      >
        {children}
      </motion.div>
    )
  },
)

TimelineContent.displayName = "TimelineContent"
