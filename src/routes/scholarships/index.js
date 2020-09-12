import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import { Row, Container, Col, Card } from "react-bootstrap";
import ScholarshipCard from "../../components/ScholarshipCard";
import Scholarship from "../../json/scholarships.json";

const buildArray = async (scholarships) => {
  let arr = [];
  let currArr = [];
  scholarships.forEach((obj, index) => {
    if (index % 3 === 0) {
      if (currArr.length !== 0) arr.push(currArr);
      currArr = [];
    }
    currArr.push(obj);
  });
  return arr;
};
export default function Careers() {
  const [scholarships, setScholarships] = useState([]);
  useEffect(() => {
    buildArray(Scholarship).then((arr) => setScholarships(arr));
  }, []);
  return (
    <>
      <NavBar />
      <Container style={{ width: "100%" }}>
          {scholarships.map((obj) => {
            return (
              <Row className="mt-5">
                <Col key={`col-${obj[0].ID}`} xs={12} sm={4} className="mr-0">
                  <ScholarshipCard
                    key={obj[0].ID}
                    name={obj[0].Name}
                    description={obj[0].Description}
                    link={obj[0].URL}
                    picture={obj[0].Picture}
                    amount={obj[0].Amount}
                    id={obj[0].ID}
                  />
                </Col>
                <Col key={`col-${obj[1].ID}`} xs={12} sm={4} className="ml-0">
                  <ScholarshipCard
                    key={obj[1].ID}
                    name={obj[1].Name}
                    description={obj[1].Description}
                    link={obj[1].URL}
                    picture={obj[1].Picture}
                    amount={obj[1].Amount}
                    id={obj[1].ID}
                  />
                </Col>
                <Col key={`col-${obj[2].ID}`} xs={12} sm={4} className="ml-0">
                  <ScholarshipCard
                    key={obj[2].ID}
                    name={obj[2].Name}
                    description={obj[2].Description}
                    link={obj[2].URL}
                    picture={obj[2].Picture}
                    amount={obj[2].Amount}
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
