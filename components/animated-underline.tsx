import { motion } from "framer-motion";

interface Props {
  children: JSX.Element | string;
  className: string;
}

export default function AnimatedUnderline({ children, className }: Props) {
  return (
    <span className="relative z-0">
      <motion.span
        whileInView={{ width: ["0%", "100%"] }}
        className={`absolute -z-10 h-3 origin-left ${className}`}
        transition={{ duration: 1.5 }}
      />
      {children}
    </span>
  );
}
