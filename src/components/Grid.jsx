import { Col, Card, ListGroup, Container } from "react-bootstrap";

const Grid = (props) => (
  <Container>
    <Col md="auto">
      <Card style={{ width: "18rem" , marginBottom: "15px"} }>
        <Card.Header>Peso Promedio del Equipo: {props.promedy}</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </Card>
    </Col>
  </Container>
);

export default Grid;
