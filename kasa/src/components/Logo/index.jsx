import React from 'react';
import kasa from "../../assets/images/kasa.png"
import styled from 'styled-components'
import { LinkLogo } from '../../utils/Link/Logo';
const LogoImg =styled.img`
object-fit: none;
    padding: 10px;
`


const TextLogo =styled.p`
padding: 10px;
font-size: 2em;
font-weight: 500;
`
const Logo = () => {
    return (
        <LinkLogo to="/" >
            
        <TextLogo>K</TextLogo>
        < LogoImg src={kasa}/>
        <TextLogo>s</TextLogo>
        <TextLogo>a</TextLogo>
      </LinkLogo>  
    );
};

export default Logo;