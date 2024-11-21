import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Category, MealDetails } from "./pages/index";

import Header from "./components/Header/Header";
import SideBar from "./components/sideBar/SideBar";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <SideBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meal/:id" element={<MealDetails />} />
        <Route path="/meal/category/:name" element={<Category />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
