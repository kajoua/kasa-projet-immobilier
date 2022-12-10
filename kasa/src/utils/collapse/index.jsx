import React from "react";
import { useState } from "react";
import styled from 'styled-components';
import vector from "../../assets/images/star.png";

const CollapseContainer = styled.div`
margin:0 0 20px 0;
border: none;s
width: 70%;
background-color: $gris; 
color: $rose;
border-radius:5px;
`
const CollapseButton = styled.div`
cursor: pointer;
    border: none;
    width: 70%;
    border-radius: 10px;
    background-color: #ff6060;
    padding: 10px 20px;
    margin : 0 0 20px 0;
    color: #fff;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
`
const CollapseImg =styled.img`
height: auto;
 width: 25px;
transform: rotate(180deg);
`
const CollapseComment =styled.p`
padding: 0 15px 15px 15px;
`
const Collapse = (props) => {
  const [open, setOpen] = useState(false);

  return open ? (
    <CollapseContainer>
      <CollapseButton onClick={() => setOpen(false)}>
        {props.label}
        <CollapseImg
          src={vector}
         
        ></CollapseImg>
      </CollapseButton>
      <CollapseComment>{props.children}</CollapseComment>
    </CollapseContainer>
  ) : (
    <CollapseButton onClick={() => setOpen(true)}>
      {props.label}
      <CollapseImg src={vector}></CollapseImg>
    </CollapseButton>
  );
};

export default Collapse;
