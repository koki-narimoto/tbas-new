import React from 'react';

import { useNavigate } from 'react-router-dom';

import Hero from "components/hero/Hero.jsx";
import Problems from "components/features/Problems.jsx";
import Solutions from "components/features/Solutions.jsx";
import Teachers from "components/teachers/Teachers.jsx";
import Testimonials from "components/testimonial/Testimonials.jsx";
import ScrollTop from "components/scroll/ScrollTop.jsx";
// import CloserHero from "components/hero/CloserHero.jsx";
import FaqComponent from "components/faq/FAQ.jsx";

import Header from "components/headers/Header.jsx";
import Footer from "components/footer/Footer.jsx";

import { StyledDiv } from "assets/styles/TailwindComponents.jsx";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";


export default function HomePage(props){
  const navigate = useNavigate();
  navigate(0);
  
  return (
    <StyledDiv>
      <AnimationRevealPage>
        <Header language = {props.language} />
        <Hero language = {props.language}/>
        <Problems language = {props.language}/>
        <Solutions language = {props.language}/>
        <Teachers language = {props.language}/>
        <Testimonials />
        <FaqComponent language = {props.language}/>
        <ScrollTop />
        <Footer language = {props.language}/>
      </AnimationRevealPage>
    </StyledDiv>
    
  );
}
