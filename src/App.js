import React, { Component } from "react";
//import { MDBContainer } from "mdbreact";
import NavbarComponent from './components/NavbarComponent';
import TopbarComponent from './components/TopbarComponent';
import HeaderComponent from './components/HeaderComponent';

class App extends Component {
  render() {
    return (
        <div>
          <NavbarComponent />
          <HeaderComponent/>
          <TopbarComponent />
        </div>
    );
  }
}

export default App;
