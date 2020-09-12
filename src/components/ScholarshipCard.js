import React from "react";
import { Card, Button} from "react-bootstrap";
import PropTypes from "prop-types";
import ReactReadMoreReadLess from "react-read-more-read-less";

export default function ScholarshipCard(props) {
    console.log(props);
  return (
    <Card style={{ width: "auto" }} className="p-0 mr-0 ml-0">
      <Card.Img variant="" src={props.picture} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          <ReactReadMoreReadLess
            charLimit={100}
            readMoreText={"Read more ▼"}
            readLessText={"Read less ▲"}
          >
            {props.description}
          </ReactReadMoreReadLess>
        </Card.Text>
        <Card.Text>
            {props.amount}
        </Card.Text>
        <a href={`./scholarships/${props.id}`}>
          <Button variant="primary">See More</Button>
        </a>
      </Card.Body>
    </Card>
  );
}

ScholarshipCard.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  description: PropTypes.string,
  amount: PropTypes.string,
  picture: PropTypes.string,
  link: PropTypes.string,
};
