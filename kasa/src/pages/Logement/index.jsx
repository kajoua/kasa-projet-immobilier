import React from 'react';
import { useParams } from 'react-router-dom';
import { listProducts } from '../../datas';
import Carrousel from './Carrousel';
import styled from 'styled-components';
import Tags from '../../pages/Logement/Tags';
import Rating from './Rating';
import Collapse from '../../utils/collapse';
import Error from '../Error';
 const LogementContainer = styled.div`
 margin: 0 7%;
 @media (max-width: 900px) { 
  margin-bottom: 10%;
}
@media (max-width: 600px) {
  margin-bottom: 20%;
}
 `
 const LogementDetails = styled.div`
 margin: 2% 0;
 width: 100%;
 display: flex; 
 flex-wrap: wrap; 
 @media (max-width: 900px) { 
  margin-bottom: 10%;
}
@media (max-width: 600px) {
  margin-bottom: 15%;
}
 `;

const LogementName =styled.div`
background: #7FFF00;
width: 70%;
@media (max-width: 600px) {
  width: 100%;
}
`

const LogementHost =styled.div`
background: #9400D3;
width: 30%;
@media (max-width: 600px) {
  width: 100%;
}
`

const LogementCollapse = styled.div`
width: 100%;
display: flex; 
flex-wrap: wrap;
justify-content: space-between;
}
`
const LogementCollapseUn =styled.div`
width:40%;
@media (max-width: 900px) {
  width: 47%;
  max-width: 335px;
}
@media (max-width: 600px) {
  width: 100%;
}
`

const Logement
 = () => {
    const { id } = useParams();
    const logement = listProducts.find((c)=> c.id === id)
    
    return !logement?(
        <Error/>):(
        <LogementContainer>
            <Carrousel pictures={logement.pictures}/>
      <LogementDetails>
        <LogementName >
          <h3>{logement.title}</h3>
          <p >{logement.location}</p>
        
         <div>
          {logement.tags.map((tag, index) => (
            <Tags key={index} Tag={tag} />
          ))}
        </div>
        </LogementName>
        <LogementHost>
          <div >
            <p>{logement.host.name} </p>
            <img src={logement.host.picture} alt="Hébergeur" />
          </div>
          <Rating />
        </LogementHost>

      <LogementCollapse>

        <LogementCollapseUn>
        <Collapse  label="Description">{logement.description}</Collapse>
         </LogementCollapseUn>

       <LogementCollapseUn>
         <Collapse 
      label="Équipements">
        {logement.equipments.map((equipment, index) => (
        <p>{equipment} </p>
      ))}
 </Collapse>
 </LogementCollapseUn>
      </LogementCollapse>
      </LogementDetails>
    </LogementContainer>
    );
};

export default Logement;