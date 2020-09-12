import React from "react";
import NavBar from "../../components/NavBar";
import { Row, Container, Col } from "react-bootstrap";
import "./colleges.css";

export default function IndexPage() {
  return (
    <>
      <NavBar />
      {/*
        Insert HTML/React code below this
        */}
      <p>test</p>
      <div class="container">
        <div>
          <img src="img/ucla.jpg" alt="CollegeImage" id="college-image" />
        </div>

        <h1 id="college-name"> The University of California, Los Angeles </h1>
        <br />
        <p id="college-location">Los Angeles, CA</p>
        <a href="ucla.edu" id="college-link">
          ucla.com
        </a>
        <hr />

        <h4 class="small-headers"> About </h4>
        <p>
          The University of California, Los Angeles is a public research
          university in Los Angeles, California. UCLA traces its early origins
          back to 1882 as the southern branch of the California State Normal
          School. It became the Southern Branch of the University of California
          in 1919, making it the second-oldest of the 10-campus University of
          California system.
        </p>

        <h4 class="small-headers"> Avg Attendance Cost </h4>
        <p id="college-cost">14k - 35k</p>

        <h4 class="small-headers"> Scholarships </h4>
        <a href="#" class="college-scholarships">
          Scholarship 1
        </a>
        <a href="#" class="college-scholarships">
          Scholarship 2
        </a>

        <br />
      </div>
    </>
  );
}
