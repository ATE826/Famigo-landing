import { useReveal } from "../hooks/useReveal";

export default function Reveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
  id,
}) {
  const [ref, isVisible] = useReveal();

  return (
    <Tag
      ref={ref}
      id={id}
      className={`reveal ${isVisible ? "reveal-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
