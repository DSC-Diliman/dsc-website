import { motion } from "framer-motion";

interface Props {
  children: string;
  className: string;
}

export default function AnimatedText({ children, className }: Props) {
  return (
    <motion.p
      className={className}
      animate={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.p>
  );
}
