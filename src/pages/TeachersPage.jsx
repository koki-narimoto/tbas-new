import React from 'react';
import { useNavigate } from 'react-router-dom';

import Teachers from "components/teachers/Teachers.jsx";
import AllTeachers from "components/teachers/AllTeachers.jsx";
import ScrollTop from "components/scroll/ScrollTop.jsx";
// import CloserHero from "components/hero/CloserHero.jsx";
// import FaqComponent from "components/faq/FAQ.jsx";

import Header from "components/headers/Header.jsx";
import Footer from "components/footer/Footer.jsx";

import { StyledDiv } from "assets/styles/TailwindComponents.jsx";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

export default function TeachersPage(props){
  const navigate = useNavigate();
  navigate(0);

  return (
    <StyledDiv>
      <AnimationRevealPage>
        <Header language = {props.language} />
        <AllTeachers language = {props.language}/>
        <ScrollTop />
        <Footer language = {props.language}/>
      </AnimationRevealPage>
    </StyledDiv>
  );
}
