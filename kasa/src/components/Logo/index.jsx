import React from 'react';
import kasa from "../../assets/images/kasa.png";
import kasaPorte from "../../assets/images/kasaPorte.png";
import styled from 'styled-components'
import { LinkLogo } from '../../utils/Link/Logo';

const KasaMaisonImg =styled.div`
position:relative;
`
const LogoImg =styled.img`
object-fit: none;
height:30px;
padding: 0 4px;
margin-top:9px;
;
`
const LogoPorte =styled.img`
object-fit: none;
position:absolute;
left: 22px;
top: 28px;
`
const TextLogo =styled.p`
padding: 0 4px;
font-size: 36px;
font-weight: 500;
`
const Logo = () => {
    return (
        <LinkLogo to="/" >
        <TextLogo>K</TextLogo>
        <KasaMaisonImg>
            < LogoImg src={kasa} alt="maison"/>
            <LogoPorte src={kasaPorte} alt="Porte"/>
        </KasaMaisonImg>
        <TextLogo>s</TextLogo>
        <TextLogo>a</TextLogo>
      </LinkLogo>  
    );
};

export default Logo;