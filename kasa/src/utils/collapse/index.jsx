import React from "react";
import { useState } from "react";
import styled from 'styled-components';
import vectorBas from "../../assets/images/vectorCollapse.jpg";
import vectorH from "../../assets/images/vectorH.jpg";
import colors from "../style/colors";

const CollapseContainer = styled.div`
margin:0 0 20px 0;
border: none;
width:100%;
border-radius:10px;
// display:flex;
// justify-content:center;
// flex-direction: column;
background: ${colors.greyLight};
@media (max-width: 600px) {
  border-radius: 5px;
}
`
const CollapseButton = styled.div`
cursor: pointer;
    border: none;
    height: 47px;
    width: 80%;
    font-size: 24px;
    font-weight: 500;
    padding: 0px 10%;
    border-radius: 10px;
    background-color: ${colors.pink};
    margin : 0 0 20px 0;
    color: ${colors.white};
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    @media (max-width: 900px) {
      font-size: 18px;
      height: 40px;
    }
    @media (max-width: 600px) {
      font-size: 13px;
      height: 30px;
      border-radius: 5px;
    }
`
const CollapseImg =styled.img`
height: 15px;
width: 23px;S
@media (max-width: 900px) {
  height: 11px;
width: 18px;
}
@media (max-width: 600px) {
  height: 8px;
width: 15px;
}
`
const CollapseComment =styled.p`
padding: 0 10px 10px 10px;
font-size: 24px;
color: ${colors.pink};
font-weight: 400;
@media (max-width: 900px) {
  font-size: 18px;
}
@media (max-width: 600px) {
  font-size: 13px;
}
`
const Collapse = (props) => {
  const [open, setOpen] = useState(false);

  return open ? (
    <CollapseContainer>
      <CollapseButton onClick={() => setOpen(false)}>
        {props.label}
        <CollapseImg
          src={vectorH}
         
        ></CollapseImg>
      </CollapseButton>
      <CollapseComment>{props.children}</CollapseComment>
    </CollapseContainer>
  ) : (
    <CollapseButton onClick={() => setOpen(true)}>
      {props.label}
      <CollapseImg src={vectorBas}></CollapseImg>
    </CollapseButton>
  );
};

export default Collapse;
