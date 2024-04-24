import { Routes, Route } from "react-router-dom";
import HomePages from "./pages/HomePages";
import KelasPage from "./pages/KelasPage";
import TestiPage from "./pages/TestiPage";
import SKPage from "./pages/SKPage";
import FaqPage from "./pages/FaqPage";
import ContactPage from "./pages/ContactPage";

import NavbarsComponent from "./components/NavbarsComponent";
import FooterComponent from "./components/FooterComponent";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <NavbarsComponent />

      <Routes>
        <Route path="/" Component={HomePages} />
        <Route path="/kelas" Component={KelasPage} />
        <Route path="/testi" Component={TestiPage} />
        <Route path="/sk" Component={SKPage} />
        <Route path="/faq" Component={FaqPage} />
        <Route path="/contact" Component={ContactPage} />
      </Routes>
      <FooterComponent />
    </div>
  );
}
export default App;
