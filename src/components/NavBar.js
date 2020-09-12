import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import ChatBot from "../components/Chatbot";

export default function App() {
  let history = useHistory();

  const home = () => {
    history.push("/");
  };
  const scholarships = () => {
    history.push("/scholarships");
  };
  const colleges = () => {
    history.push("/colleges");
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="/">Seven Wonders of the World</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/scholarships">Scholarships</Nav.Link>
          <Nav.Link href="/colleges">Colleges</Nav.Link>
          <Nav.Link href="/careers">Careers</Nav.Link>
          <Nav.Link href="/chatbot">Chatbot</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
      <ChatBot />
    </>
  );
}
