import { Container, Row, Col } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import Numtwo from './numtwo.jpg'
import Numthree from './numthree.jpg'
import Numfour from './numfour.jpg'


export default function Banner() {
    return (
        <Container fluid>
            <Row className="mt-2 justify-content-center align-items-center" id="shad">
                <Col lg={8}>
                    <Carousel data-bs-theme="dark">
                        <Carousel.Item interval={4000}>
                            <img
                                className="d-block w-100"
                                src={Numtwo}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h5 className="fw-bold text-dark " id="btn">"Best pizza, best value"</h5>
                                {/* <p className="d-none d-sm-block text-light">Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={4000}>
                            <img
                                className="d-block w-100"
                                src={Numthree}
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <h5 className="fw-bold text-dark " id="btn">"Fast. Fresh. Delicious."</h5>
                                {/* <p className="d-none d-sm-block text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={4000}>
                            <img
                                className="d-block w-100"
                                src={Numfour}
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h5 className="fw-bold text-dark" id="btn">"Love at first slice"</h5>
                                <p className="d-none d-sm-block text-light">
                                    {/* Praesent commodo cursus magna, vel scelerisque nisl consectetur. */}
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
            <div className="text-center" >
                <p className="display-5 mt-3" id="shad">Pizzas for Every Occasions</p>
                <p className="lead text-muted" id="shad">"People disappoint, but pizza never does."</p>
            </div>
        </Container >
    )
}
