// import React from 'react';
// import { Carousel } from 'react-bootstrap';
// import slider1 from '../assets/slider1.jpg'

// const HomePage = () => {
//     return (
//         <div className="homepage">
//             <div className="container-fluid">
//                 <div className="row">
//                     <Carousel>
//                         <Carousel.Item>
//                             <img
//                                 className="d-block w-100 h-50"
//                                 src={slider1}
//                                 alt="First slide"
//                             />
//                         </Carousel.Item>
//                         <Carousel.Item>
//                             <img
//                                 className="d-block w-100"
//                                 src="https://www.medingers.com/assets/img/home/slider02.webp"
//                                 alt="Second slide"
//                             />
//                         </Carousel.Item>
//                     </Carousel>
//                 </div>
//             </div>

//         </div>
//     );
// };

// export default HomePage;


import React from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from '../assets/slider1.jpg';
import slider2 from '../assets/slider2.jpg';
import doctorImg from '../assets/pexels-kampus-8949835.jpg';
import emergency from '../assets/Emergency.jpg';
import Consultations from '../assets/pexels-shvetsa-4225920.jpg';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="homepage">
            <Carousel className="hero-carousel">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider1}
                        alt="Welcome to our Clinic"
                        loading="lazy"
                    />
                    <Carousel.Caption>
                        <h1>Welcome to our Clinic</h1>
                        <p>Providing quality healthcare for you and your family</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider2}
                        alt="State-of-the-art Facilities"
                        loading="lazy"
                    />
                    <Carousel.Caption>
                        <h1>State-of-the-art Facilities</h1>
                        <p>Experience modern healthcare technology</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <section className="services">
                <h2 className="text-center mb-4">Our Services</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="service-item">
                                <img src={doctorImg} alt="Expert Doctors" />
                                <h3>Expert Doctors</h3>
                                <p>Our team of experienced physicians is here to help you.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-item">
                                <img src={emergency} alt="Emergency Care" />
                                <h3>Emergency Care</h3>
                                <p>24/7 emergency services for your peace of mind.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="service-item">
                                <img src={Consultations} alt="Online Consultations" />
                                <h3>Online Consultations</h3>
                                <p>Get medical advice from the comfort of your home.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
