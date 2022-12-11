import React from 'react';
import { useParams } from 'react-router-dom';
import { listProducts } from '../../datas';
import Carrousel from './Carrousel';
import styled from 'styled-components';
import Tags from '../../pages/Logement/Tags';
import Rating from './Rating';
import Collapse from '../../utils/collapse';
import Error from '../Error';
import colors from '../../utils/style/colors';

const StyleBox=`
display:flex;
flex-wrap: wrap;
`
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
 ${StyleBox}
 @media (max-width: 900px) { 
margin-top: -2%;
  margin-bottom: 10%;
}
@media (max-width: 600px) {
  margin-top: -5%;
  margin-bottom: 15%;
}
 `;

const LogementName =styled.div`
width: 70%;
display:flex;
flex-direction: column;
justify-content: space-between;
@media (max-width: 600px) {
  width: 100%;
}
`
const LogementNameDetail=styled.div`
color:${colors.pink};
width: 90%;
`
const LogementNameTitle=styled.p`
font-weight: 500;
font-size: 36px;
@media (max-width: 900px) {
  font-size: 27px;
}
@media (max-width: 600px) {
  font-size: 18px;
}
`
const LogementNameLocation=styled.p`
font-weight: 500;
font-size: 18px;
@media (max-width: 900px) {
  margin-top: 5%;
  font-size: 16px;
}
@media (max-width: 600px) {
  margin-top: 5%;
  font-size: 14px;
}
`
const LogementNameTag = styled.div`
margin-top:5%;
${StyleBox}`

const LogementHost =styled.div`
width: 30%;
display: flex;
flex-direction: column;
align-items: flex-end;
justify-content: space-between;
@media (max-width: 900px) {
  width: 100%;
  flex-direction: row-reverse;
  align-items: center;
}
@media (max-width: 600px) {
margin-top:2%;
}
`
const LogementHostDetails =styled.div`
display: flex; 
flex-direction: row;
`

const LogementHostName =styled.p`
text-align: end;
color:${colors.pink};
font-weight : 500; 
font-size:18px;
margin-top: 5%;
margin-right: 6%;
@media (max-width: 600px) {
  font-size:12px;
}
`
const LogementHostImg =styled.img`
border-radius:50px;
height: 64px;
width: 64px;
@media (max-width: 600px) {
  height: 46px;
  margin-top: 5%;
width: 46px;
}
@media (max-width: 600px) {
  height: 32px;
width: 32px;
}
`

const LogementCollapse = styled.div`
width: 100%;
${StyleBox}
justify-content: space-between;
}
`
const LogementCollapseUn =styled.div`
width:40%;
margin-top:2%;
@media (max-width: 900px) {
  width: 47%;
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
          <LogementNameDetail>
          <LogementNameTitle >{logement.title}</LogementNameTitle>
          <LogementNameLocation>{logement.location}</LogementNameLocation>
        </LogementNameDetail>
         <LogementNameTag>
          {logement.tags.map((tag, index) => (
            <Tags key={index} Tag={tag} />
          ))}
        </LogementNameTag>
        </LogementName>
        <LogementHost>
          <LogementHostDetails>
            <LogementHostName>{logement.host.name} </LogementHostName>
            <LogementHostImg src={logement.host.picture} alt="Hébergeur" />
          </LogementHostDetails>
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
        <p key={index}>{equipment} </p>
      ))}
 </Collapse>
 </LogementCollapseUn>
      </LogementCollapse>
      </LogementDetails>
    </LogementContainer>
    );
};

export default Logement;