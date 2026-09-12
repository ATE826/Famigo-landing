import { useState } from "react";
import "./App.css";
import bg from "./assets/background.png";
import logo from "./assets/Logo.png";
import fridgeImg from "./assets/fridge.png";
import budgetImg from "./assets/budget.png";
import locationImg from "./assets/location.png";
import chattingImg from "./assets/chatting.jpg";
import planningImg from "./assets/planning.jpg";

function App() {
  return (
    <>
      <header>
        <div className="wrap">
          <div className="logo">
            <div>
              <img
                style={{ width: "35px", height: "35px" }}
                src={logo}
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
            Добавить семью
          </a>
        </div>
      </header>
      <main>
        <section className="hero">
          <div className="bg">
            <img src={bg} alt="Семья вместе дома"></img>
            <div className="tone"></div>
          </div>
          <div className="hero-row">
            <div className="text-content">
              <div className="product-tags">
                <p className="tag">Тёплый</p>
                <p className="tag">Cпокойный</p>
                <p className="tag">Технологичный</p>
              </div>
              <h1 className="text-primary hero-text-primary">
                Хватит держать семью в десятке приложений
              </h1>
              <p className="text-secondary hero-text-secondary">
                Famigo собирает бюджет, холодильник, календарь и общение в одном
                тёплом пространстве — чтобы важное не терялось в чатах и
                заметках.
              </p>
              <div className="button">
                <a href="" className="btn-primary">
                  Добавть свою семью
                </a>
                <p className="text-tertiary near-button-text">
                  Всего за 2 минуты
                </p>
              </div>
            </div>
            <div className="card-content">
              <div className="card">
                <div className="card-row">
                  <p className="text-primary card-category">Семья Ивановых</p>
                  <p className="text-tertiary">4 человека</p>
                </div>
                <div className="card-row">
                  <div className="card-icon-title">
                    <p>💰</p>
                    <p className="text-secondary card-category">Бюджет</p>
                  </div>
                  <p className="text-secondary card-category">
                    <b>1 963 580 ₽</b>
                  </p>
                </div>
                <div className="card-row">
                  <div className="card-icon-title">
                    <p>📅</p>
                    <p className="text-secondary card-category">Календарь</p>
                  </div>
                  <p className="text-secondary card-category">
                    <b>Семейный ужин</b>
                  </p>
                </div>
                <div className="card-row last-card-category">
                  <div className="card-icon-title">
                    <p>🗄️</p>
                    <p className="text-secondary card-category">Холодильник</p>
                  </div>
                  <p className="text-secondary card-category last-cartd-category">
                    <b>Молоко заканчивается</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="statement">
            <p className="text-primary text-statement">
              <span style={{ color: "var(--dark)" }}>
                Тёплая, спокойная и технологичная{" "}
              </span>
              семейная экосистема — всё необходимое без лишних деталей и
              визуальной перегрузки.
            </p>
          </div>
          <div className="info">
            <div className="info-section">
              <div className="card-grid card-info">
                <div className="card-image">
                  <img src={fridgeImg} alt="Fridge image" />
                </div>
                <div className="content">
                  <div className="roadmap">
                    <div className="circle"></div>
                    <p className="text-tertiary">Холодильник</p>
                  </div>
                  <h2 className="text-primary" style={{ marginTop: "0px" }}>
                    Смотрите когда угодно, а не только дома
                  </h2>
                  <p className="text-secondary" style={{ marginTop: "0px" }}>
                    Актуальный список продуктов дома, доступный всей семье. Не
                    покупайте то, что уже есть, и не оставайтесь без того, что
                    уже закончилось.
                  </p>
                </div>
              </div>
              <div className="card-grid card-info">
                <div className="content">
                  <div className="roadmap">
                    <div className="circle"></div>
                    <p className="text-tertiary">Бюджет</p>
                  </div>
                  <h2 className="text-primary" style={{ marginTop: "0px" }}>
                    Считайте свой бюджет, вплоть до копейки
                  </h2>
                  <p className="text-secondary" style={{ marginTop: "0px" }}>
                    Что-то потратили - отметили в бюджете, что-то получили -
                    отметили в бюджете. Всё в одной экосистеме!
                  </p>
                </div>
                <div className="card-image">
                  <img src={budgetImg} alt="Budget image" />
                </div>
              </div>
              <div className="card-grid card-info">
                <div className="card-image">
                  <img src={chattingImg} alt="Fridge image" />
                </div>
                <div className="content">
                  <div className="roadmap">
                    <div className="circle"></div>
                    <p className="text-tertiary">Чаты</p>
                  </div>
                  <h2 className="text-primary" style={{ marginTop: "0px" }}>
                    Всегда на связи с родными
                  </h2>
                  <p className="text-secondary" style={{ marginTop: "0px" }}>
                    Создавайте чаты, обсуждайте планы, договаривайтесь о делах и
                    делитесь самым важным. Всё в одном месте!
                  </p>
                </div>
              </div>
              <div className="card-grid card-info">
                <div className="content">
                  <div className="roadmap">
                    <div className="circle"></div>
                    <p className="text-tertiary">Календарь</p>
                  </div>
                  <h2 className="text-primary" style={{ marginTop: "0px" }}>
                    Планируйте дела и мероприятия вместе
                  </h2>
                  <p className="text-secondary" style={{ marginTop: "0px" }}>
                    Общие планы, личные события и важные напоминания собраны в
                    одном календаре, чтобы ничего не упустить и не забыть.
                  </p>
                </div>
                <div className="card-image">
                  <img src={planningImg} alt="Budget image" />
                </div>
              </div>
              <div className="card-grid card-info" id="last-card-info">
                <div className="card-image">
                  <img src={locationImg} alt="Fridge image" />
                </div>
                <div className="content">
                  <div className="roadmap">
                    <div className="circle"></div>
                    <p className="text-tertiary">Геолокация</p>
                  </div>
                  <h2 className="text-primary" style={{ marginTop: "0px" }}>
                    Всегда знайте, где находятся близкие
                  </h2>
                  <p className="text-secondary" style={{ marginTop: "0px" }}>
                    Смотрите локации членов семьи в реальном времени и всегда
                    оставайтесь в курсе, где находятся ваши близкие.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="visual-info">
            <div className="visual-info-wrapper">
              <div className="content">
                <p className="text-tertiary soft-green text">
                  Единый визуальный язык
                </p>
                <h2 className="text-primary warm-white text">
                  Один и тот же приятный стиль на любом экране
                </h2>
                <p className="text-secondary soft-green text">
                  Все компоненты веб-приложения соответсвуют специальной
                  цветовой палитре: тёпло-белый нейтральный фон, зелёный и
                  оранжевый для взаимодействия с функционалом.
                </p>
              </div>
            </div>
            <div className="visual-info-wrapper">
              <div className="content-info-2">
                <div className="task-1">
                  <p className="text-tertiary">
                    Молоко заканчивается — добавить в список?
                  </p>
                  <a href="#">Открыть холодильник</a>
                </div>
                <div className="task-2">
                  <p className="text-tertiary">
                    Папа создал событие «Семейный ужин» на 19:00
                  </p>
                  <a href="#">Календарь</a>
                </div>
                <div className="task-3">
                  <h1
                    className="text-primary warm-white"
                    style={{ marginTop: "0px" }}
                  >
                    Famigo
                  </h1>
                  <p
                    className="text-tertiary soft-green"
                    style={{ marginTop: "-10px" }}
                  >
                    Папа создал событие «Семейный ужин» на 19:00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
