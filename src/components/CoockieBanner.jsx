import { useState } from "react";
import { Link } from "react-router-dom";

function CookieBanner() {
  const [visible, setVisible] = useState(
    () => !localStorage.getItem("cookieConsent"),
  );

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner">
      <p className="text-tertiary cookie-text">
        Мы используем куки-файлы и метрическую систему{" "}
        <a
          href="https://yandex.ru/legal/metrica_termsofuse/ru/"
          target="_blank"
          rel="noreferrer"
        >
          «Яндекс.Метрика»
        </a>{" "}
        в целях улучшения и обеспечения работоспособности сайта, обрабатываем
        персональные данные в соответствии с{" "}
        <Link to="/privacy" target="_blank" rel="noreferrer">
          Политикой конфиденциальности
        </Link>{" "}
        и{" "}
        <Link to="/consent" target="_blank" rel="noreferrer">
          Согласием на обработку персональных данных
        </Link>
        .
      </p>

      <button className="btn-primary cookie-accept" onClick={handleAccept}>
        Принять
      </button>
    </div>
  );
}

export default CookieBanner;
