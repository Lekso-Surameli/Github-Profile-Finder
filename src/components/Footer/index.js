import React from 'react';
import { animateScroll } from 'react-scroll';
import {
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaYoutube,
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterLinksWrapper,
  FooterLinksContainer,
  FooterLinkTitle,
  FooterWrap,
  FooterLinkItems,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from './FooterElements';

const Footer = () => {
  const toggleHome = () => animateScroll.scrollToTop();

  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
            Github Profile Finder 🔍
            </SocialLogo>
            <WebsiteRights>
            Github Profile Finder ©️ {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Youtube'>
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Github'>
                <FaGithub/>
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Linkedin'>
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