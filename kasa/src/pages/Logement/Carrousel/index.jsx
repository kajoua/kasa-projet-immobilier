import React from 'react';
import { useState } from 'react';
import vectorDroit from "../../../assets/images/vectorDroit.png"
import vectorGauche from "../../../assets/images/vectorGauche.png"
import styled from 'styled-components';

const CarrouselContainer =styled.div``
const CarrouselImg =styled.img``
const CarrouselText= styled.p``
const CarrouselButtonGauche =styled.button``
const CarrouselButtonDroit =styled.button``
const CarrouselImgGauche =styled.img``
const CarrouselImgDroit =styled.img``

const Carrousel = ({pictures}) => {
    const [item, setItem] = useState(0)
    
    return pictures.length > 1 ?(
        <CarrouselContainer>

        <CarrouselButtonGauche onClick={() => { item === 0 ? setItem(pictures.length - 1) : setItem(item - 1) }}  >
          <CarrouselImgGauche src={vectorGauche} alt ="Flèche Gauche" />
        </CarrouselButtonGauche>

        <CarrouselImg src={pictures[item]} alt="Locations"/>
        <CarrouselText>{item + 1}/{pictures.length} </CarrouselText>
     
        <CarrouselButtonDroit onClick={() => { item === pictures.length - 1 ? setItem(0) : setItem(item + 1) }}  >
          <CarrouselImgDroit src={vectorDroit} alt ="Flèche Droite" />
        </CarrouselButtonDroit>
      </CarrouselContainer>
    ): (
      <CarrouselContainer>
        <CarrouselImg src={pictures[item]} alt="Locations" />
        <CarrouselText>{item + 1}/{pictures.length} </CarrouselText>
        </CarrouselContainer>
      )
};

export default Carrousel;
