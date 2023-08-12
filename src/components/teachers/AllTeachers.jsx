import React, { useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

import tw from "twin.macro";
import styled from "styled-components";

/* ========= importing images for icons ============ */
import {SectionHeading, 
  Subheading as SubheadingBase,
  Container, ContentWithPaddingXl 
} from "assets/styles/TailwindComponents.jsx";
import { ReactComponent as SvgDecoratorBlob1 } from "assets/treact-images/svg-decorator-blob-5.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "assets/treact-images/svg-decorator-blob-7.svg";

/* ======== importing some data for text =========== */
import { teachersTable } from "assets/tbas-data/TbasInfo.jsx";

/* ===== define some twin / tailwind css for components ===== */

/* ===== define components for the columns ===== */
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between w-full mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-4/12 flex-shrink-0 relative`;
const TextColumn = styled(Column)(props => [
  tw`md:w-8/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

/* ===== define components for the text next to the cards ===== */
const TextContent = tw.div`lg:py-8 text-center md:text-left`;
const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-2xl sm:text-3xl lg:text-4xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-lg md:text-base lg:text-2xl font-medium leading-relaxed text-secondary-100`;

/* ===== define components for the Cards (defined in Teachers.jsx as well) ===== */
const TeacherCard = tw.div`h-full flex! flex-col border max-w-sm rounded-tl-4xl rounded-br-5xl relative focus:outline-none`;
const TeacherCardImage = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`w-full h-64 bg-cover bg-center rounded-none rounded-tl-4xl`
]);
const TeacherTextInfo = tw.div`px-10 py-6`;
const TeacherTitleReviewContainer = tw.div`flex flex-col flex-row justify-between items-center`;
const TeacherTitle = tw.h5`text-2xl font-bold`;
const TeacherSubTitle = tw.h3`text-lg font-bold text-primary-500`;
const TeacherCardDescription = tw.p`text-sm leading-loose mt-4`;
const TeacherSecondaryInfoContainer = tw.div`grid grid-cols-2 mt-2 mt-4`;
const TeacherIconWithText = tw.div`flex items-center mr-6 my-2`;
const TeacherIconContainer = styled.div`
  ${tw`inline-block rounded-full p-2 bg-gray-700 text-gray-100`}
  svg {
    ${tw`w-3 h-3`}
  }
`;
const TeacherText = tw.div`ml-2 text-sm font-semibold text-gray-800`;

/* ===== define components for the tabs ===== */
const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;
const Header = tw(SectionHeading)``;
const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`;
const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }
  ${props => props.active && tw`bg-primary-500! text-gray-100!`}
  }
`;
const TabContent = tw(motion.div)`flex flex-wrap`;
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;

/* ===== define values for the tabs ===== */

var currData = teachersTable[0];
var tabsKeys = Object.keys(currData.Teachers);
export default function AllTeachers(props) {
  if(props.language == "ENG"){
    currData = teachersTable[1];
    tabsKeys = Object.keys(currData.Teachers);
    
  }

  const [activeTab, setActiveTab] = useState(tabsKeys[0]);

  return (
    <Container>
      <ContentWithPaddingXl>
        <HeaderRow>
          <Header>{currData.Heading}</Header>
          <TabsControl>
            {tabsKeys.map((tabName, index) => (
              <TabControl key={index} active={activeTab === tabName} onClick={() => setActiveTab(tabName)}>
                {tabName}
              </TabControl>
            ))}
          </TabsControl>
        </HeaderRow>

        {tabsKeys.map((category, index) => (
          <TabContent key={index}
            variants={{ current: { opacity: 1, scale:1, display: "flex" }, hidden: { opacity: 0, scale:0.8, display: "none" } }}
            transition={{ duration: 0.4 }}
            initial={activeTab === category ? "current" : "hidden"}
            animate={activeTab === category ? "current" : "hidden"} >
            {currData.Teachers[category].map((card, index) => (
              <TwoColumn key = {index}>
                <ImageColumn>
                  <TeacherCard>
                    <TeacherCardImage imageSrc={card.imageSrc} />
                    <TeacherTextInfo>
                      <TeacherTitleReviewContainer>
                        <TeacherTitle>{card.name}</TeacherTitle>
                        <TeacherSubTitle>{card.college}</TeacherSubTitle>
                      </TeacherTitleReviewContainer>
                      <TeacherSecondaryInfoContainer>
                        {card.subjects.map((currSubject, index)=>(
                          <TeacherIconWithText>
                            <TeacherIconContainer>
                              {<currSubject.Icon />}
                            </TeacherIconContainer>
                            <TeacherText>{currSubject.class}</TeacherText>
                          </TeacherIconWithText>
                        ))}
                      </TeacherSecondaryInfoContainer>
                      <TeacherCardDescription>{card.description}</TeacherCardDescription>
                    </TeacherTextInfo>
                  </TeacherCard>
                </ImageColumn>
                <TextColumn>
                  <TextContent>
                    <Subheading>{card.college}</Subheading>
                    <Heading>{card.name}</Heading>
                    <Description>{card.descriptionPage}</Description>
                  </TextContent>
                </TextColumn>
              </TwoColumn>
            ))}
          </TabContent>
        ))}
      </ContentWithPaddingXl>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
