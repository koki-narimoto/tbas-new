import React from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";

import useAnimatedNavToggler from "helpers/useAnimatedNavToggler.js";

import { useNavigate } from 'react-router-dom';

import logo from "assets/treact-images/logo.svg";
import { ReactComponent as MenuIcon } from "feather-icons/dist/icons/menu.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";

const HeaderComponent = tw.header`
  flex justify-between items-center
  max-w-screen-xl mx-auto
`;

export const NavLinks = tw.div`inline-block`;

/* hocus: stands for "on hover or focus"
 * hocus:bg-primary-700 will apply the bg-primary-700 class on hover or focus
 */
export const NavLink = tw.button`
  text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500
`;

export const PrimaryLink = tw(NavLink)`
  lg:mx-0
  px-8 py-3 rounded bg-primary-500 text-gray-100
  hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline
  border-b-0 rounded-full
`;

export const LogoLink = styled(NavLink)`
  ${tw`flex items-center font-black border-b-0 text-2xl! ml-0!`};

  img {
    ${tw`w-10 mr-3`}
  }
`;

export const MobileNavLinksContainer = tw.nav`flex flex-1 items-center justify-between`;
export const NavToggle = tw.button`
  lg:hidden z-20 focus:outline-none hocus:text-primary-500 transition duration-300
`;
export const MobileNavLinks = motion(styled.div`
  ${tw`lg:hidden z-10 fixed top-0 inset-x-0 mx-4 my-6 p-8 border text-center rounded-lg text-gray-900 bg-white`}
  ${NavLinks} {
    ${tw`flex flex-col items-center`}
  }
`);

export const DesktopNavLinks = tw.nav`
  hidden lg:flex flex-1 justify-between items-center
`;

const LgDesktopNav = tw(DesktopNavLinks)`hidden lg:flex`;
const LgMobileNav = tw(MobileNavLinks)`flex lg:hidden`;
const LgMobileNavContainer = tw(MobileNavLinksContainer)`flex lg:hidden`;

var currPath = "/"
export default function Header(props) {
  /*
   * This header component accepts an optionals "links" prop that specifies the links to render in the navbar.
   * This links props should be an array of "NavLinks" components which is exported from this file.
   * Each "NavLinks" component can contain any amount of "NavLink" component, also exported from this file.
   * This allows this Header to be multi column.
   * So If you pass only a single item in the array with only one NavLinks component as root, you will get 2 column header.
   * Left part will be LogoLink, and the right part will be the the NavLinks component you
   * supplied.
   * Similarly if you pass 2 items in the links array, then you will get 3 columns, the left will be "LogoLink", the center will be the first "NavLinks" component in the array and the right will be the second "NavLinks" component in the links array.
   * You can also choose to directly modify the links here by not passing any links from the parent component and
   * changing the defaultLinks variable below below.
   * If you manipulate links here, all the styling on the links is already done for you. If you pass links yourself though, you are responsible for styling the links or use the helper styled components that are defined here (NavLink)
   */
  
  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();
  const navigate = useNavigate();

  const tbasLogoLinkJap = (
    <LogoLink onClick={() => navigate("/")}>
      <img src={logo} alt="logo" />
      T-BAS
    </LogoLink>
  );
  const tbasLogoLinkEng = (
    <LogoLink onClick={() => navigate("/eng")}>
      <img src={logo} alt="logo" />
      T-BAS
    </LogoLink>
  );

  currPath = window.location.hash;
  let pathArr = currPath.split("/");
  pathArr = pathArr.slice(1);
  console.log(pathArr);
  if(pathArr[0] === "eng"){
    pathArr = pathArr.slice(1);
    console.log(pathArr);
  }
  currPath = pathArr.join("/");
  console.log(currPath);

  const tbasNavLinksJap = [
    <NavLinks>
      <NavLink onClick={() => navigate("/aboutUs")}>T-BASとは</NavLink>
      <NavLink href="/#">コース紹介</NavLink>
      <NavLink onClick={() => navigate("/teachers")}>チューター紹介</NavLink>
      <NavLink onClick={() => navigate("/faq")}>FAQ</NavLink>
      <NavLink onClick={() => navigate("/contactUs")}>お問い合わせ</NavLink>
      <PrimaryLink onClick={() => navigate("/eng/" + currPath)}>English</PrimaryLink>
    </NavLinks>
  ];
  const tbasNavLinksEng = [
    <NavLinks>
      <NavLink onClick={() => navigate("/eng/aboutUs")}>About T-BAS</NavLink>
      <NavLink href="/#">Courses at T-BAS</NavLink>
      <NavLink onClick={() => navigate("/eng/teachers")}>Tutors at T-BAS</NavLink>
      <NavLink onClick={() => navigate("/eng/faq")}>FAQ</NavLink>
      <NavLink onClick={() => navigate("/eng/contactUs")}>Contact Us</NavLink>
      <PrimaryLink onClick={() => navigate("/" + currPath)}>日本語</PrimaryLink>
    </NavLinks>
  ];
  return (
    <HeaderComponent>
      <LgDesktopNav>
        {props.language === "JP" ? tbasLogoLinkJap : tbasLogoLinkEng}
        {props.language === "JP" ? tbasNavLinksJap : tbasNavLinksEng}
      </LgDesktopNav>

      <LgMobileNavContainer>
        {props.language === "JP" ? tbasLogoLinkJap : tbasLogoLinkEng}
        <LgMobileNav initial={{ x: "150%", display: "none" }} animate={animation}>
          {props.language === "JP" ? tbasNavLinksJap : tbasNavLinksEng}
        </LgMobileNav>
        <NavToggle onClick={toggleNavbar} className={showNavLinks ? "open" : "closed"}>
          {showNavLinks ? <CloseIcon tw="w-6 h-6" /> : <MenuIcon tw="w-6 h-6" />}
        </NavToggle>
      </LgMobileNavContainer>
    </HeaderComponent>
  );
};