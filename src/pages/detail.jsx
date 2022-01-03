import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Card, ListGroup } from "react-bootstrap";

const Detail = () => {
  const [heroe, setHeroe] = useState();
  const params = useParams();

  useEffect(() => {
    axios
      .get(
        "https://www.superheroapi.com/api.php/10227761695413006/" + params.id
      )
      .then((res) => {
        setHeroe(res.data);
      });
  }, []);
  

  console.log(heroe);

  const renderCard = () => (
    heroe && (
      <Card style={{ width: "20rem" }}>
        <Card.Header>{heroe.name}</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item></ListGroup.Item>
          <ListGroup.Item>{heroe.appearance.weight[0]}</ListGroup.Item>
          <ListGroup.Item>{heroe.appearance.height[0]}</ListGroup.Item>
          <ListGroup.Item>{heroe.biography.aliases}</ListGroup.Item>
          <ListGroup.Item>{heroe.appearance["eye-color"]}</ListGroup.Item>
          <ListGroup.Item>{heroe.appearance["hair-color"]}</ListGroup.Item>
          <ListGroup.Item>{heroe.work.occupation}</ListGroup.Item>
        </ListGroup>
      </Card>
    )
  )

  return <Fragment>{renderCard()}</Fragment>;
};

export default Detail;
