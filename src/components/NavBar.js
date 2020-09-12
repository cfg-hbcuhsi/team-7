import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
export default function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Seven Wonders of the World</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#scholarships">Scholarships</Nav.Link>
          <Nav.Link href="#colleges">Colleges</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    </>
  );
}
