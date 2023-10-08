import "./App.css";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import HomePage from "./page/home-page";
import DetailFestival from "./page/festival/detail";
import ListFestival from "./page/festival";
import ListDestination from "./page/destination";
import { ROUTE_PATH } from "./core/common/appRouter";
import DetailDestination from "./page/destination/view";
import Map from "./components/Map";
import ListSpecialty from "./page/specialty";
import DetailSpecialty from "./page/specialty/detail";
import ListArticle from "./page/article";
import DetailArticle from "./page/article/view";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route path={ROUTE_PATH.HOME_PAGE} element={<HomePage />} />

          <Route path={ROUTE_PATH.ARTICLE} element={<ListArticle />} />
          <Route path={ROUTE_PATH.VIEW_ARTICLE} element={<DetailArticle />} />

          <Route path={ROUTE_PATH.FESTIVAL} element={<ListFestival />} />
          <Route path={ROUTE_PATH.VIEW_FESTIVAL} element={<DetailFestival />} />

          <Route path={ROUTE_PATH.DESTINATION} element={<ListDestination />} />
          <Route path={ROUTE_PATH.VIEW_DESTINATION} element={<DetailDestination />} />

          <Route path={ROUTE_PATH.SPECIALTY} element={<ListSpecialty />} />
          <Route path={ROUTE_PATH.VIEW_SPECIALTY} element={<DetailSpecialty />} />
          <Route path="/map" element={<Map />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
