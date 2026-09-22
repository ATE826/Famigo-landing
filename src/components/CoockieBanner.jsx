import { useState } from "react";

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
        <a
          href="https://dogovor.ru/pages/view/politika-konfidencialnosti"
          target="_blank"
          rel="noreferrer"
        >
          Политикой конфиденциальности
        </a>{" "}
        и{" "}
        <a
          href="https://dogovor.ru/pages/view/soglasie-na-obrabotku-personalnyh-dannyh"
          target="_blank"
          rel="noreferrer"
        >
          Согласием на обработку персональных данных
        </a>
        .
      </p>

      <button className="btn-primary cookie-accept" onClick={handleAccept}>
        Принять
      </button>
    </div>
  );
}

export default CookieBanner;
