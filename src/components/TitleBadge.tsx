"use client";

import React from 'react'
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
// Animation variants for scroll animations
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};
function TitleBadge({ title, className }: {
  title: string,
  className?: string
}) {
  return (
    <motion.div variants={fadeInUp} className={cn('border-l-4 border-orange-600 pl-4 mb-6 w-fit', className)}>
      <p className="text-orange-600 text-sm text-center align-middle font-bold uppercase tracking-wider font-rajdhani">
        {title}
      </p>
    </motion.div>)
}

export default TitleBadge
