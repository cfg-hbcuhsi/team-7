import React from "react";
import NavBar from "../components/NavBar";
import Carousel from "../components/Carousel";
import BoxDesc from "../components/BoxDesc";
import { Row, Container, Col, Card, Button } from "react-bootstrap";
<<<<<<< HEAD
import ChatBot from "../components/Chatbot";
=======
>>>>>>> cd4098da3e7b853202d0a18f928f64f7cd395341

export default function IndexPage() {
  return (
    <>
      <NavBar />
      <Container>
        <Row>
          <Carousel />
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
        <Row>
          <h2 className="mx-auto mt-3" style={{ fontFamily: "Arial" }}>
            CONNECT WITH THEM
          </h2>
        </Row>
        <Row
          style={{
            display: "block",
            textAlign: "center",
            fontSize: "3rem",
          }}
        >
          <a href="https://twitter.com/eatlearnplay" target="_blank">
            <i
              alt="Twitter"
              class="fab fa-twitter"
              style={{ color: "#00BFFF", margin: "20px" }}
            ></i>
          </a>
          <a href="https://www.facebook.com/EatLearnPlay" target="_blank">
            <i
              alt="Facebook"
              class="fab fa-facebook"
              style={{ color: "#3b5998", margin: "20px" }}
            ></i>
          </a>
          <a
            href="https://www.instagram.com/eatlearnplay/?hl=en"
            target="_blank"
          >
            <i
              alt="Instagram"
              class="fab fa-instagram"
              style={{ color: "#FF1493", margin: "20px" }}
            ></i>
          </a>
          <a
            href="https://www.linkedin.com/company/eat-learn-play-foundation/"
            target="_blank"
          >
            <i
              alt="LinkedIn"
              class="fab fa-linkedin"
              style={{ margin: "20px" }}
            ></i>
          </a>
          <a href="https://www.youtube.com/watch?v=PU7n6fZzqFM" target="_blank">
            <i
              alt="Youtube"
              class="fab fa-youtube"
              style={{ color: "red", margin: "20px" }}
            ></i>
          </a>
        </Row>
      </Container>
    </>
  );
}
