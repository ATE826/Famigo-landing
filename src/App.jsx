import "./App.css";
import bg from "./assets/background.webp";
import logo from "./assets/Logo.svg";
import MobileLogo from "./assets/MobileLogo.svg";
import fridgeImg from "./assets/fridge.webp";
import budgetImg from "./assets/budget.webp";
import locationImg from "./assets/location.webp";
import chattingImg from "./assets/chatting.webp";
import planningImg from "./assets/planning.webp";
import Reveal from "./components/Reveal";

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
                id="logo"
              />
            </div>
            <div>
              <div className="brand-name">Famigo</div>
              <div className="brand-tag">Всё для семьи в одном месте</div>
            </div>
          </div>
          <nav className="nav">
            <a href="#features">Возможности</a>
            <a href="#examples">Как это работает</a>
            <a href="#team">Команда</a>
          </nav>
          <a href="#button" className="btn-primary" id="first-button">
            Добавить семью
          </a>
        </div>
        <div className="mobile-logo">
          <img src={MobileLogo} alt="Famigo logo" className="pacifico" />
        </div>
      </header>
      <main>
        <section className="hero">
          <div className="bg">
            <img
              src={bg}
              alt="Семья вместе дома"
              fetchPriority="high"
              id="bg"
            ></img>
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
                <a href="#button" className="btn-primary">
                  Добавить свою семью
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

        <section id="features">
          <Reveal>
            <div className="statement">
              <p className="text-primary text-statement">
                <span style={{ color: "var(--dark)" }}>
                  Тёплая, спокойная и технологичная{" "}
                </span>
                семейная экосистема — всё необходимое без лишних деталей и
                визуальной перегрузки.
              </p>
            </div>
          </Reveal>

          <div className="info">
            <div className="info-section">
              <Reveal className="card-grid card-info">
                <div className="card-image">
                  <img
                    src={fridgeImg}
                    alt="Fridge image"
                    loading="lazy"
                    decoding="async"
                  />
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
              </Reveal>

              <Reveal className="card-grid card-info" delay={80}>
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
                  <img
                    src={budgetImg}
                    alt="Budget image"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </Reveal>

              <Reveal className="card-grid card-info">
                <div className="card-image">
                  <img
                    src={chattingImg}
                    alt="Fridge image"
                    loading="lazy"
                    decoding="async"
                  />
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
              </Reveal>

              <Reveal className="card-grid card-info" delay={80}>
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
                  <img
                    src={planningImg}
                    alt="Budget image"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </Reveal>

              <Reveal className="card-grid card-info" id="last-card-info">
                <div className="card-image">
                  <img
                    src={locationImg}
                    alt="Fridge image"
                    loading="lazy"
                    decoding="async"
                  />
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
              </Reveal>
            </div>
          </div>
        </section>

        <section id="examples">
          <Reveal>
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
          </Reveal>
        </section>

        <section className="possibilities-section">
          <div className="wrapper">
            <Reveal>
              <h2 className="text-primary">
                Всё, что нужно семье каждый день!
              </h2>
              <p className="text-secondary">
                От первых шагов до полноценного семейного пространства — без
                лишних приложений.
              </p>
            </Reveal>
            <div className="possibilities-grid">
              <Reveal className="possibility-wrapper" delay={0}>
                <div className="possibility">
                  <div className="icon">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    >
                      <circle cx="9" cy="8" r="3"></circle>
                      <path d="M2 20c0-3.3 3.1-6 7-6s7 2.7 7 6"></path>
                      <circle cx="18" cy="9" r="2.4"></circle>
                      <path d="M15.5 14c2.9.4 5 2.4 5 6"></path>
                    </svg>
                  </div>
                  <h3 className="text-primary">Общее пространство семьи</h3>
                  <p className="text-secondary">
                    Приглашайте близких по ссылке, назначайте роли и держите
                    всех в курсе того, что происходит дома.
                  </p>
                </div>
              </Reveal>

              <Reveal className="possibility-wrapper" delay={80}>
                <div className="possibility">
                  <div className="icon">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    >
                      <path d="M3 12l9-9 9 9"></path>
                      <path d="M5 10v10h14V10"></path>
                    </svg>
                  </div>
                  <h3 className="text-primary">Дома и пространства</h3>
                  <p className="text-secondary">
                    Квартира, дача, дом родителей — каждое пространство со своим
                    составом жильцов и бюджетом.
                  </p>
                </div>
              </Reveal>

              <Reveal className="possibility-wrapper" delay={160}>
                <div className="possibility">
                  <div className="icon">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    >
                      <path d="M3 12h18M3 12a9 9 0 0 1 18 0M3 12a9 9 0 0 0 18 0"></path>
                    </svg>
                  </div>
                  <h3 className="text-primary">Общий бюджет</h3>
                  <p className="text-secondary">
                    Доходы и расходы по категориям, история операций и понятный
                    график — без лишних таблиц.
                  </p>
                </div>
              </Reveal>

              <Reveal className="possibility-wrapper" delay={0}>
                <div className="possibility">
                  <div className="icon">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    >
                      <rect x="3" y="7" width="18" height="13" rx="2"></rect>
                      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    </svg>
                  </div>
                  <h3 className="text-primary">Холодильник</h3>
                  <p className="text-secondary">
                    Список продуктов, который доступен всегда и везде.
                  </p>
                </div>
              </Reveal>

              <Reveal className="possibility-wrapper" delay={80}>
                <div className="possibility">
                  <div className="icon">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    >
                      <path d="M6 3v4M18 3v4"></path>
                      <rect x="3" y="6" width="18" height="15" rx="2"></rect>
                      <path d="M3 11h18"></path>
                    </svg>
                  </div>
                  <h3 className="text-primary">Семейный календарь</h3>
                  <p className="text-secondary">
                    Ужины, поездки и дела — одно расписание, к которому у всех
                    есть доступ.
                  </p>
                </div>
              </Reveal>

              <Reveal className="possibility-wrapper" delay={160}>
                <div className="possibility">
                  <div className="icon">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    >
                      <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                    </svg>
                  </div>
                  <h3 className="text-primary">Семейный чат</h3>
                  <p className="text-secondary possibility-secondary-text">
                    Обсуждайте планы и мелочи в общем чате, не выходя из Famigo.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section" id="team">
          <div className="team-wrapper">
            <Reveal>
              <h2 className="text-primary">Команда проекта</h2>
            </Reveal>
            <div className="team-grid">
              <Reveal className="developer" delay={0}>
                <div className="developer-content-wrapper">
                  <div className="avatar">ЦА</div>
                  <h3 className="text-primary text-17px">Цейсновский А.Э.</h3>
                  <p className="text-tertiary">Тимлид / разработчик</p>
                  <p className="text-tertiary">
                    Архитектура проекта, разработка, координация команды
                  </p>
                </div>
              </Reveal>

              <Reveal className="developer" delay={100}>
                <div className="developer-content-wrapper">
                  <div className="avatar">ЛС</div>
                  <h3 className="text-primary text-17px">Лапутин С.А.</h3>
                  <p className="text-tertiary">Разработчик / аналитик</p>
                  <p className="text-tertiary">
                    Анализ требований, разработка, проработка функциональности
                  </p>
                </div>
              </Reveal>

              <Reveal className="developer" id="last-developer" delay={200}>
                <div className="developer-content-wrapper">
                  <div className="avatar">ТГ</div>
                  <h3 className="text-primary text-17px">Толмачев Г.А.</h3>
                  <p className="text-tertiary">Разработчик / маркетолог</p>
                  <p className="text-tertiary">
                    Разработка, маркетинговая стратегия, продвижение продукта,
                    анализ рынка
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="team-wrapper">
            <Reveal>
              <h2 className="text-primary">
                Почему Вы должны выбрать именно Famigo?
              </h2>
            </Reveal>
            <div className="reasons">
              <Reveal className="reason-1" delay={0}>
                <div className=" wrapper">
                  <p className="text-tertiary">
                    <b>Сейчас</b>
                  </p>
                  <div className="reason-line">
                    <svg
                      className="cross"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    >
                      <path d="M18 6L6 18M6 6l12 12"></path>
                    </svg>
                    <p className="text-tertiary">
                      Холодильник — наполнение холодильника приходиться
                      запоминать
                    </p>
                  </div>
                  <div className="reason-line">
                    <svg
                      className="cross"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    >
                      <path d="M18 6L6 18M6 6l12 12"></path>
                    </svg>
                    <p className="text-tertiary">
                      Бюджет — в заметках у одного человека
                    </p>
                  </div>
                  <div className="reason-line">
                    <svg
                      className="cross"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    >
                      <path d="M18 6L6 18M6 6l12 12"></path>
                    </svg>
                    <p className="text-tertiary">
                      Чаты — в разных мессенджерах
                    </p>
                  </div>
                  <div className="reason-line">
                    <svg
                      className="cross"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    >
                      <path d="M18 6L6 18M6 6l12 12"></path>
                    </svg>
                    <p className="text-tertiary">
                      Геолокация — нужно скачивать отдельное приложение
                    </p>
                  </div>
                  <div className="reason-line">
                    <svg
                      className="cross"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    >
                      <path d="M18 6L6 18M6 6l12 12"></path>
                    </svg>
                    <p className="text-tertiary">
                      Календарь — заметки и напоминания также в разных
                      программах и, как правило, у одного человека
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal className="reason-2" delay={120}>
                <div className="reason-2 wrapper">
                  <p className="text-tertiary" style={{ marginTop: -8 }}>
                    <b>С Famigo</b>
                  </p>
                  <div className="reason-line">
                    <svg
                      className="ok"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                    <p className="text-tertiary">
                      Холодильник — наполнение холодильника под рукой и
                      синхронизировано на всех устройствах
                    </p>
                  </div>
                  <div className="reason-line">
                    <svg
                      className="ok"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                    <p className="text-tertiary">
                      Бюджет — каждый член семьи может его просматривать и
                      корректировать
                    </p>
                  </div>
                  <div className="reason-line">
                    <svg
                      className="ok"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                    <p className="text-tertiary">
                      Чаты — не нужно постоянно ппереключаться между
                      приложениями. Всё в одном месте
                    </p>
                  </div>
                  <div className="reason-line">
                    <svg
                      className="ok"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                    <p className="text-tertiary">
                      Геолокация — теперь не нужно стороннее приложение, чтобы
                      знать, где ваши родственники
                    </p>
                  </div>
                  <div className="reason-line">
                    <svg
                      className="ok"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                    <p className="text-tertiary">
                      Календарь — синхронизирован на всех устройствах. Теперь
                      никто не забудет о запланированном семейном ужине
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="team-wrapper">
            <Reveal>
              <div className="agitation">
                <div className="logo-text">
                  <img
                    style={{ width: "35px", height: "35px" }}
                    src={logo}
                    alt="Famigo Logo"
                  />
                  <h1 className="text-primary">
                    Соберите свою семью в <span id="h1-text">едином</span>{" "}
                    пространстве
                  </h1>
                </div>
                <a href="#" className="btn-primary deep-green" id="button">
                  Добавить семью
                </a>
              </div>
            </Reveal>
          </div>
        </section>
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

export default App;
