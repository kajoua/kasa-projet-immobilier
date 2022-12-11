import React from 'react';
import { listProducts } from '../../../datas';
import { useParams } from 'react-router-dom';
import star from "../../../assets/images/star.png";
import starPink from "../../../assets/images/starPink.png";
import styled from 'styled-components';


const StarLogo =styled.img`
height: 30px;
width :30px
@media (max-width: 900px) { 
  height: 22px;
  width :22px
}
@media (max-width: 600px) {
  height: 15px;
width :15px
}`

const Rating = () => {
    const { id } = useParams();
    const logement = listProducts.find((c)=> c.id === id)
    return (
        <div>
        {Array.from(Array(5), (s, index) => {
          if (index < parseInt(logement.rating)) {
            return (
              <span  key={`${logement.id}-${index}`} >
                <StarLogo src={starPink} alt="Etoiles valide" />
              </span>
            )
          } else {
            return (
              <span key={`${logement.id}-${index}`} >
                <StarLogo src={star} alt="Etoiles invalide"/>
              </span>
            )
          }
        })}
      </div>
    
    );
};

export default Rating;