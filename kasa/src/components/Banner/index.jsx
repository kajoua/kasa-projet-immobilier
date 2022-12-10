import React from 'react';
import styled from 'styled-components';
import colors from "../../utils/style/colors";

import Moutains from '../../assets/images/mountains.svg';
const HomeMoutain = styled.div `
position: relative;
height: 223px;
left: 5%;
right: 5%;
width: 80%;
background: ${colors.greyLight};
border-radius: 25px;


`
const MoutainImg =styled.img`

border-radius: 25px;
background: ${colors.black};
mix-blend-mode: darken;
opacity: 0.3;
object-fit:contain;


`;
const TitleEffect = styled.p`
position: absolute;
color:${colors.white};
font-weight: 500;
font-size: 280%;
RIGHT: 20%;
    left: 20%;
    TOP: 20%;
`;

const Banner
 = () => {
    const title ="Chez vous, partout et ailleurs"
    return (
     
        <HomeMoutain>
        <MoutainImg src={Moutains} />
       <TitleEffect>{title}</TitleEffect>
     </HomeMoutain> 
    );
};

export default Banner
;