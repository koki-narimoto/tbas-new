import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

/* ========= importing images for icons ============ */
import { ReactComponent as CheckboxIcon } from "feather-icons/dist/icons/check-circle.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "assets/treact-images/svg-decorator-blob-1.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "assets/treact-images/dot-pattern.svg";
import DesignIllustration from "assets/treact-images/design-illustration.svg";
import CustomersLogoStripImage from "assets/treact-images/customers-logo-strip.png";

/* ======== importing some data for text =========== */
import { aboutUs } from "assets/tbas-data/TbasInfo.jsx";

/* ======== importing twin / tailwind components =========== */
import { Container } from "assets/styles/TailwindComponents.jsx";

/* ===== define some twin / tailwind css for components ===== */

const TwoColumn = tw.div`flex flex-col lg:flex-row md:items-center max-w-screen-xl mx-auto py-20 md:py-24`;
const LeftColumn = tw.div`relative lg:w-6/12 lg:pr-12 flex-shrink-0 text-center lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex flex-col justify-center`;

const Heading = tw.h1`font-black text-3xl md:text-5xl leading-snug max-w-3xl`;
const Paragraph = tw.p`my-5 lg:my-8 text-base lg:text-lg font-medium text-gray-600 max-w-lg mx-auto lg:mx-0`;

const Actions = styled.div`
  ${tw`relative max-w-md text-center mx-auto lg:mx-0`}
  input {
    ${tw`sm:pr-48 pl-8 py-4 sm:py-5 rounded-full border-2 w-full font-medium focus:outline-none transition duration-300  focus:border-primary-500 hover:border-gray-500`}
  }
  button {
    ${tw`w-full sm:absolute right-0 top-0 bottom-0 bg-primary-500 text-gray-100 font-bold mr-2 my-4 sm:my-2 rounded-full py-4 flex items-center justify-center sm:w-40 sm:leading-none focus:outline-none hover:bg-primary-900 transition duration-300`}
  }
`;

const FeatureList = tw.ul`mt-12 leading-loose`;
const Feature = tw.li`flex items-center`;
const FeatureIcon = tw(CheckboxIcon)`w-5 h-5 text-primary-500`;
const FeatureText = tw.p`ml-2 font-medium text-gray-700 text-lg lg:text-xl`;

const IllustrationContainer = tw.div`flex justify-center md:justify-end items-center relative max-w-3xl lg:max-w-none`;

// Random Decorator Blobs (shapes that you see in background)
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3  -z-10`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none fill-current text-primary-500 opacity-25 absolute w-32 h-32 right-0 bottom-0 transform translate-x-10 translate-y-10 -z-10`}
`;

const CustomersLogoStrip = styled.div`
  ${tw`mt-12 lg:mt-20`}
  p {
    ${tw`uppercase text-sm lg:text-xs tracking-wider font-bold text-gray-500`}
  }
  img {
    ${tw`mt-4 w-full lg:pr-16 xl:pr-32 opacity-50`}
  }
`;
var currInfo = aboutUs[0]
export default function Hero(props) {

  if(props.language == "ENG"){
    currInfo = aboutUs[1]
  }

  return (
    <Container>
      <TwoColumn>
        <LeftColumn>
          <Heading>
            {currInfo.Heading}
          </Heading>
          <Paragraph>
            {currInfo.Paragraph}
          </Paragraph>
          <FeatureList>
                {currInfo.Features.map((feature, index) => (
                  <Feature key={index}>
                    <FeatureIcon />
                    <FeatureText>{feature}</FeatureText>
                  </Feature>
                ))}
              </FeatureList>
          <br />
          <Actions>
              <input type="text" placeholder="Your E-mail Address" />
              <button>Get Started</button>
          </Actions>
          <CustomersLogoStrip>
              <p>Our TRUSTED Customers</p>
              <img src={CustomersLogoStripImage} alt="Our Customers" />
            </CustomersLogoStrip>
        </LeftColumn>
        <RightColumn>
          <IllustrationContainer>
            <img src={DesignIllustration} alt="Hero" />
            <DecoratorBlob2 />
          </IllustrationContainer>
        </RightColumn>
      </TwoColumn>
      <DecoratorBlob1 />
      
    </Container>
  )
}

