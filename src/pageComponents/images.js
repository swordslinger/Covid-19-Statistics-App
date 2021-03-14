import React from 'react';

import Carousel from 'react-bootstrap/Carousel'
//export class so it can be used in different locations
export class Images extends React.Component {

    render() {
        return (

            <div>
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            width={800} height={350} alt="900x500" src="https://cdn1.media-and-learning.eu/files/2020/04/bigstock-Collage-of-Flu-COVID-virus-358776224-900x500.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h2 style={{ color: "" }}>Covid-19</h2>
                            <p style={{ color: "red" }}>A pandemic that has shaken the world.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100"
                            width={800} height={350} alt="900x500" src="https://www.gatescambridge.org/wp-content/uploads/2020/07/808921024px-3d_medical_animation_coronavirus_structure.jpg"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h2 style={{ color: "" }}>Vaxcine</h2>
                            <p style={{ color: 'yellow' }}>Is the key protecting those at high risk of covid-19.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            width={800} height={350} alt="900x500" src="https://www.elitecme.com/wp-content/uploads/2020/06/Caregiver900x500.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h2 style={{ color: "black" }}>PPE</h2>
                            <p style={{ color: "black" }}>Key to preventing the spread of covid-19</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            </div>

        );
    }
}