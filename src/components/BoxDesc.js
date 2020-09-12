import React from "react";
import { Card, Button, CardDeck } from "react-bootstrap";

function BoxDesc() {

  return (
    <CardDeck className="mx-auto mt-2">
        <Card style={{ width: "18rem" }} border="info">
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>Scholarships</Card.Title>
            <Card.Text>
            Want to learn more about how to make college affordable? Click below!
            </Card.Text>
            <Button variant="primary">Learn More!</Button>
        </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} border="success">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
            <Card.Title>Colleges</Card.Title>
            <Card.Text>
                Know you want to go to college, but unsure about your dream school? Click below!
            </Card.Text>
            <Button variant="primary">Learn More!</Button>
            </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} border="secondary">
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Careers</Card.Title>
                <Card.Text>
                Unsure about what you want to do later in life? That's alright! Click below to learn more.
                </Card.Text>
                <Button variant="primary">Learn More!</Button>
            </Card.Body>
            </Card>
      </CardDeck>
  );
}

export default BoxDesc;
