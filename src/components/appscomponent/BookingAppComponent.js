import React, { Component } from 'react';
import './css/form.css';
import {MDBContainer, MDBRow, MDBCol} from "mdbreact";


class BookingApp extends Component {

    render() {
        return(
            <div>
                <form>
                    <MDBContainer>
                        <MDBRow>
                            <MDBCol className="my-2" lg="3" md="3" sm="12">
                                <input className="book-form-input" type="text" placeholder="Enter your Location"/>
                            </MDBCol>
                            <MDBCol className="my-2" lg="2" md="2" sm="12">
                                <select className="book-form-select">
                                    <option>Bedrooms</option>
                                    <option value="1">1 Bedroom's</option>
                                    <option value="2">2 Bedroom's</option>
                                    <option value="3">3 Bedroom's</option>
                                    <option value="4">4 Bedroom's</option>
                                    <option value="5">5 Bedroom's</option>
                                </select>
                            </MDBCol>
                            <MDBCol className="my-2" lg="2" md="2" sm="12">

                                <select className="book-form-select">
                                    <option>Bathrooms</option>
                                    <option value="1">1 Bathroom's</option>
                                    <option value="2">2 Bathroom's</option>
                                    <option value="3">3 Bathroom's</option>
                                    <option value="4">4 Bathroom's</option>
                                    <option value="5">5 Bathroom's</option>
                                </select>

                            </MDBCol>
                            <MDBCol className="my-2" lg="3" md="3" sm="12">

                                <select className="book-form-select">
                                    <option>All Prices</option>
                                    <option value="1">Between 0$ - 10.000$</option>
                                    <option value="2">Between 10.000 - 50.000$</option>
                                    <option value="3">Between 50.000$ - 80.000$</option>
                                    <option value="4">Between 80.000$ - 150.000$</option>
                                    <option value="5">Between 150.000$ - 300.000$</option>
                                </select>

                            </MDBCol>
                            <MDBCol className="my-2" lg="2" md="2" sm="12">
                                <button className="book-btn">Booking!</button>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>

                </form>
            </div>
        );
    }
}

export default BookingApp;