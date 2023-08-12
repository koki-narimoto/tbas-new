import React from "react";
import { useNavigate } from 'react-router-dom';
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line

import Header from "components/headers/Header.jsx";
import Footer from "components/footer/Footer.jsx";
import ContactUsForm from "components/form/ContactUsForm.jsx";
// import ContactDetails from "components/cards/ThreeColContactDetails.js";

// const Address = tw.span`leading-relaxed`;
// const AddressLine = tw.span`block`;
// const Email = tw.span`text-sm mt-6 block text-gray-500`;
// const Phone = tw.span`text-sm mt-0 block text-gray-500`;

export default (props) => {
  const navigate = useNavigate();
  navigate(0);
  
  return (
    <AnimationRevealPage>
      <Header language = {props.language} />
      <ContactUsForm />
      {/* <ContactDetails
        cards={[
          {
            title: "New York",
            description: (
              <>
                <Address>
                  <AddressLine>40 Gates Court</AddressLine>
                  <AddressLine>Endicott, NY 13760</AddressLine>
                </Address>
                <Email>contact@treact.com</Email>
                <Phone>+1 (203) 991-6988</Phone>
              </>
            )
          },
          {
            title: "Illinois",
            description: (
              <>
                <Address>
                  <AddressLine>602 Annadale Drive</AddressLine>
                  <AddressLine>Dekalb, IL 60115</AddressLine>
                </Address>
                <Email>contact@treact.com</Email>
                <Phone>+1 (203) 991-6988</Phone>
              </>
            )
          }
        ]}
      /> */}
      <Footer language = {props.language} />
    </AnimationRevealPage>
  );
};
