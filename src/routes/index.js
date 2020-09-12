import React from "react";
import NavBar from "../components/NavBar";
import Carousel from "../components/Carousel";
import BoxDesc from "../components/BoxDesc";
import { Row, Container, Col, Card } from "react-bootstrap";
export default function IndexPage() {
  return (
    <>
      <NavBar />
      <Container>
        <Row>
          <Carousel />
          <BoxDesc />
        </Row>
      </Container>
    </>
  );
}
