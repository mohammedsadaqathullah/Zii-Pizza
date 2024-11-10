import { Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Tandoori from './tandoori.jpg'
import Paneer from './paneer.jpg'
import Cheese from './cheese.jpg'
import Bread from './bread.jpg'
import Paratha from './paratha.jpg'
import Tawa from './tawa.jpg'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

const PizzaCard = () => {
    const [modalShow, setModalShow] = useState(false);

    function MyVerticallyCenteredModal(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Message
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <span className='text-success fw-bold'>
                        Added Successfully
                    </span> <i class="bi bi-basket"></i>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide} id='btn'>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }

    return (
        <>
            <Row className='mx-4' id='shad'>
                <Col md={6} lg={4} className='mt-3 text-center'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Tandoori} />
                        <Card.Body>
                            <Card.Title>Tandoori chicken pizza</Card.Title>
                            <Card.Text>
                                A flavorful and spicy pizza that captures the essence of Indian cuisine
                            </Card.Text>
                            <Button id="btn" onClick={() => setModalShow(true)}>Add to Basket</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} className='mt-3 text-center'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Paneer} />
                        <Card.Body>
                            <Card.Title>Paneer pizza</Card.Title>
                            <Card.Text>
                                A popular vegetarian pizza topping made from soft cubes of cottage cheese
                            </Card.Text>
                            <div className="text-center">
                                <Button id="btn" onClick={() => setModalShow(true)}>Add to Basket</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} className='mt-3 text-center'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Cheese} />
                        <Card.Body>
                            <Card.Title>Cheese pizza</Card.Title>
                            <Card.Text>
                                A classic pizza with a crispy crust and melted cheese
                            </Card.Text>
                            <div className="text-center">
                                <Button id="btn" onClick={() => setModalShow(true)}>Add to Basket</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} className='mt-3 mb-3 text-center'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Bread} />
                        <Card.Body>
                            <Card.Title>Bread pizza</Card.Title>
                            <Card.Text>
                                Also known as pizza bread, this pizza is made with bread instead of pizza dough
                            </Card.Text>
                            <Button id="btn" onClick={() => setModalShow(true)}>Add to Basket</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} className='mt-3 mb-3 text-center'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Paratha} />
                        <Card.Body>
                            <Card.Title>Pizza paratha</Card.Title>
                            <Card.Text>
                                An Indian pizza that can be made without an oven
                            </Card.Text>
                            <div className="text-center">
                                <Button id="btn" onClick={() => setModalShow(true)}>Add to Basket</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} className='mt-3 mb-3 text-center'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Tawa} />
                        <Card.Body>
                            <Card.Title>Indian tawa pizza</Card.Title>
                            <Card.Text>
                                Pizza made by topping thick flat rolled dough with sauces, veggies & cheese and cooked like paratha in a tawa.
                            </Card.Text>
                            <div className="text-center">
                                <Button id="btn" onClick={() => setModalShow(true)}>Add to Basket</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />

        </>
    )
}

export default PizzaCard