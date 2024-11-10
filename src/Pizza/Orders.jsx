
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

const Orders = () => {
    return (
        <ListGroup as="ol" numbered>
            <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
            >
                <div className="ms-2 me-auto">
                    <div className="fw-bold">Tandoori Pizza</div>
                    Bovonto 1/2 ltr
                </div>
                <Badge bg="danger" pill>
                    3
                </Badge>
            </ListGroup.Item>
            <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
            >
                <div className="ms-2 me-auto">
                    <div className="fw-bold">Cheese Pizza</div>
                    Extra cheese
                </div>
                <Badge bg='danger' pill>
                    1
                </Badge>
            </ListGroup.Item>
            <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
            >
                <div className="ms-2 me-auto">
                    <div className="fw-bold">Butter Chicken Pizza</div>
                    For Gift
                </div>
                <Badge bg="danger" pill>
                    2
                </Badge>
            </ListGroup.Item>
        </ListGroup>
    )
}

export default Orders