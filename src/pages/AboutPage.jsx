import React from 'react';
import { useNavigate } from 'react-router-dom';

import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import AboutUsFeature from 'components/features/AboutUsFeature.jsx';
import ScrollTop from "components/scroll/ScrollTop.jsx";
// import CloserHero from "components/hero/CloserHero.jsx";
// import FaqComponent from "components/faq/FAQ.jsx";

import Header from "components/headers/Header.jsx";
import Footer from "components/footer/Footer.jsx";

import { StyledDiv } from "assets/styles/TailwindComponents.jsx";

export default function AboutPage(props){
  const navigate = useNavigate();
  navigate(0);
  
  return (
    <StyledDiv>
      <AnimationRevealPage>
        <Header language = {props.language} />
        <AboutUsFeature language = {props.language}/>
        <ScrollTop />
        <Footer language = {props.language}/>
      </AnimationRevealPage>
    </StyledDiv>
  );
}
