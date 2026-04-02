"use client";

import { motion } from "framer-motion";

const FadeInText = ({
  text,
  duration,
  delay,
}: {
  text: string;
  duration?: number;
  delay?: number;
}) => (
  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: duration || 1, delay: delay || 0 }}
  >
    {text}
  </motion.p>
);

export default FadeInText;
