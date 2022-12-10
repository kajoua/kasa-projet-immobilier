import React from 'react';
import { useParams } from 'react-router-dom';
import { listProducts } from '../../datas';
import Carrousel from './Carrousel';
import styled from 'styled-components';
import Tags from '../../pages/Logement/Tags';
import Rating from './Rating';
import Collapse from '../../utils/collapse';
import Error from '../Error';
 const LogementContainer = styled.div``;
 const LogementDetails = styled.div``;
 const LogementCollapse = styled.div``;

const Logement
 = () => {
    const { id } = useParams();
    const logement = listProducts.find((c)=> c.id === id)
    
    return !logement?(
        <Error/>):(
        <LogementContainer>
            <Carrousel pictures={logement.pictures}/>
      <LogementDetails>
        <div className="singleLocation__title">
          <h1 className="singleLocation__title__text">{logement.title}</h1>
          <p className="singleLocation__location">{logement.location}</p>
        </div>
        <div className="divRatingHost">
        
          <Rating />
         
          <div className="host">
            <p className="host__name">{logement.host.name} </p>
            <img src={logement.host.picture} alt="Hébergeur" />
          </div>
        </div>
    
        <div className="singleLocation__tags flex">
          {logement.tags.map((tag, index) => (
            <Tags key={index} Tag={tag} />
          ))}
        </div>
      
      <LogementCollapse>
        <Collapse label="Description">{logement.description}</Collapse> 
        <Collapse
      label="Équipements">
        {logement.equipments.map((equipment, index) => (
        <p>{equipment} </p>
      ))}
 </Collapse>
      </LogementCollapse>
      </LogementDetails>
    </LogementContainer>
    );
};

export default Logement;