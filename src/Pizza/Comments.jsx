import { Container, Row, Col, Form, InputGroup, FloatingLabel } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
function Comments() {
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            This is Example Site
        </Tooltip>
    );
    return (
        <section id="contactus" className=" py-3">
            <div className="text-center my-2 py-3">
                <h2 id='logo' className='py-3'>Comments <i class="bi bi-chat-left-heart"></i></h2>
            </div>
            <Container>
                <Row className='justify-content-center'>
                    <Col md={6}>
                        <Form>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1"><i class="bi bi-envelope-heart"></i></InputGroup.Text>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Email address"

                                >
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </FloatingLabel>
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1"><i class="bi bi-person-fill"></i></InputGroup.Text>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Name"

                                >
                                    <Form.Control type="text" placeholder="Name" />
                                </FloatingLabel>
                            </InputGroup>
                            <FloatingLabel
                                controlId="floatingTextarea"
                                label="Comments"
                                className="mb-3"
                            >
                                <Form.Control as="textarea" placeholder="Leave a comment here" />
                            </FloatingLabel>
                            <div ><OverlayTrigger
                                placement="right"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip}
                            >
                                <Button id='center' >Post</Button>
                            </OverlayTrigger>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}
export default Comments