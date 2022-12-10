import React from 'react';
import { Link } from "react-router-dom";
import Card from '../Card';
import { listProducts } from '../../datas';
import styled from 'styled-components'
import colors from '../../utils/style/colors';

const CardsContainer = styled.div`
width: 100%;
margin: 3% 0;
border-radius: 25px;
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
background: ${colors.greyLight};
`
const ListCard = () => {
    
    
    return (
            <CardsContainer>
            {listProducts.map((product)=>(
                <Link to={`/${product.id}`} key={`${product.id}`}>
                <Card 
                cover={product.cover}
                title={product.title}/>
                </Link>

            ))}
            </CardsContainer>
       
    );
};

export default ListCard;
