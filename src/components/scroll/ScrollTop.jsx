import React, {useState} from 'react';
import tw from "twin.macro";
import styled from "styled-components";
import { ReactComponent as Arrow } from "feather-icons/dist/icons/arrow-up.svg";

const ControlButton = styled.button`
  ${tw`mx-3 p-4 rounded-full transition duration-300 bg-primary-200 hover:bg-primary-300 text-gray-200 hover:text-primary-700 focus:outline-none focus:shadow-outline`}
  svg {
    ${tw`w-4 h-4 stroke-3`}
  }
`;

const ButtonWrapper = tw(ControlButton)`fixed bottom-0 right-0 z-1`

export default function ScrollButton(){
  
    const [visible, setVisible] = useState(false)
    
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300){
        setVisible(true)
      } 
      else if (scrolled <= 300){
        setVisible(false)
      }
    };
    
    const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'smooth'
        /* you can also use 'auto' behaviour
           in place of 'smooth' */
      });

    };
    
    window.addEventListener('scroll', toggleVisible);
    
    return (
      <ButtonWrapper style={{display: visible ? 'inline' : 'none', bottom:50}}>
       <Arrow onClick={scrollToTop}/>
      </ButtonWrapper>
    );
}