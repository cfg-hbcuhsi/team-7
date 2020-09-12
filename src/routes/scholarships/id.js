import React, { useState, useEffect} from "react";
import NavBar from "../../components/NavBar";
import { Row, Container, Col } from "react-bootstrap";
import PropTypes from 'prop-types';
import { useParams } from "react-router-dom";
import Scholarships from "../../json/scholarships.json"
import "./colleges.css";

//function that grabs the object with the same ID
const getJsonObject = async (id) => {
  let toReturn;
  id = parseInt(id);
  Scholarships.forEach((obj) => {
    if (obj.ID === id) toReturn = obj
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
      {/*
        Insert HTML/React code below this
        */}
      <Container>
        

        <h1 id="college-name"> {obj.Name == null ? "" : obj.Name} </h1>
        <br />
        <p id="college-location">{obj.Location == null ? "" :obj.Location}</p>
        <a href={obj.Link == null ? "" :obj.Link} id="college-link">
          {obj.Link == null ? "" : obj.Link}
        </a>
        <hr />

        <div>
          <img src={obj.Picture == null ? "" : obj.Picture} alt="CollegeImage" id="college-image" className="mx-auto d-block" />
        </div>

        <h4 class="small-headers"> Description </h4>
        <p className="text-center">
          {obj.Description == null ? ""  : obj.Description}
        </p>

        <h4 class="small-headers"> Award </h4>
        <p id="college-cost">{obj.Amount == null ? "" : obj.Amount}</p>

        <h4 className="text-center"><a href={obj.URL == null ? "" : obj.URL} target="_blank">Apply now</a></h4>

        <br />
      </Container>
    </>
  );
}
IndexPage.propTypes = {
  picture: PropTypes.string,

}