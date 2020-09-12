import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import { Row, Container, Col, Card } from "react-bootstrap";
import CollegeCard from "../../components/CollegeCard";
import College from "../../json/colleges.json";

const buildArray = async (Colleges) => {
  let arr = [];
  let currArr = [];
  Colleges.forEach((obj, index) => {
    if (index % 3 === 0) {
      if (currArr.length !== 0) arr.push(currArr);
      currArr = [];
    }
    currArr.push(obj);
  });
  return arr;
};
export default function Careers() {
  const [Colleges, setColleges] = useState([]);
  useEffect(() => {
    buildArray(College).then((arr) => setColleges(arr));
  }, []);
  return (
    <>
      <NavBar />
      <Container style={{ width: "100%" }}>
        {Colleges.map((obj) => {
          return (
            <Row>
              <Col key={`col-${obj[0].ID}`} sm={4} className="mr-0">
                <CollegeCard
                  key={obj[0].ID}
                  name={obj[0].Name}
                  salary={`$${obj[0].Salary}`}
                  about={obj[0].About}
                  link={obj[0].Link}
                  picture={obj[0].Picture}
                  id={obj[0].ID}
                />
              </Col>
              <Col key={`col-${obj[1].ID}`} sm={4} className="ml-0">
                <CollegeCard
                  key={obj[1].ID}
                  name={obj[1].Name}
                  salary={`$${obj[1].Salary}`}
                  about={obj[1].About}
                  link={obj[1].Link}
                  picture={obj[1].Picture}
                  id={obj[1].ID}
                />
              </Col>
              <Col key={`col-${obj[2].ID}`} sm={4} className="ml-0">
                <CollegeCard
                  key={obj[2].ID}
                  name={obj[2].Name}
                  salary={`$${obj[2].Salary}`}
                  about={obj[2].About}
                  link={obj[2].Link}
                  picture={obj[2].Picture}
                  id={obj[2].ID}
                />
              </Col>
            </Row>
          );
        })}
      </Container>
    </>
  );
}
