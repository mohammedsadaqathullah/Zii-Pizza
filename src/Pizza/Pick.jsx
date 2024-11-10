import { Container, Row, Col } from 'react-bootstrap'
import { Image, Button } from 'react-bootstrap'
import Center from './center.jpeg'
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { useState } from 'react';

function Pick() {
    const [show, setShow] = useState(false)
    return (
        <section id="musttry" className='my-3'>
            <div className="text-center my-2 py-3">
                <h2 className="display-5 py-3" id='logo' ><i class="bi bi-search-heart"> Pick of the Week!</i></h2>
            </div>
            <Container>
                <Row className='justify-content-center' id='shad'>
                    <Col md={7}>
                        <Image src={Center} fluid={true} alt='pizza'></Image>
                    </Col>
                    <Col md={5}>
                        <div className='d-flex flex-column' >
                            <h2 className="h1 mt-3 text-center" >
                                Butter chicken pizza
                            </h2>
                            <p className="lead text-muted text-center">
                                Famous and spicy Butter chicken pizza !!
                            </p>
                            <Button id='btn' onClick={() => setShow(true)}><i class="bi bi-basket"> Add to basket</i></Button>
                        </div>
                    </Col>
                </Row>
                <ToastContainer
                    className="position-fixed bottom-0 end-0 p-3"
                    position='bottom-end'
                    style={{ zIndex: 1 }}
                >
                    <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                        <Toast.Header closeButton={false}>
                            <img
                                src="holder.js/20x20?text=%20"
                                className="rounded me-2"
                                alt=""
                            />
                            <strong className="me-auto">Added</strong>
                            <small>3seconds ago</small>
                        </Toast.Header>
                        <Toast.Body className='text-success fw-bold bg-light'>Item added to Basket</Toast.Body>
                    </Toast>
                </ToastContainer>
            </Container>
        </section>
    )
}
export default Pick