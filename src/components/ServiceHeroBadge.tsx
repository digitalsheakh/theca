// type ServiceHeroBadgeProps = {
//   title: string;
// };

// export default function ServiceHeroBadge({ title }: ServiceHeroBadgeProps) {
//   return (
//     <div className="absolute top-4 left-4 right-4 z-20 sm:top-8 sm:left-8 sm:right-auto md:left-16">
//       <span className="inline-block max-w-full bg-orange-600 px-3 py-2 text-xs font-bold uppercase leading-tight tracking-wider text-white break-words sm:px-4 sm:text-sm font-rajdhani">
//         {title}
//       </span>
//     </div>
//   );
// }

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
function ServiceHeroBadge({ title, className }: {
  title: string,
  className?: string
}) {
  return (
    <motion.div variants={fadeInUp} className={cn('absolute top-4 left-4  border-l-4 border-orange-600 pl-4 mb-6 w-fit bg-black/50', className)}>
      <p className="text-orange-600 text-sm text-center align-middle font-bold uppercase tracking-wider font-rajdhani">
        {title}
      </p>
    </motion.div>)
}

export default ServiceHeroBadge