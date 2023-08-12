import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import { useNavigate } from 'react-router-dom';

import LogoImage from "assets/treact-images/logo.svg";
import { ReactComponent as FacebookIcon } from "assets/treact-images/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "assets/treact-images/twitter-icon.svg";
import { ReactComponent as YoutubeIcon } from "assets/treact-images/youtube-icon.svg";

const Container = tw.div`relative bg-gray-200 -mx-8 -mb-8 px-8`;
const FiveColumns = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20 flex flex-wrap justify-between`;

const Column = tw.div`md:w-1/5`;
const WideColumn = tw(Column)`text-center md:text-left w-full md:w-2/5 mb-10 md:mb-0`;

const ColumnHeading = tw.h5`font-bold`;

const LinkList = tw.ul`mt-4 text-sm lg:text-base font-medium`;
const LinkListItem = tw.li`mt-3`;
const Link = tw.button`border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300`;
const EmailLink = tw.a`border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-8`;
const LogoText = tw.h5`ml-2 text-xl font-black text-primary-500`;

const CompanyDescription = tw.p`mt-4 max-w-xs font-medium text-sm mx-auto md:mx-0 md:mr-4 `;
const CompanyAddress = tw.p`mt-4 max-w-xs font-medium text-base lg:text-lg mx-auto lg:mx-0 lg:mr-4 leading-loose text-center lg:text-left`;

const SocialLinksContainer = tw.div`mt-4 `;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block p-2 rounded-full bg-gray-700 text-gray-100 hover:bg-gray-900 transition duration-300 mr-4`}
  svg {
    ${tw`w-4 h-4`}
  }
`;

export default function Footer(props) {
  const navigate = useNavigate();

  const tbasNavLinksJap = [
    <LinkList>
      <LinkListItem>
        <Link onClick={() => navigate("/aboutUs")}>T-BASとは</Link>
      </LinkListItem>
      <LinkListItem>
        <Link href="#">コース紹介</Link>
      </LinkListItem>
      <LinkListItem>
        <Link onClick={() => navigate("/teachers")}>チューター紹介</Link>
      </LinkListItem>
      <LinkListItem>
        <Link onClick={() => navigate("/faq")}>FAQ</Link>
      </LinkListItem>
    </LinkList>
  ];
  const tbasNavLinksEng = [
    <LinkList>
      <LinkListItem>
        <Link onClick={() => navigate("/eng/aboutUs")}>About T-BAS</Link>
      </LinkListItem>
      <LinkListItem>
        <Link href="#">Courses at T-BAS</Link>
      </LinkListItem>
      <LinkListItem>
        <Link onClick={() => navigate("/eng/teachers")}>Tutors at T-BAS</Link>
      </LinkListItem>
      <LinkListItem>
        <Link onClick={() => navigate("/eng/faq")}>FAQ</Link>
      </LinkListItem>
    </LinkList>
  ];
  
  const tbasContactLinksJap = [
    <LinkList>
      <LinkListItem>
        連絡先:TEL/FAX 042-851-8680
      </LinkListItem>
      <LinkListItem>
        電話受付時間：15:00-19:00
      </LinkListItem>
      <LinkListItem>
        <EmailLink href="mailto:tbastamagawa@gmail.com">tbastamagawa@gmail.com</EmailLink>
      </LinkListItem>
      <LinkListItem>
        <Link onClick={() => navigate("/contactUs")}>お問い合わせ</Link>
      </LinkListItem>
    </LinkList>
  ];
  const tbasContactLinksEng = [
    <LinkList>
      <LinkListItem>
        Phone: TEL/FAX 042-851-8680
      </LinkListItem>
      <LinkListItem>
        Phone Hours：15:00-19:00
      </LinkListItem>
      <LinkListItem>
        <EmailLink href="mailto:tbastamagawa@gmail.com">email: tbastamagawa@gmail.com</EmailLink>
      </LinkListItem>
      <LinkListItem>
        <Link onClick={() => navigate("/eng/contactUs")}>Contact Us</Link>
      </LinkListItem>
    </LinkList>
  ];

  return (
    <Container>
      <FiveColumns>
        <WideColumn>
          <LogoContainer>
            <LogoImg src={LogoImage} />
            <LogoText>T-BAS</LogoText>
          </LogoContainer>
          <CompanyAddress>
            〒194-0041 <br />
            東京都町田市玉川学園2-11-22 <br />
            高橋ビル301
          </CompanyAddress>
          <SocialLinksContainer>
            <SocialLink href="https://facebook.com">
              <FacebookIcon />
            </SocialLink>
            <SocialLink href="https://twitter.com">
              <TwitterIcon />
            </SocialLink>
            <SocialLink href="https://youtube.com">
              <YoutubeIcon />
            </SocialLink>
          </SocialLinksContainer>
        </WideColumn>
        
        <Column>
          <ColumnHeading>Quick Links</ColumnHeading>
          {props.language === "JP" ? tbasNavLinksJap : tbasNavLinksEng}
        </Column>
        <Column>
          <ColumnHeading>Contact</ColumnHeading>
          {props.language === "JP" ? tbasContactLinksJap : tbasContactLinksEng}
        </Column>
      </FiveColumns>
    </Container>
  );
};
