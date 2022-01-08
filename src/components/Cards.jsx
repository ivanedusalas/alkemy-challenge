import { Fragment } from "react";
import { Button, Card } from "react-bootstrap";

const Cards = (props) => {
  return (
    <Fragment>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Title>{props.alignment}</Card.Title>
          <Card.Title>{props.weight}</Card.Title>
          <Button variant="primary" onClick={props.handleAdd}>
            Add Hero
          </Button>
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default Cards;
