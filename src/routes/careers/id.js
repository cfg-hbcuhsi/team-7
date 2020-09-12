import React, {useState, useEffect} from "react";
import NavBar from "../../components/NavBar";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Jobs from "../../json/jobs.json";

//function that grabs the object with the same ID
const getJsonObject = async (id) => {
  let toReturn;
  id = parseInt(id);
  Jobs.forEach((obj) => {
    if (obj.ID === id) {console.log("The if statement was true"); toReturn = obj;}
  });
  return toReturn;
};

export default function IndexPage() {
  let { id } = useParams();
  const [obj, setObj] = useState({});
  useEffect(() => {
    getJsonObject(id).then((obj) => setObj(obj));
  }, []);
  return (
    <>
      <NavBar />
      <Container>
        <Row>
          <Col>
            <Row>
              <h1 class="display-4">
                #{obj.ID == undefined ? "" : obj.ID} {obj.Name == undefined ? "" : obj.Name}
              </h1>
            </Row>
            <Row>
              <h3>Median Salary - ${obj.Salary == undefined ? "" : obj.Salary}</h3>
            </Row>
          </Col>
          <Col>
            <Image
              src={obj.Picture == undefined ? "" : obj.Picture}
              thumbnail
            ></Image>
          </Col>
        </Row>
        <Row>
          <h5>What is a {obj.Name == undefined ? "" : obj.Name}?</h5>
        </Row>
        <Row>
          <Col xs={6}>
            <p>
            {obj.Description == undefined ? "" : obj.Description}
            </p>
          </Col>
        </Row>
        <Row>
          <iframe
            width="420"
            height="315"
            src={obj.Link == undefined ? "" : obj.Link}
          ></iframe>
        </Row>
      </Container>
    </>
  );
}
