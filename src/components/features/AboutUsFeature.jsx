import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

/* ========= importing images for icons ============ */
import {SectionHeading, 
  Subheading as SubheadingBase,
  Container
} from "assets/styles/TailwindComponents.jsx";
import StatsIllustrationSrc from "assets/treact-images/stats-illustration.svg";
import { ReactComponent as SvgDotPattern } from "assets/treact-images/dot-pattern.svg";

/* ======== importing some data for text =========== */
import { aboutUs } from "assets/tbas-data/TbasInfo.jsx";

const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto relative`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;
const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-lg md:text-base lg:text-2xl font-medium leading-relaxed text-secondary-100`;

const Actions = tw.div`flex flex-col items-center sm:flex-row justify-center lg:justify-start mt-8`;
const PrimaryButton = tw.button`font-bold px-8 lg:px-10 py-3 rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 focus:shadow-outline focus:outline-none transition duration-300`;

const DecoratorBlob = styled(SvgDotPattern)(props => [
  tw`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`
]);

var currData = aboutUs[0]
export default function AboutUsFeature(props) {
  if(props.language == "ENG"){
    currData = aboutUs[1]
  }
  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc={StatsIllustrationSrc} />
          <DecoratorBlob />
        </ImageColumn>
        <TextColumn>
          <TextContent>
            <Subheading>{currData.subheadingPage}</Subheading>
            <Heading>{currData.headingPage}</Heading>
            <Description>{currData.descriptionPage[0]}</Description>
          </TextContent>
        </TextColumn>
      </TwoColumn>
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc={StatsIllustrationSrc} />
          <DecoratorBlob />
        </ImageColumn>
        <TextColumn textOnLeft={true}>
          <TextContent>
            <Description>{currData.descriptionPage[1]}</Description>
          </TextContent>
        </TextColumn>
      </TwoColumn>
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc={StatsIllustrationSrc} />
          <DecoratorBlob />
        </ImageColumn>
        <TextColumn textOnLeft={false}>
          <TextContent>
            <Description>{currData.descriptionPage[2]}</Description>
            <Actions>
              <PrimaryButton as="a" href={currData.primaryButtonUrl}>Learn More!</PrimaryButton>
            </Actions>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  )
}
