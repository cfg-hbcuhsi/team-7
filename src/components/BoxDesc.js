import React from "react";
import { Card, Button, CardDeck } from "react-bootstrap";

function BoxDesc() {
  return (
    <Card className="mx-auto mt-2" border="light">
      <Card.Header className="text-center" as="h1">
        Explore and learn below!
      </Card.Header>
      <CardDeck className="mx-auto mt-2">
        <Card style={{ width: "18rem" }} border="info">
          <Card.Body>
            <i className="fas fa-money-bill-wave fa-4x d-block text-center"></i>
            <Card.Title className="text-center">Scholarships</Card.Title>
            <Card.Text className="text-center">
              Want to learn more about how to make college affordable? Click
              below!
            </Card.Text>
            <a href="/scholarships">
              <Button
                variant="primary"
                className="mx-auto text-center"
                style={{ display: "block" }}
              >
                Learn More!
              </Button>
            </a>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} border="success">
          <Card.Body>
            <i className="fas fa-graduation-cap fa-4x d-block text-center"></i>
            <Card.Title className="text-center">Colleges</Card.Title>
            <Card.Text className="text-center">
              Know you want to go to college, but unsure about your dream
              school? Click below!
            </Card.Text>
            <a href="/colleges">
              <Button
                variant="primary"
                className="mx-auto"
                style={{ display: "block" }}
              >
                Learn More!
              </Button>
            </a>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} border="secondary">
          <Card.Body>
            <i className="fas fa-briefcase fa-4x d-block text-center"></i>
            <Card.Title className="text-center">Careers</Card.Title>
            <Card.Text className="text-center">
              Unsure about what you want to do later in life? That's alright!
              Click below to learn more.
            </Card.Text>
            <a href="/careers">
              <Button
                variant="primary"
                className="mx-auto"
                style={{ display: "block" }}
              >
                Learn More!
              </Button>
            </a>
          </Card.Body>
        </Card>
      </CardDeck>
    </Card>
  );
}

export default BoxDesc;
