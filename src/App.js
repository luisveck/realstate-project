//React imports
import React, { Component } from "react";
import {Helmet} from "react-helmet";
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Import animations

import { MDBAnimation } from "mdbreact";

//Import preloaders
import { Circle } from 'react-preloaders';

//Pages Components
import AboutComponent from './components/pagescomponents/AboutComponent';

//Elements Components
import NavbarComponent from './components/NavbarComponent';
import TopbarComponent from './components/TopbarComponent';
import HeaderComponent from './components/HeaderComponent';

var title = 'The Realstate Project';

class App extends Component {
  render() {
    return (
        <Router>

            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Home - {title}</title>
                    <meta name="description" content="Realstate project made with React Js and Love." />
                    <meta name="keywords" content="realstate" />
                </Helmet>
                <NavbarComponent />

            </div>

            <Route exact className="active" path="/" component={ Header } />
            <Route path="/about" component={ About } />
            <Route path="/contact" component={ Contact } />
            <TopbarComponent />
            <Circle color={'#ff7043'} time={800} />
        </Router>



    );
  }
}

function Header() {
    return (
        <MDBAnimation type="fadeIn" duration="1s">
            <HeaderComponent />
        </MDBAnimation>
    );
}


function About() {
    return (
        <MDBAnimation type="fadeIn" duration="1s">
            <div>
                <Helmet>
                    <title>About - {title}</title>
                </Helmet>
                <AboutComponent />
            </div>
        </MDBAnimation>
    );
}

function Contact() {
    return(
        <MDBAnimation type="fadeIn" duration="1s">
        <div className="my-5">
            <h2 className="flex-center">Contact</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores beatae cum deserunt ea eligendi et ipsum labore, laudantium libero mollitia necessitatibus nemo nostrum officiis qui quia similique soluta tempore?</p>
        </div>
        </MDBAnimation>
    );
}


export default App;
