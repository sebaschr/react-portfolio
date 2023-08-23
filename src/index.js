import React from "react";
import ReactDOM from "react-dom/client";
import "styles/index.scss";
import reportWebVitals from "./reportWebVitals";
import {
  HomePage,
  ErrorPage,
  AboutPage,
  ExperiencePage,
  PhotographyPage,
  ContactPage,
} from "./structure";
import { Routes, Route, HashRouter } from "react-router-dom";
// const router = createHashRouter([
//   {
//     path: "/",
//     element: <HomePage />,
//   },
//   {
//     path: "/about",
//     element: <AboutPage />,
//   },
//   {
//     path: "/experience",
//     element: <ExperiencePage />,
//   },
//   {
//     path: "/photography",
//     element: <PhotographyPage />,
//   },
//   {
//     path: "/contact",
//     element: <ContactPage />,
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
