import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

/* ========= importing images for icons ============ */
import {SectionHeading, 
  Subheading as SubheadingBase,
  SectionDescription,
  Container, ContentWithPaddingXl
} from "assets/styles/TailwindComponents.jsx";
import { ReactComponent as SvgDecoratorBlob3 } from "assets/treact-images/svg-decorator-blob-3.svg";

/* ======== importing some data for text =========== */
import { problemsInfo } from "assets/tbas-data/TbasInfo.jsx";

/* ===== define some twin / tailwind css for components ===== */
const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24`}
`;
const Subheading = tw(SubheadingBase)`mb-4 text-lg sm:text-xl`;
const Heading = tw(SectionHeading)`w-full text-3xl sm:text-4xl`;
// const Description = tw(SectionDescription)`w-full text-center`;

const VerticalSpacer = tw.div`mt-10 w-full`

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 max-w-sm`}
`;

const Card = styled.div`
  ${tw`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`}
  .imageContainer {
    ${tw`border text-center rounded-full p-5 flex-shrink-0`}
    img {
      ${tw`w-6 h-6`}
    }
  }

  .textContainer {
    ${tw`sm:ml-4 mt-4 sm:mt-2`}
  }

  .title {
    ${tw`mt-4 tracking-wide font-bold text-2xl leading-none`}
  }

  .description {
    ${tw`mt-1 sm:mt-4 font-medium text-secondary-100 leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

var currInfo = problemsInfo[0]

export default function Problems(props) {
  if(props.language == "ENG"){
    currInfo = problemsInfo[1]
  }

  return (
    <Container>
      <ThreeColumnContainer>
        <Subheading>{currInfo.subheading}</Subheading>
        <Heading>{currInfo.heading}</Heading>
        {/* <Description>{currInfo.description}</Description> */}
        <VerticalSpacer />
        {currInfo.cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                <img src={card.imageSrc}alt="" />
              </span>
              <span className="textContainer">
                <span className="title">{card.title}</span>
                <p className="description">
                  {card.description || "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud."}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};
