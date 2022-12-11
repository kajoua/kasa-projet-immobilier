import React from 'react';
import styled from 'styled-components'
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { AlignItemCenter } from '../../utils/style/Mixins';
const ErrorWrapper = styled.div`
${AlignItemCenter}
margin: 0 0 10% 0;
@media (max-width: 900px) {
  margin: 0 0 10% 0;
}
@media (max-width: 600px) {
  margin: 38% 20% 50% 20%;

}
`
const ErrorTitle = styled.h1`
font-size: 288px;
font-weight: 700;
@media (max-width: 900px) {
  font-size: 150px;
  
}
@media (max-width: 600px) {
  font-size: 96px;

}
`
const ErrorSubtitle = styled.p`
text-align: center;
font-size: 36px;
@media (max-width: 900px) {
  font-size: 26px;margin-top:1%;
}
@media (max-width: 600px) {
  font-size: 18px;  margin-top:2%;
}
`
const ErrorLink = styled(Link)`
margin-top: 14%;
font-size: 18px;
text-decoration: underline;
@media (max-width: 900px) {
  margin-top: 14%;
  font-size: 16px;
}
@media (max-width: 600px) {
  margin-top: 38%;
  font-size: 14px;
}
`
const Error = () => {
    useEffect(() => {
        document.title = "Error 404";
      });
      return (
        
        
          <ErrorWrapper>
            <ErrorTitle>404</ErrorTitle>
            <ErrorSubtitle>
              Oups! La page que vous demandez n'existe pas.
            </ErrorSubtitle>
            <ErrorLink to="/">
              Retourner sur la page d’accueil
            </ErrorLink>
          </ErrorWrapper>
    
       
      );
    };

export default Error;