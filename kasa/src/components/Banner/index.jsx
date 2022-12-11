import React from 'react';
import styled from 'styled-components';
import Colors from "../../utils/style/Colors";
import Moutains from '../../assets/images/mountains.svg';
const SameContentImg =`
height: 223px;
border-radius: 25px;
width: 100%;
position:relative;
@media (max-width: 900px) {
    height: 150px;
    border-radius: 17px;
  }
  @media (max-width: 600px) {
    height: 111px;
    border-radius: 10px;
  }
`
const HomeMoutain = styled.div `
${SameContentImg}
`
const MoutainImg =styled.img`
${SameContentImg}
object-fit:cover;
filter: brightness(50%) opacity(0.7);
`;
const TitleEffect = styled.p`
position:absolute;
color:${Colors.white};
font-size: 48px;
right: 13%;
    left: 16%;
    top: 38%;
@media (max-width: 900px) {
    font-size: 36px;
    right: 18%;
    left: 13%;
    top: 28%;
  }
  @media (max-width: 600px) {
    font-size: 24px;
    right: 23%;
    left: 10%;
    top: 15%;
  }
`;

const Banner
 = () => {
    const title ="Chez vous, partout et ailleurs"
    return (
     
        <HomeMoutain>
        <MoutainImg src={Moutains} alt="moutains banner"/>
       <TitleEffect>{title}</TitleEffect>
     </HomeMoutain> 
    );
};

export default Banner
;