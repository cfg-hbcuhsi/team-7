import React from "react";
import NavBar from "../../components/NavBar";
import { Row, Container, Col, Card } from "react-bootstrap";
import ChatBot from "react-simple-chatbot";

export default function IndexPage() {
  return (
    <>
      <NavBar />
      <ChatBot
        steps={[
          {
            id: "1",
            message: "What is your name?",
            trigger: "2",
          },
          {
            id: "2",
            user: true,
            trigger: "3",
          },
          {
            id: "3",
            message: "Hi {previousValue}, nice to meet you!",
            end: true,
          },
        ]}
      />
    </>
  );
}
