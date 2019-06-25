import React, { Component } from 'react';
import { MDBContainer } from "mdbreact";
//import NavbarComponent from '../NavbarComponent';

class AboutComponent extends Component {
    render() {
        return (
            <MDBContainer className="my-5">
                <h2 className="flex-center">About</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mattis justo ac porta pretium. Vivamus tempor ipsum at mattis suscipit. Cras imperdiet lorem sit amet sem iaculis vulputate. Fusce in neque faucibus elit interdum vestibulum eu nec magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin congue consequat lobortis. Praesent fermentum velit nec ornare lobortis. Aenean tristique, lectus nec malesuada viverra, libero tellus pulvinar leo, at sagittis ipsum ipsum at sapien. Phasellus tempus vel ex at aliquet. Suspendisse ultricies, tellus ultricies aliquet lacinia, quam massa pharetra orci, eu feugiat orci enim sed augue. Ut a lectus odio. Nunc sit amet dignissim mi.</p>
                <p>Pellentesque sit amet diam eget dolor suscipit ultrices vel et ante. Duis luctus mollis erat, vitae elementum mauris volutpat ac. Mauris ac risus tincidunt, suscipit ipsum vitae, ultricies enim. Etiam id dui a neque rutrum ultrices sit amet maximus dui. Vivamus ornare tellus eros, ac consectetur eros imperdiet vel. Proin quis consequat tortor. Fusce sed nibh ac enim aliquet maximus. Nulla tempus ultricies nisi vitae ullamcorper. Nunc gravida mi vel enim euismod, ultricies commodo sem varius. Vivamus tristique diam et arcu consectetur faucibus. Mauris aliquet, arcu ac dictum elementum, orci nulla suscipit urna, non lacinia nunc nunc non velit.</p>
            </MDBContainer>
        );

    }
}

export default AboutComponent;


