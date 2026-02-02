"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  delay?: number;
}

export default function Card({ title, description, icon, delay = 0 }: CardProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] }}
      className="card group"
    >
      {icon && (
        <div className="mb-6 text-[#a4161a] transform group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      )}
      <h3 className="text-2xl font-bold text-[#0b090a] mb-4 group-hover:text-[#a4161a] transition-colors">
        {title}
      </h3>
      <p className="text-[#161a1d] leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
