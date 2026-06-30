import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import { TestProvider } from "./contexts/TestProvider";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Erro404 from "./pages/Erro404/Erro404";
import Services from "./services/services";

function App() {
  const [loading, setLoading] = useState(true);
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const data = await Services.getMenu();
        setMenu(data);
      } catch (error) {
        console.error("Erro ao busca Menu:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  return (
    <TestProvider>
      <Header title="Context" navigationLinks={menu} loading={loading} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<Erro404 />} />
      </Routes>

      <Footer />
    </TestProvider>
  );
}

export default App;
