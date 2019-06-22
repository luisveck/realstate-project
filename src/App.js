import React, { Component } from "react";
import {Helmet} from "react-helmet";
//import { MDBContainer } from "mdbreact";
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
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{ page_title }</title>
                <meta name="description" content="testing react helmet" />
                <meta name="keywords" cpntent="react,seo,helmet" />
            </Helmet>
            <NavbarComponent />
            <HeaderComponent/>
            <TopbarComponent />
        </div>
    );
  }
}

export default App;
