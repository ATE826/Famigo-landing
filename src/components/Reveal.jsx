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
      onTransitionEnd={(e) => {
        // снимаем will-change с самого элемента после завершения анимации,
        // чтобы Firefox не держал лишний composite layer в памяти
        if (e.target === e.currentTarget) {
          e.currentTarget.style.willChange = "auto";
        }
      }}
    >
      {children}
    </Tag>
  );
}
