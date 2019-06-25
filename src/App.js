//React imports
import React, { Component } from "react";
import {Helmet} from "react-helmet";
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Pages Components
import AboutComponent from './components/pagescomponents/AboutComponent';

//Elements Components
import NavbarComponent from './components/NavbarComponent';
import TopbarComponent from './components/TopbarComponent';
import HeaderComponent from './components/HeaderComponent';

var title = 'The Realstate Project | ';
var subtitle = 'Buy your dreams!';
//var site_url = window.location.href;
var page_title = title + subtitle;

class App extends Component {
  render() {
    return (
        <Router>

            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{ page_title }</title>
                    <meta name="description" content="Realstate project made with React Js and Love." />
                    <meta name="keywords" cpntent="realstate" />
                </Helmet>
                <NavbarComponent />

            </div>

            <Route exact className="active" path="/" component={ Header } />
            <Route path="/about" component={ About } />
            <TopbarComponent />
        </Router>


    );
  }
}

function Header() {
    return (
        <HeaderComponent />
    );
}


function About() {
    return (
        <AboutComponent />
    );
}


export default App;
