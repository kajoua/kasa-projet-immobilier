import React from 'react';
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import Logo from '../Logo';

const FooterBanner =styled.footer`
color: ${colors.white};
width: 100%;
height:209px;
background-color: ${colors.black};
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
bottom:0;
`
const FooterText= styled.p`
margin-top:20px;
font-size: 24px; 
font-weight: 500;
@media (max-width: 900px) {
    font-size: 16px;
  }
  @media (max-width: 600px) {
    font-size: 12px;
  }
`

const Footer = () => {
    const CommentFooter = "© 2020 Kasa. All rights reserved"
    return (
        <FooterBanner>
       <Logo/>
        <FooterText>{CommentFooter}</FooterText>
          
        </FooterBanner>
      );
    }
export default Footer;