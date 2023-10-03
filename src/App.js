import "./App.css";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import HomePage from "./page/home-page";
import DetailArticle from "./page/articles/detail";
import ListArticles from "./page/articles";
import Map from "./components/Map";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/article" element={<ListArticles />} />
          <Route path="/detail-article" element={<DetailArticle />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
