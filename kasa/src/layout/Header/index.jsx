import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components'
import Logo from '../../assets/images/logo.svg'
import { StyledLink } from '../../utils/Link/StyledLink'


const HeaderContainer = styled.nav`
  margin: 0 7%;
  padding: 5% 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const HeaderLogo = styled.img`
  height: 62px;
  @media (max-width: 900px) {
    height: 53px;
  }
  @media (max-width: 600px) {
    height: 43px;
  }
`
const Header = () => {
    return (
        <HeaderContainer>
          <Link to="/">
             <HeaderLogo src={Logo} alt="Logo Kasa" />
          </Link>

          <div>
            <StyledLink to="/" activeStyle={{textDecoration: "underline 1px"}}>Accueil</StyledLink>
            <StyledLink to="/about" activeStyle={{textDecoration: "underline 1px"}}>A propos</StyledLink> 
          </div>
        </HeaderContainer>
      );
    }

export default Header;