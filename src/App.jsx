import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import WelcomePage from "./pages/welcome/welcomePage.jsx";
import MainPage from "./pages/main/mainPage.jsx";
import FundPage from "./pages/fund/fundPage.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/fund" element={<FundPage />} />
          <Route path="/wallet" element={"wallet"} />
          <Route path="/transactions" element={"transactions"} />

          <Route path="*" element={"no such route"} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
