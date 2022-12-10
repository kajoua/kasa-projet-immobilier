import React from 'react';
import PropTypes from "prop-types"
import styled from 'styled-components'
import colors from '../../utils/style/colors'


const CardWrapper = styled.div`
position: relative;
z-index: 2;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    width: 340px;
    height: 340px;
    margin: 20px 0 ;
    transition: 200ms;
    background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(0, 0, 0, 0.5) 100%
      );
      @media (max-width: 900px) {
        width: 335px;
        height: 300px;
      }
      @media (max-width: 600px) {
        height: 255px;
        width:100%;
      }
`


const CardImage = styled.img`
   cursor: pointer;
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
    z-index: 1;
    mix-blend-mode: multiply;
    transition: 0.5s;
    &:hover {
    transition: 0.5s;
    mix-blend-mode: normal;
    box-shadow: 0px 3px 15px ${colors.greyDark};
    }
`
const CardTitle = styled.p`
color: ${colors.white};
    font-size: 18px;
    z-index: 3;
    font-weight: 500;
    position: absolute;
   top:79%;
   left:6%;
   right: 30%;
`
function Card({ title, cover }) {
    return (
        <CardWrapper>
            <CardImage src={cover} alt="ListCard" height={80} width={80} />
            <CardTitle >{title}</CardTitle >
        </CardWrapper>
    )
}
Card.propTypes ={
  
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
}
Card.defaultProps = {
   
    title: '',
    cover: 'Cover par défaut',
}
export default Card