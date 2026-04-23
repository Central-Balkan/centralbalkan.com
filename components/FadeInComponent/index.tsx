"use client";

import { motion } from "framer-motion";

const FadeInComponent = ({
  children,
  duration,
  delay,
}: {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: duration || 1, delay: delay || 0 }}
  >
    {children}
  </motion.div>
);

export default FadeInComponent;
