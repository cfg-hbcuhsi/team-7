import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import { Row, Container, Col, Card } from "react-bootstrap";
import JobCard from "../../components/JobCard";
import Job from "../../json/jobs.json";

const buildArray = async (jobs) => {
  let arr = [];
  let currArr = [];
  jobs.forEach((obj, index) => {
    if (index % 3 === 0) {
      if (currArr.length !== 0) arr.push(currArr);
      currArr = [];
    }
    currArr.push(obj);
  });
  return arr;
};
export default function Careers() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    buildArray(Job).then((arr) => setJobs(arr));
  }, []);
  return (
    <>
      <NavBar />
      <Container style={{ width: "100%" }}>
        {jobs.map((obj) => {
          return (
            <Row>
              <Col key={`col-${obj[0].ID}`} sm={4} className="mr-0">
                <JobCard
                  key={obj[0].ID}
                  name={obj[0].Name}
                  salary={`${obj[0].Salary}`}
                  description={obj[0].Description}
                  link={obj[0].Link}
                  picture={obj[0].Picture}
                  id={obj[0].ID}
                />
              </Col>
              <Col key={`col-${obj[1].ID}`} sm={4} className="ml-0">
                <JobCard
                  key={obj[1].ID}
                  name={obj[1].Name}
                  salary={`${obj[1].Salary}`}
                  description={obj[1].Description}
                  link={obj[1].Link}
                  picture={obj[1].Picture}
                  id={obj[1].ID}
                />
              </Col>
              <Col key={`col-${obj[2].ID}`} sm={4} className="ml-0">
                <JobCard
                  key={obj[2].ID}
                  name={obj[2].Name}
                  salary={`${obj[2].Salary}`}
                  description={obj[2].Description}
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
