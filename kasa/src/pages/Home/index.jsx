
import React from "react";
import { useEffect } from "react";

import Banner from "../../components/Banner";
import ListCard from "../../components/ListCard";

const Home = () => {
  useEffect(() => {
    document.title = "Kasa";
  });

  return (
    <div>
    <Banner/>
    <ListCard />
    </div>
  );
};

export default Home;

