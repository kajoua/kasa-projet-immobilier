import React from 'react';
import { Link } from "react-router-dom";
import Card from '../Card';
import { listProducts } from '../../datas';
import styled from 'styled-components'

const CardsContainer = styled.div`
width: 100%;
margin: 5%;
background: #f7F7F7;
border-radius: 10px;
display: flex;
flex-wrap: wrap;
flex-direction: row; 
background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
`
const ListCard = () => {
    
    
    return (
        <div>
            <CardsContainer>
            {listProducts.map((product)=>(
                <Link to={`/${product.id}`} key={`${product.id}`}>
                <Card 
                cover={product.cover}
                title={product.title}/>
                </Link>

            ))}</CardsContainer>
        </div>
    );
};

export default ListCard;
