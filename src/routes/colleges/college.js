import React, { useState, useEffect} from "react";
import NavBar from "../../components/NavBar";
import { Row, Container, Col } from "react-bootstrap";
import PropTypes from 'prop-types';
import { useParams } from "react-router-dom";
import Colleges from "../../json/colleges.json"
import "./colleges.css";

//function that grabs the object with the same ID
const getJsonObject = async (id) => {
  let toReturn;
  id = parseInt(id);
  console.log(id)
  Colleges.forEach((obj) => {
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
  console.log(obj);
  return (
    <>
      <NavBar />
      {/*
        Insert HTML/React code below this
        */}
      <Container>
        <div>
          <img src={obj.Picture == null ? "" : obj.Picture} alt="CollegeImage" id="college-image" />
        </div>

        <h1 id="college-name"> {obj.Name == null ? "" : obj.Name} </h1>
        <br />
        <p id="college-location">{obj.Location == null ? "" :obj.Location}</p>
        <a href={obj.Link == null ? "" :obj.Link} id="college-link">
          {obj.Link == null ? "" : obj.Link}
        </a>
        <hr />

        <h4 class="small-headers"> About </h4>
        <p>
          {obj.About == null ? ""  : obj.About}
        </p>

        <h4 class="small-headers"> Avg Attendance Cost </h4>
        <p id="college-cost">{obj.Cost == null ? "" : obj.Cost[0] == null ? "" : obj.Cost[0]}</p>
        <p id="college-cost">{obj.Cost == null ? "" : obj.Cost[1] == null ? "" : obj.Cost[1]}</p>

        <h4 class="small-headers"> Scholarships </h4>
        <a href="#" class="college-scholarships">
          Scholarship 1
        </a>
        <a href="#" class="college-scholarships">
          Scholarship 2
        </a>

        <br />
      </Container>
    </>
  );
}
IndexPage.propTypes = {
  picture: PropTypes.string,

}