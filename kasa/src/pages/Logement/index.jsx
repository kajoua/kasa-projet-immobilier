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
        <div >
          <h3>{logement.title}</h3>
          <p >{logement.location}</p>
        </div>
        <div>
          <Rating />
  
          <div >
            <p>{logement.host.name} </p>
            <img src={logement.host.picture} alt="Hébergeur" />
          </div>
        </div>
    
        <div>
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