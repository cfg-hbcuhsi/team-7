import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import ReactReadMoreReadLess from "react-read-more-read-less";

export default function JobCard(props) {
  return (
    <Card style={{ width: "auto" }} className="p-0 mr-0 ml-0">
      <Card.Img variant="" src={props.picture} />
      <Card.Body>
        <Card.Title>
          {props.name} - {props.salary}
        </Card.Title>
        <Card.Text>
          <ReactReadMoreReadLess
            charLimit={100}
            readMoreText={"Read more ▼"}
            readLessText={"Read less ▲"}
          >
            {props.description}
          </ReactReadMoreReadLess>
        </Card.Text>
        <Button variant="primary">See More</Button>
      </Card.Body>
    </Card>
  );
}

JobCard.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  description: PropTypes.string,
  salary: PropTypes.string,
  picture: PropTypes.string,
  link: PropTypes.string,
};
