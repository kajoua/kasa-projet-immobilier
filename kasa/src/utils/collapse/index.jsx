import React from "react";
import { useState } from "react";
import styled from 'styled-components';
import vectorBas from "../../assets/images/vectorCollapse.jpg";
import vectorH from "../../assets/images/vectorH.jpg";
import colors from "../style/colors";
const CollapseContainer = styled.div`
margin:0 0 20px 0;
border: none;
border-radius:5px;
// display:flex;
// justify-content:center;
// flex-direction: column;
background: ${colors.greyLight};
`
const CollapseButton = styled.div`
cursor: pointer;
    border: none;
    height: 47px;
    width: 100%;
    font-size: 24px;
    font-weight: 500;
    border-radius: 5px;
    background-color: ${colors.pink};
    margin : 0 0 20px 0;
    color: ${colors.white};
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    @media (max-width: 900px) {
      font-size: 18px;
    }
    @media (max-width: 600px) {
      font-size: 13px;
    }
`
const CollapseImg =styled.img`
height: 15px;
width: 23px;
padding-right: 8%;
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
          src={vectorBas}
         
        ></CollapseImg>
      </CollapseButton>
      <CollapseComment>{props.children}</CollapseComment>
    </CollapseContainer>
  ) : (
    <CollapseButton onClick={() => setOpen(true)}>
      {props.label}
      <CollapseImg src={vectorH}></CollapseImg>
    </CollapseButton>
  );
};

export default Collapse;
