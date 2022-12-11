import React from 'react';
import { useState } from 'react';
import PropTypes from "prop-types";
import vectorDroit from "../../../assets/images/vectorDroit.png"
import vectorGauche from "../../../assets/images/vectorGauche.png"
import colors from '../../../utils/style/colors';
import styled from 'styled-components';

const CarrouselContainer =styled.div`
position: relative;
height: 415px;
width: 100%;
border-radius: 25px;
display: flex;
align-items: center;
@media (max-width: 900px) { 
  margin-bottom: 10%;
  border-radius: 18px;
}
@media (max-width: 600px) {
  height: 255px;
  border-radius: 10px;
}`
const CarrouselImg =styled.img`
width: 100%;
height:100%;
border-radius: 25px;
object-fit: cover;
@media (max-width: 900px) { 
  border-radius: 18px;
}
@media (max-width: 600px) {
  border-radius: 10px;
}
`
const CarrouselText= styled.p`
cursor: default;
position:absolute;
font-size: 18px;
font-weight: 500;
color: ${colors.white};
left: 50%;
bottom: 5%;
@media (max-width: 900px) { 
  font-size: 16px;
}
@media (max-width: 600px) {
  font-size: 12px;
}
`
const CarrouselButton =styled.button`
cursor:pointer;
position:absolute;
border:none;
background: transparent;
&.droit{ right: 0%;}
`
const CarrouselImgVector =styled.img`
height: 80px;
@media (max-width: 900px) { 
  height: 50px;}
@media (max-width: 600px) {
  height: 20px;}`


const Carrousel = ({pictures}) => {
    const [item, setItem] = useState(0)
    
    return pictures.length > 1 ?(
        <CarrouselContainer>

        <CarrouselButton onClick={() => { item === 0 ? setItem(pictures.length - 1) : setItem(item - 1) }}  >
          <CarrouselImgVector src={vectorGauche} alt ="Flèche Gauche" />
        </CarrouselButton>

        <CarrouselImg src={pictures[item]} alt="Locations"/>
        <CarrouselText>{item + 1}/{pictures.length} </CarrouselText>
     
        <CarrouselButton className='droit' onClick={() => { item === pictures.length - 1 ? setItem(0) : setItem(item + 1) }}  >
          <CarrouselImgVector src={vectorDroit} alt ="Flèche Droite" />
        </CarrouselButton>
      </CarrouselContainer>
    ): (
      <CarrouselContainer>
        <CarrouselImg src={pictures[item]} alt="Locations" />
        <CarrouselText>{item + 1}/{pictures.length} </CarrouselText>
        </CarrouselContainer>
      )
};

Carrousel.propTypes = {
  pictures: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
}

export default Carrousel;
