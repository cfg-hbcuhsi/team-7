import React from "react";
import NavBar from "../components/NavBar";
import Carousel from "../components/Carousel";
import BoxDesc from "../components/BoxDesc";
import Mission from "../components/Mission";
import { Row, Container, Col, Card } from "react-bootstrap";

export default function IndexPage() {
  return (
    <>
      <NavBar />
      <Container>
        <Row>
          <Carousel />
          <Mission />
          <BoxDesc />
        </Row>
        <Row>
        </Row>
      </Container>
    </>
  );
}
