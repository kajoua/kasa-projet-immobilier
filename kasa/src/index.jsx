import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from "./components/Error";
import About from "./pages/About";
import { createGlobalStyle } from 'styled-components'
import Logement from "./pages/Logement";

const GlobalStyle = createGlobalStyle`
    *{
      margin:0;
        font-family: 'Montserrat', Helvetica, sans-serif;
    }
`
ReactDOM.render(
  <React.StrictMode>
    <Router>
    <GlobalStyle />
    <Header/>
    <Switch>
      <Route exact path="/"><Home /></Route> 
      <Route path="/about"><About/></Route>
      <Route path="/logement/:id">
        <Logement/>
      </Route>
      <Route><Error/></Route>
    </Switch>
    <Footer />
    </Router>
  </React.StrictMode>, document.getElementById('root')
);


