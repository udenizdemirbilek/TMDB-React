import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import About from "./containers/About/About.jsx";
import Home from "./containers/Home/Home";
import Details from "./containers/Details/Details";
import reportWebVitals from "./reportWebVitals";

render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/details" >
            <Route path=":movieId" element={<Details />} />
          </Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "5rem" }}>
                <p>Oops! This page doesn't exist yet!</p>
                <Link to="/">Go to the homepage</Link>
              </main>
            }
          />
        </Route>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
