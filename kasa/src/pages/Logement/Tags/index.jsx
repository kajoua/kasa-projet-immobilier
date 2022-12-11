import React from 'react';
import styled from 'styled-components';
import colors from '../../../utils/style/colors';
import PropTypes from "prop-types";
const TagListe =styled.ul`
text-align: center;
margin-top: 10px;
color: ${colors.white};
height: 25px;
font-weight: 500;
border-radius: 10px;
padding: 0px 10px;
margin-right: 10px;
display: flex;
justify-content: center;
align-items: center;
white-space: nowrap;
background-color: ${colors.pink};
width: 115px;
@media (max-width: 600px) {
  border-radius: 5px;
  height: 18px;
  width: 84px;
}
`
const TagText =styled.p`
color: ${colors.white};
    font-size: 10px;
    text-transform: none;
    
    `
const Tags = ({Tag}) => {
    return (
        <TagListe>
      <TagText >{Tag}</TagText>
    </TagListe>
    );
};

Tags.propTypes ={
  tag: PropTypes.string.isRequired,
}
Tags.defaultProps = {
  tag: '',
}
export default Tags;