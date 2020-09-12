import React from "react";
import NavBar from "../../components/NavBar";
import { Row, Container, Col, Card } from "react-bootstrap";
import ChatBot from "../../components/Chatbot";

export default function IndexPage() {
  return (
    <>
      <NavBar />
      <ChatBot />
    </>
  );
}
