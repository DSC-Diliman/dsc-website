import { motion } from "framer-motion";

interface Props {
  className: string;
}

export default function AnimatedCircle({ className }: Props) {
  return (
    <motion.div
      className={`absolute -z-10 rounded-full ${className}`}
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ repeat: Infinity, duration: 3 }}
    />
  );
}
