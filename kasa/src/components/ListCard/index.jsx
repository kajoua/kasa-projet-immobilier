import React from 'react';
import { Link } from "react-router-dom";
import Card from '../Card';
import { listProducts } from '../../datas';
import styled from 'styled-components'
import Colors from '../../utils/style/Colors';
import { Wrap } from '../../utils/style/Mixins';
const CardsContainer = styled.div`
width: 100%;
margin: 3% 0;
border-radius: 25px;
${Wrap}
justify-content: space-evenly;
background: ${Colors.greyLight};
@media (max-width: 600px) {
 background: transparent;
  }
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
