import React from 'react';
import ChatBot from "react-simple-chatbot";

export default function App() {
  return (
    <ChatBot
    floating={true}
    opened={window.location.href.charAt(window.location.href.length-1) === '/' ? true : false}
      steps={[
        {
          id: "1",
          message: "What is your name? ",
          trigger: "name",
        },
        {
          id: "name",
          user: true,
          trigger: "2",
        },
        {
          id: "2",
          //user: true,
          message:
            "Hi {previousValue}! What was your favorite class in highschool?",

          trigger: "class",
        },
        {
          id: "class",
          options: [
            { value: "math", label: "Math", trigger: "5" },
            { value: "economics", label: "Economics", trigger: "wrong" },
          ],
        },
        {
          id: "5",
          message:
            "Awesome! \n\n Do you prefer real world applications of math or theoretical? ",
          trigger: "apps",
        },
        {
          id: "apps",
          user: true,
          trigger: "7",
          validator: (value) => {
            if (value === "real world applications") {
              return true;
            }
          },
        },
        {
          id: "7",
          message: "Do you prefer working indoors or outdoors?",
          trigger: "place",
        },
        {
          id: "place",
          options: [
            { value: "indoors", label: "Indoors", trigger: "10" },
            { value: "economics", label: "Outdoors", trigger: "wrong" },
          ],
        },
        {
          id: "10",
          message:
            "So do I! \nDo you see yourself working with money and businesses or with technology and programs?",
          trigger: "work",
        },
        {
          id: "wrong",
          message:
            "For the purpose of this demo, you fucked up. Go back to start",
          trigger: "1",
        },
        {
          id: "work",
          user: true,
          trigger: "final",
          validator: (value) => {
            if (value === "technology") {
              return true;
            }
          },
        },
        {
          id: "final",
          message:
            "Based on your interest you can check out: \nComputer Science!",
          trigger: "final2",
        },
        {
          id: "final2",
          component: (
            <a
              href="https://code.org/files/computer_science_is_foundational.pdf"
              target="_blank"
            >
              Learn more about computer Science
            </a>
          ),
          trigger: "unsure",
          //end: true
        },
        {
          id: "unsure",
          message:
            "Still unsure about Computer Science? Take the following personality quiz if you would like more suggestions! ",
          trigger: "ask2",
        },
        {
          id: "ask2",
          options: [
            { value: "yes", label: "Yes", trigger: "link" },
            { value: "no", label: "No", trigger: "next" },
          ],
        },
        {
          id: "link",
          component: (
            <a
              href="https://www.16personalities.com/free-personality-test"
              target="_blank"
            >
              Myers-Briggs Personality Test
            </a>
          ),
          trigger: "personality",
        },
        {
          id: "personality",
          message: "What personality type did you get? Input your result",
          trigger: "pcheck",
        },
        {
          id: "pcheck",
          user: true,
          trigger: "suggest",
          validator: (value) => {
            if (value === "ENTP") {
              return true;
            }
          },
        },
        {
          id: "suggest",
          message:
            "Possible majors for {previousValue} personality type:  \n\n  Architecture and Engineering, Business, Computer Statistics and Mathematics, Physical Sciences",
          trigger: "next",
        },
        {
          id: "next",
          message:
            "Would you also like to be matched with a mentor with similar interests and experiences? They will be able to guide you in the process and want to be there to help you achieve your higher education goals! ",
          trigger: "ask",
        },
        {
          id: "ask",
          options: [
            { value: "yes", label: "Yes", trigger: "match" },
            { value: "no", label: "No", trigger: "end" },
          ],
        },
        {
          id: "match",
          message:
            "You have been matched with John Doe! Enter an email and soon you will be introduced.",
          trigger: "end",
        },
        {
          id: "end",
          message:
            "Awesome! Expect an email soon connecting you with John. Goodbye. ",
          end: true,
        },
      ]}
    />
  );
}
