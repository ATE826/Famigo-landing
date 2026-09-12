import { useState } from "react";
import "./App.css";
import bg from "./assets/background.png";
import logo from "./assets/Logo.png";
import fridgeImg from "./assets/fridge.png";
import budgetImg from "./assets/budget.png";

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
                Тёплая, спокойная и технологичная
              </span>
              семейная экосистема — всё необходимое без лишних деталей
              ивизуальной перегрузки.
            </p>
          </div>
          <div className="info">
            <div className="info-section">
              <div className="card-grid card-info">
                <div className="card-image">
                  <img src={fridgeImg} alt="Fridge image" />
                </div>
                <div className="content">sdfsfd</div>
              </div>
              <div className="card-grid card-info">
                <div className="content">asdsadsa</div>
                <div className="card-image">
                  <img src={budgetImg} alt="Budget image" />
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
