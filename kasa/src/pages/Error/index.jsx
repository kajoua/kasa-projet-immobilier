import React from 'react';
import styled from 'styled-components'
import { useEffect } from "react";
import { Link } from "react-router-dom";

import colors from '../../utils/style/colors';
const ErrorWrapper = styled.div`
position: absolute;
display: flex;
flex-direction: column;
color: ${colors.pink};
margin: 0 10% 5% 10%;
align-items:center;
`
const ErrorTitle = styled.p`
font-size: 288px;
font-weight: 700;
`
const ErrorSubtitle = styled.p`
margin-top: 50px;
font-size: 34px;
font-weight: 500;
`
const ErrorLink = styled(Link)`
color: ${colors.pink};
font-size: 18px;
text-decoration-line: underline;
text-decoration: none;

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