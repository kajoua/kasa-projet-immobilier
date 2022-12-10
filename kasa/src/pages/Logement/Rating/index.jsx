import React from 'react';
import { listProducts } from '../../../datas';
import { useParams } from 'react-router-dom';
import star from "../../../assets/images/star.png";
import starPink from "../../../assets/images/starPink.png";
import styled from 'styled-components';

const StarContainer =styled.div``
const StarValide =styled.span``
const StarInvalide =styled.span``
const StarLogo =styled.img``

const Rating = () => {
    const { id } = useParams();
    const logement = listProducts.find((c)=> c.id === id)
    return (
        <StarContainer>
        {Array.from(Array(5), (s, index) => {
          if (index < parseInt(logement.rating)) {
            return (
              <StarValide  key={`${logement.id}-${index}`} >
                <StarLogo src={starPink} alt="Etoiles valide" />
              </StarValide>
            )
          } else {
            return (
              <StarInvalide key={`${logement.id}-${index}`} >
                <StarLogo src={star} alt="Etoiles invalide"/>
              </StarInvalide>
            )
          }
        })}
      </StarContainer>
    
    );
};

export default Rating;