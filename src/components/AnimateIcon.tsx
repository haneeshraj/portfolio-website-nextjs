"use client";

import { motion } from "framer-motion";

const AnimateIcon = ({
  className,
  children,
  delay = 0,
}: {
  className?: string;
  children: React.ReactNode;
  delay?: number;
}) => {
  return (
    <div className={className} style={{ overflow: "hidden" }}>
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.9, ease: [0.3, 0, 0, 1], delay: delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AnimateIcon;
