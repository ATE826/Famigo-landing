import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header>
        <div className="wrap">
          <div className="logo">
            <div>
              <img
                style={{ width: "35px", height: "35px" }}
                src="src\assets\Logo.png"
                alt="Famigo Logo"
              />
            </div>
            <div>
              <div className="brand-name">Famigo</div>
              <div className="brand-tag">Всё для семьи в одном месте</div>
            </div>
          </div>
          <nav className="nav">
            <a href="#connected">Как это работает</a>
            <a href="#features">Возможности</a>
            <a href="#team">Команда</a>
          </nav>
          <a href="" className="btn-primary">
            Создать семью
          </a>
        </div>
      </header>
      <main>
        <section className="hero">
          <div className="bg">
            <img
              src="https://images.unsplash.com/photo-1758687126864-96b61e1b3af0?fm=jpg&amp;q=85&amp;w=2600&amp;auto=format&amp;fit=crop"
              alt="Семья вместе дома"
            ></img>
            <div className="tone"></div>
          </div>
          <div className="hero-row">
            <div className="text-content">
              {/* <div className="product-tags">
                <p className="tag">Тёплый</p>
                <p className="tag">Cпокойный</p>
                <p className="tag">Технологичный</p>
              </div> */}
              <h1 className="text-primary">
                Хватит держать семью в десятке приложений
              </h1>
              <p className="text-secondary">
                Famigo собирает бюджет, холодильник, календарь и общение в одном
                тёплом пространстве — чтобы важное не терялось в чатах и
                заметках.
              </p>
              <div className="button">
                <a href="" className="btn-primary">
                  Создать семью
                </a>
                <p className="text-tertiary">Всего за 2 минуты</p>
              </div>
            </div>
            <div className="card-content"></div>
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
