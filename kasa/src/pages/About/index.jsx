import React from 'react';
import gustavo from "../../assets/images/gustavo.jpg";
import gustavoMobile from "../../assets/images/gustavoMobile.jpg"
import { useEffect } from "react";
import Collapse from "../../utils/collapse"
import styled from 'styled-components';

const AboutContainer= styled.div`

`
const AboutImgDesktop =styled.img`
border-radius: 10px;
width: 80%;
margin-left: 10%;
`
const AboutImgMobile =styled.img`
border-radius: 10px;
width: 80%;
margin-left: 10%;
`
const AboutComment=styled.div`
margin: 5% 12%;
        display: flex;
        flex-direction: column;
`
const About = () => {
  useEffect(() => {
    document.title = "A propos";
  });
  return (
    <AboutContainer>
      {" "}
     
      <AboutImgDesktop src={gustavo} alt="Montagnes Desktop"/>
      <AboutImgMobile src={gustavoMobile} alt="Montagnes Mobile"/>

      <AboutComment>
        <Collapse label="Fiabilité">
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            régulièrement vérifiées par nos équipes.
        </Collapse>
        <Collapse label="Respect">
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
        </Collapse>
        <Collapse label="Service">
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critères de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur la sécurité domestique pour nos hôtes.
        </Collapse>
        <Collapse label="Sécurité">
            Nos équipes se tiennent à votre disposition pour vous fournir une
            expérience parfaite. N'hésitez pas à nous contacter si vous avez la
            moindre question.
        </Collapse>
      </AboutComment>
     
    </AboutContainer>
  );
};

export default About;
