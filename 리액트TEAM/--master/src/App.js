import "./App.css";
import React from "react";
import Home from "./components/Home";
import SlickScroll from "./components/SlickScroll";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product1 from "./components/Product1";
import Page2 from "./components/Page2";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <div>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          {/* //표출시킬 공간 */}
          <Route path="/" element={<SlickScroll />} />
          <Route path="/product1" element={<Product1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/LandingPage" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
