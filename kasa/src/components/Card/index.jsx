import React from 'react';
import PropTypes from "prop-types"
import styled from 'styled-components'
import colors from '../../utils/style/colors'

const CardTitle = styled.span`
color: ${colors.white};
    font-size: 18px;
    font-weight: 500;
    position: absolute;
    object-fit: cover;
    padding: 268px 20px 20px 20px;
`
const CardImage = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 10px;
`
const CardWrapper = styled.div`

    display: flex;
    flex-direction: column;
    background-color: ${colors.pink};
    border-radius: 10px;
    width: 340px;
    height: 340px;
    margin: 56px 50px 0 50px;
    transition: 200ms;
    &:hover {
        cursor: pointer;
        box-shadow: 2px 2px 10px #e2e3e9;
    }
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