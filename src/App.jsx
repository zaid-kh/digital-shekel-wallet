import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import WelcomePage from "./pages/welcome/welcomePage.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/wallet" element={"wallet"} />
          <Route path="*" element={"no such route"} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
