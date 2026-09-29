import { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import "./LegalPage.css";

// Разбор строки: **жирный**, `код`, [текст](ссылка), голые https://...
function renderInline(text) {
  const re = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\)|https?:\/\/[^\s)]+[^\s).,;])/g;
  return text.split(re).map((part, i) => {
    if (!part) return null;
    if (part.startsWith("**")) return <strong key={i}>{part.slice(2, -2)}</strong>;
    if (part.startsWith("`")) return <code key={i}>{part.slice(1, -1)}</code>;
    const md = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (md) {
      return md[2].startsWith("/") ? (
        <Link key={i} to={md[2]}>{md[1]}</Link>
      ) : (
        <a key={i} href={md[2]} target="_blank" rel="noopener noreferrer">{md[1]}</a>
      );
    }
    if (part.startsWith("http"))
      return <a key={i} href={part} target="_blank" rel="noopener noreferrer">{part}</a>;
    return part;
  });
}

function parse(src) {
  const blocks = [];
  let list = null;
  for (const raw of src.split("\n")) {
    const line = raw.trim();
    if (!line) { list = null; continue; }
    if (line.startsWith("# ")) blocks.push({ type: "title", text: line.slice(2) });
    else if (line.startsWith("## ")) { list = null; blocks.push({ type: "h2", text: line.slice(3) }); }
    else if (line.startsWith("- ")) {
      if (!list) { list = { type: "ul", items: [] }; blocks.push(list); }
      list.items.push(line.slice(2));
    } else if (line.startsWith("_") && line.endsWith("_")) blocks.push({ type: "meta", text: line.slice(1, -1) });
    else { list = null; blocks.push({ type: "p", text: line }); }
  }
  return blocks;
}

const slug = (t, i) => `s${i}`;

export default function LegalPage({ text }) {
  const blocks = useMemo(() => parse(text), [text]);
  const title = blocks.find((b) => b.type === "title")?.text;
  const headings = blocks.filter((b) => b.type === "h2");

  useEffect(() => {
    window.scrollTo(0, 0);
    if (title) document.title = `${title} — Famigo`;
  }, [title]);

  let h = -1;
  return (
    <>
      <header className="legal-header">
        <div className="wrap">
          <Link to="/" className="legal-brand">
            <img src={logo} alt="Famigo Logo" style={{ width: 35, height: 35 }} />
            <div>
              <div className="brand-name">Famigo</div>
              <div className="brand-tag">Всё для семьи в одном месте</div>
            </div>
          </Link>
          <Link to="/" className="btn-primary">На главную</Link>
        </div>
      </header>

      <main className="legal-main">
        <div className="legal-layout">
          <nav className="legal-toc" aria-label="Содержание">
            <p className="text-primary legal-toc-title">Содержание</p>
            <ol>
              {headings.map((b, i) => (
                <li key={i}>
                  <a href={`#${slug(b.text, i)}`}>{b.text.replace(/^\d+\.\s*/, "")}</a>
                </li>
              ))}
            </ol>
          </nav>

          <article className="legal-doc">
            {blocks.map((b, i) => {
              if (b.type === "title") return <h1 key={i} className="text-primary">{b.text}</h1>;
              if (b.type === "meta") return <p key={i} className="text-tertiary legal-meta">{b.text}</p>;
              if (b.type === "h2") {
                h += 1;
                return <h2 key={i} id={slug(b.text, h)} className="text-primary">{b.text}</h2>;
              }
              if (b.type === "ul")
                return (
                  <ul key={i}>
                    {b.items.map((it, j) => (
                      <li key={j} className="text-secondary">{renderInline(it)}</li>
                    ))}
                  </ul>
                );
              return <p key={i} className="text-secondary">{renderInline(b.text)}</p>;
            })}
          </article>
        </div>
      </main>

      <footer>
        <div className="footer-section">
          <div className="footer-content">
            <p className="text-tertiary">© 2026 Famigo</p>
            <p className="text-tertiary">Лендинг Famigo · React</p>
          </div>
        </div>
      </footer>
    </>
  );
}
