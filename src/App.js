import "./App.css";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import HomePage from "./page/home-page";
import DetailArticle from "./page/articles/detail";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detail-article" element={<DetailArticle />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
