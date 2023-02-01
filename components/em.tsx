interface Props {
  children?: string;
  className?: string;
  emClassName?: string;
}

export default function Em({ children, className, emClassName }: Props) {
  return (
    <span className={`relative z-0 whitespace-nowrap ${className}`}>
      <span className={`absolute -z-10 h-3 w-full ${emClassName}`} />
      {children}
    </span>
  );
}
