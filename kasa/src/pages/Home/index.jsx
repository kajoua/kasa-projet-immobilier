
import React from "react";
import { useEffect } from "react";
import Banner from "../../components/Banner";
import ListCard from "../../components/ListCard";
import styled from "styled-components";

const HomeContainer =styled.div`
margin: 0 7%;
`
const Home = () => {
  useEffect(() => {
    document.title = "Kasa";
  });

  return (
    <HomeContainer>
    <Banner/>
    <ListCard />
    </HomeContainer>
  );
};

export default Home;

