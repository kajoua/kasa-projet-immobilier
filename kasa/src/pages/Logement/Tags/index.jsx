import React from 'react';
import styled from 'styled-components';

const TagListe =styled.ul``
const TagText =styled.p``
const Tags = ({Tag}) => {
    return (
        <TagListe>
      <TagText>{Tag}</TagText>
    </TagListe>
    );
};

export default Tags;