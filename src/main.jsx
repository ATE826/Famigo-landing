import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import privacyText from "./legal/privacy.md?raw";
import consentText from "./legal/consent.md?raw";
import LegalPage from "./pages/LegalPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/privacy" element={<LegalPage text={privacyText} />} />
        <Route path="/consent" element={<LegalPage text={consentText} />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
