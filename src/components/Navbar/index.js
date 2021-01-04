import React, { useEffect, useState } from 'react';
import { AiOutlineBars } from 'react-icons/ai';
import { IconContext } from 'react-icons/lib';
import { animateScroll } from 'react-scroll';
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavBtn,
  NavBtnLink,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
} from './NavbarElements';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () =>
    window.scrollY >= 80 ? setScrollNav(true) : setScrollNav(false);

  useEffect(() => {
    const scrollListener = window.addEventListener('scroll', changeNav);

    return () => window.removeEventListener('scroll', scrollListener);
  }, []);

  const toggleHome = () => animateScroll.scrollToTop();

  return (
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to='/' onClick={toggleHome}>
              Github Profile Finder 🔍
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <AiOutlineBars/>
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks
                  to='about'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}>
                  About us
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='services'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}>
                  Most Followed
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks
                  to='signup'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}>
                  Github API
                </NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to='/search'>Search GitHub Users</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
  );
};
export default Navbar;