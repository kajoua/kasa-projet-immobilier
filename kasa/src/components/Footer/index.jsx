import React from 'react';
import styled from 'styled-components'
import Colors from '../../utils/style/Colors'
import Logo from '../Logo';
import { JustifyContentCenter } from '../../utils/style/Mixins';
const FooterBanner =styled.footer`
color: ${Colors.white};
width: 100%;
height:209px;
background-color: ${Colors.black};
${JustifyContentCenter}
bottom:0;
`
const FooterText= styled.p`
margin-top:20px;
font-size: 24px; 
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