import React from 'react';
import styled from 'styled-components';
import colors from '../../../utils/style/colors';

const TagListe =styled.ul`
text-align: center;
color: ${colors.white};
height: 25px;
border-radius: 5px;
padding: 0px 10px;
margin-right: 10px;
display: flex;
justify-content: center;
align-items: center;
white-space: nowrap;
background-color: ${colors.pink};
height: 18px;
width: 84px;
left: 0px;
top: 0px;
`
const TagText =styled.p`
color: ${colors.white};
    font-size: 10px;
    text-transform: none;`
const Tags = ({Tag}) => {
    return (
        <TagListe>
      <TagText>{Tag}</TagText>
    </TagListe>
    );
};

export default Tags;