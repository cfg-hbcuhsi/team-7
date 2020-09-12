import React from "react";
import NavBar from "../../components/NavBar";
import { Container, Row, Col, Image } from "react-bootstrap";


export default function IndexPage() {
    return (
        <>
            <NavBar />
            <Container>
                <Row>
                    <Col>
                        <Row><h1 class="display-4">#1 Software Developer</h1></Row>
                        <Row>
                            <h3>Median Salary - $103,620</h3>
                        </Row>
                    </Col>
                    <Col>
                        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRg4Va7YMqM9loi49RwZubmPd_YluiwiatPeg&usqp=CAU" thumbnail></Image>
                    </Col>
                </Row>
                <Row>
                    <h5>What is a Software Developer?</h5>
                </Row>
                <Row>
                    <Col xs={6}>
                        <p>Software developers invent the technologies we sometimes take for granted. For instance, that app that rings, sings or buzzes you out of a deep sleep every morning? A software developer helped design that. And when you roll into the office and turn on your computer, clicking and scrolling through social media, music and your personal calendar – software developers had a big hand in shaping those, too.</p>
                    </Col>
                </Row>
                <Row>
                    <iframe width="420" height="315"
                        src="https://www.youtube.com/embed/tgbNymZ7vqY">
                    </iframe>
                </Row>
            </Container>
        </>
    );
}
