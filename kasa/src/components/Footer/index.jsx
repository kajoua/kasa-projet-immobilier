import React from 'react';
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import Logo from '../Logo';

const FooterBanner =styled.footer`

color: ${colors.white};
    width: 100%;
    background-color: ${colors.black};
	padding: 20px;
	border-top: solid 3px ${colors.black};
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	align-items: center;
    bottom:0;`

const Footer = () => {
    const CommentFooter = "© 2020 Kasa. All rights reserved"
    return (
        <FooterBanner>
       <Logo/>
        <p>{CommentFooter}</p>
          
        </FooterBanner>
      );
    }
export default Footer;