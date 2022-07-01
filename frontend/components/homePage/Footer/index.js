import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink
} from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/'>Foodee</SocialLogo>
            
            <SocialIcons>
              <SocialIconLink href='https://myclass.lpu.in/' target='_blank' aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='https://myclass.lpu.in/' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              
              
              <SocialIconLink href='https://myclass.lpu.in/' target='_blank' aria-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
