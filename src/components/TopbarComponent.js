import React from 'react';

import {MDBContainer, MDBRow, MDBCol, MDBIcon} from "mdbreact";

import { BrowserRouter as Router, Link } from 'react-router-dom';

const TopbarComponent = () => {
    return (
        <Router>
        <div className="elegant-color">
        <MDBContainer className="pt-2 pb-2">
            <MDBRow>
                <MDBCol className="white-text text-center py-2" lg="4" md="4" sm="12">
                    <strong className="light-blue-text">Opening Hours: </strong><span className="font-weight-bolder"> 6AM - 8PM</span>
                </MDBCol>
                <MDBCol className="white-text text-center py-2" lg="4" md="4" sm="12">
                    <strong>Need help? </strong><span>Call to <strong className="light-blue-text">0800-335-5899</strong></span>
                </MDBCol>
                <MDBCol className="white-text text-center py-2" lg="4" md="4" sm="12">
                    <span><Link to="#!" className="white-text"><MDBIcon fab icon="facebook-square" size="lg" className="pr-2" /></Link></span>
                    <span><Link to="#!" className="white-text"><MDBIcon fab icon="twitter-square" size="lg" className="pr-2" /></Link></span>
                    <span><Link to="#!" className="white-text"><MDBIcon fab icon="instagram" size="lg" className="pr-2" /></Link></span>
                    <span><Link to="#!" className="white-text"><MDBIcon fab icon="pinterest-square" size="lg" className="pr-2" /></Link></span>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        </div>
        </Router>
    );
}

export default TopbarComponent;