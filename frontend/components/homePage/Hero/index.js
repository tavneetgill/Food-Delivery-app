import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../sidebar';
import{LinkContainer} from 'react-router-bootstrap'
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn
} from './HeroElements';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <HeroH1>EAT. ORDER. REPEAT</HeroH1>
          <HeroP>Ready in no time !</HeroP>
          <LinkContainer to = "/orderOnline" activeClassName>
          <HeroBtn>Place Order</HeroBtn>
          </LinkContainer>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
