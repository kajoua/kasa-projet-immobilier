import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./pages/Home";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Error from "./pages/Error";
import About from "./pages/About";
import { createGlobalStyle } from 'styled-components'
import Logement from "./pages/Logement";
import Colors from "./utils/style/Colors";
const routerBaseName = process.env.PUBLIC_URL;

const GlobalStyle = createGlobalStyle`
    *{
      margin:0;
      font-family: 'Montserrat', Helvetica, sans-serif;
      color: ${Colors.pink};
      font-weight: 500;
    }
`
ReactDOM.render(
  <React.StrictMode>
    <Router basename={routerBaseName}>
    <GlobalStyle />
    <Header/>
    <Switch>
      <Route exact path="/"><Home /></Route> 
      <Route path="/about"><About/></Route>
      <Route path="/:id">
        <Logement/>
      </Route>
      <Route><Error/></Route>
    </Switch>
    <Footer />
    </Router>
  </React.StrictMode>, document.getElementById('root')
);


