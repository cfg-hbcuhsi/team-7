import React from "react";
import NavBar from "../components/NavBar";
import Carousel from "../components/Carousel";
import BoxDesc from "../components/BoxDesc";
<<<<<<< HEAD
import Mission from "../components/Mission";
import { Row, Container, Col, Card } from "react-bootstrap";
=======
import { Row, Container, Col, Card, Button } from "react-bootstrap";

>>>>>>> 0a9dbb1037632ab93ff41b83e0dc3425bded3202

export default function IndexPage() {
  return (
    <>
      <NavBar />
      <Container>
        <Row>
          <Carousel />
<<<<<<< HEAD
          <Mission />
          <BoxDesc />
=======
        </Row>
        <BoxDesc />
        <Row>
          <Col xs={12} md={6} className="my-auto text-center">
            <h4>
              The chart is based upon the{" "}
              <a href="https://www.bls.gov/careeroutlook/2018/data-on-display/education-pays.htm">
                'U.S. Bureau of Labor Stastics'
              </a>{" "}
              research numbers which showcases the median weekly earnings in
              2017 for those with the highest levels of educational attainment
              crossed by unemployment rates for that educational level. The
              chart is a true showcase of the statement more you learn, the more
              you earn.
            </h4>
          </Col>
          <Col className="mx-auto" xs={12} md={6}>
            <img
              src="/img/graph.jpg"
              alt="Eat Learn Play"
              className="img-fluid mt-3"
              style={{ width: "100%" }}
            />
          </Col>
        </Row>
        <Row>
          <img
            src="/img/elp.jpg"
            alt="Eat Learn Play"
            className="img-fluid mt-5"
            style={{ width: "100%" }}
          />
        </Row>
        <Row>
          <h1 className="mx-auto mt-3" style={{ fontFamily: "Arial" }}>
            Their Mission:
          </h1>
>>>>>>> 0a9dbb1037632ab93ff41b83e0dc3425bded3202
        </Row>
        <Row>
          <h4 style={{ fontFamily: "Arial" }} className="text-center mb-5">
            Stephen and Ayesha Curry’s Eat. Learn. Play. Foundation is committed
            to unlocking the amazing potential of every child by fighting to end
            childhood hunger, ensuring students have access to a quality
            education, and providing safe places for all children to play and be
            active.
          </h4>
        </Row>
      </Container>
    </>
  );
}
