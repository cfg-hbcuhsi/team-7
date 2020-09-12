import React from "react";
import { Card, Button, CardDeck } from "react-bootstrap";

function BoxDesc() {
  return (
    <Card className="mx-auto mt-2" border="light">
      <Card.Header className="text-center" as="h1">
        Explore and learn below!
      </Card.Header>
      <CardDeck>
        <Card style={{ width: "18rem" }} border="light">
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Scholarships</Card.Title>
            <Card.Text>
              Want to learn more about how to make college affordable? Click
              below!
            </Card.Text>
            <Button variant="primary">Learn More!</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} border="light">
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Colleges</Card.Title>
            <Card.Text>
              Know you want to go to college, but unsure about your dream
              school? Click below!
            </Card.Text>
            <Button variant="primary">Learn More!</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} border="light">
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Careers</Card.Title>
            <Card.Text>
              Unsure about what you want to do later in life? That's alright!
              Click below to learn more.
            </Card.Text>
            <Button variant="primary">Learn More!</Button>
          </Card.Body>
        </Card>
      </CardDeck>
      <Card.Footer></Card.Footer>
    </Card>
  );
}

export default BoxDesc;
