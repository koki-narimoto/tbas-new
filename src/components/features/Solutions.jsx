import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

/* ========= importing images for icons ============ */
import {SectionHeading, 
  Subheading as SubheadingBase,
  PrimaryButton as PrimaryButtonBase,
  Container
} from "assets/styles/TailwindComponents.jsx";
import TeamIllustrationSrc from "assets/treact-images/team-illustration-2.svg";
import { ReactComponent as SvgDotPattern } from "assets/treact-images/dot-pattern.svg";

/* ======== importing some data for text =========== */
import { solutionsInfo } from "assets/tbas-data/TbasInfo.jsx";

/* ===== define some twin / tailwind css for components ===== */
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24 items-center`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-6/12 flex-shrink-0 relative`;
const TextColumn = styled(Column)(props => [
  tw`md:w-6/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.img(props => [
  props.imageRounded && tw`rounded`,
  props.imageBorder && tw`border`,
  props.imageShadow && tw`shadow`
]);

const DecoratorBlob = tw(
  SvgDotPattern
)`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`;

const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-8 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const Features = tw.div`mt-8 max-w-lg mx-auto md:mx-0`;
const Feature = tw.div`mt-8 flex items-start flex-col md:flex-row`;
const FeatureIconContainer = styled.div`
  ${tw`mx-auto inline-block border border-primary-500 text-center rounded-full p-2 flex-shrink-0`}
  svg {
    ${tw`w-5 h-5 text-primary-500`}
  }
`;
const FeatureText = tw.div`mt-4 md:mt-0 md:ml-4 text-center md:text-left`;
const FeatureHeading = tw.div`font-bold text-base md:text-lg lg:text-xl text-primary-500`;
const FeatureDescription = tw.div`mt-1 text-sm md:text-base lg:text-lg`;

const PrimaryButton = styled(PrimaryButtonBase)(props => [
  tw`mt-12 text-sm inline-block mx-auto md:mx-0`,
  props.buttonRounded && tw`rounded-full`
]);

var currInfo = solutionsInfo[0]
export default function Solutions(props) {

  if(props.language == "ENG"){
    currInfo = solutionsInfo[1]
  }

  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image src={TeamIllustrationSrc} imageBorder={false} imageShadow={false} imageRounded={true} />
          <DecoratorBlob />
        </ImageColumn>
        <TextColumn textOnLeft={true}>
          <TextContent>
            <Subheading>{currInfo.subheading}</Subheading>
            <Heading>{currInfo.heading}</Heading>
            <Description>{currInfo.description}</Description>
            <Features>
              {currInfo.features.map((feature, index) => (
                <Feature key={index}>
                  <FeatureIconContainer>{<feature.Icon />}</FeatureIconContainer>
                  <FeatureText>
                    <FeatureHeading>{feature.title}</FeatureHeading>
                    <FeatureDescription>{feature.description}</FeatureDescription>
                  </FeatureText>
                </Feature>
              ))}
            </Features>
            <PrimaryButton buttonRounded={true} as="a" href={currInfo.primaryButtonUrl}>
              {currInfo.primaryButtonText}
            </PrimaryButton>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
