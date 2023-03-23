interface Props {
  children: JSX.Element | string;
  className: string;
}

export default function Underline({ children, className }: Props) {
  return (
    <span className="relative z-0">
      <span className={`absolute -z-10 h-3 w-full ${className}`} />
      {children}
    </span>
  );
}
