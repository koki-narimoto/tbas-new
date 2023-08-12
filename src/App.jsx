import React from "react";
import GlobalStyles from 'assets/styles/GlobalStyles.jsx';
import { css } from "styled-components/macro"; //eslint-disable-line

import HomePage from "pages/HomePage.jsx";
import AboutPage from "pages/AboutPage.jsx";
import TeachersPage from "pages/TeachersPage.jsx";
import FAQPage from "pages/FAQPage.jsx";
import FormPage from "pages/FormPage.jsx";

import { HashRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {

  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route exact path="/eng" element = {<HomePage language = "ENG"/>} />
          <Route path="/aboutUs" element = {<AboutPage language = "JP"/>} />
          <Route path="/eng/aboutUs" element = {<AboutPage language = "ENG"/>} />
          <Route path="/teachers" element = {<TeachersPage language = "JP"/>} />
          <Route path="/eng/teachers" element = {<TeachersPage language = "ENG"/>} />
          <Route path="/faq" element = {<FAQPage language = "JP"/>} />
          <Route path="/eng/faq" element = {<FAQPage language = "ENG"/>} />
          <Route path="/contactUs" element = {<FormPage language = "JP"/>} />
          <Route path="/eng/contactUs" element = {<FormPage language = "ENG"/>} />
          <Route path="/" element = {<HomePage language = "JP"/>} />
        </Routes>
      </Router>
    </>
    
  );
}
