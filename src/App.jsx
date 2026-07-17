import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Home from "./pages/Home.jsx";
import Comparativas from "./pages/Comparativas.jsx";
import Guias from "./pages/Guias.jsx";
import Legal from "./pages/Legal.jsx";
import ComparativaDetalle from "./pages/ComparativaDetalle.jsx";
import GuiasDetalle from "./pages/GuiasDetalle.jsx";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comparativas" element={<Comparativas />} />
          <Route path="/comparativas/:slug" element={<ComparativaDetalle />} />
          <Route path="/guias" element={<Guias />} />
          <Route path="/guias/:slug" element={<GuiasDetalle />} />
          <Route path="/legal" element={<Legal />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
