import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components'
import Logo from '../../assets/images/logo.svg'
import { StyledLink } from '../../utils/Link/StyledLink'

const HeaderLogo = styled.img`
  height: 48px;
`
const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Header = () => {
    return (
        <NavContainer>
    <Link to="/">
    <HeaderLogo src={Logo} />
  </Link>
          <div>
            <StyledLink to="/" >
              Accueil
            </StyledLink>
            <StyledLink
              to="/about"
             
            >
              A propos
            </StyledLink>
          </div>
          </NavContainer>
      );
    }

export default Header;