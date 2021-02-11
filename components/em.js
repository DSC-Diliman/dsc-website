export default function Em({ children, className, emClassName }) {
  return <span className={`relative whitespace-nowrap z-0 ${className}`}><span className={`absolute -z-10 w-full h-3 ${emClassName}`} />{children}</span>
}