import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import { Row, Container, Col, Card } from "react-bootstrap";
import CollegeCard from "../../components/CollegeCard";
import College from "../../json/colleges.json";

const buildArray = async (colleges) => {
  let arr = [];
  let currArr = [];
  colleges.forEach((obj, index) => {
    if (index % 3 === 0) {
      if (currArr.length !== 0) arr.push(currArr);
      currArr = [];
    }
    currArr.push(obj);
  });
  return arr;
};
export default function Careers() {
  const [colleges, setColleges] = useState([]);
  console.log(colleges);
  useEffect(() => {
    buildArray(College).then((arr) => setColleges(arr));
  }, []);
  return (
    <>
      <NavBar />
      <Container style={{ width: "100%" }}>
        <div className="mt-5">
          {colleges.map((obj) => {
            return (
              <Row style={{ margin: "10px" }}>
                <Col key={`col-${obj[0].ID}`} xs={12} sm={4} className="mr-0">
                  <CollegeCard
                    key={obj[0].ID}
                    name={obj[0].Name}
                    about={obj[0].About}
                    link={obj[0].Link}
                    picture={obj[0].Picture}
                    cost={obj[0].Cost}
                    location={obj[0].Location}
                    id={obj[0].ID}
                  />
                </Col>
                <Col key={`col-${obj[1].ID}`} xs={12} sm={4} className="ml-0">
                  <CollegeCard
                    key={obj[1].ID}
                    name={obj[1].Name}
                    about={obj[1].About}
                    link={obj[1].Link}
                    picture={obj[1].Picture}
                    cost={obj[1].Cost}
                    location={obj[1].Location}
                    id={obj[1].ID}
                  />
                </Col>
                <Col key={`col-${obj[2].ID}`} xs={12} sm={4} className="ml-0">
                  <CollegeCard
                    key={obj[2].ID}
                    name={obj[2].Name}
                    about={obj[2].About}
                    link={obj[2].Link}
                    picture={obj[2].Picture}
                    cost={obj[2].Cost}
                    location={obj[2].Location}
                    id={obj[2].ID}
                  />
                </Col>
              </Row>
            );
          })}
        </div>
      </Container>
    </>
  );
}
