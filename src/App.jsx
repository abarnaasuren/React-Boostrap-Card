import React from "react";
import Navbar from "./Navbar";
// import { Link } from "react-router-dom";
import "./App";
const cardData = [
  {
    title: "Programming Language",
    image: "/cyber/pl.JPG",
    description:
      "A programming language is a way for programmers (developers) to communicate with computers",
    program: "All Program"

  },
  {
    title:
      "JAVA",
    image: "/cyber/java.JPG",
    description:
      "Java is a popular programming language, created in 19955",
    program: "Java"
  },
  {
    title: "Python",
    image: "/cyber/python.JPG",
    description:
      "Python is a popular programming language. It was created by Guido van Rossum, and released in 1991.",
    program: "Python",
    
  },
  {
    title: "JavaScript",
    image: "/cyber/js.JPG",
    description:
      "JavaScript is the world's most popular programming language.",
    program: "JavaScript"
  },
  {
    title:
      "React",
    image: "/cyber/react.JPG",
    description:
      "React is a JavaScript library for building user interfaces.",
    program: "React"
  },
  {
    title: "PHP",
    image: "/cyber/php.JPG",
    description:
      "A popular general-purpose scripting language that is especially suited to web development.",
    program: "PHP"
  },
];

export default function App() {
  return (
    <div className="bg-dark">
      <Navbar />
      <div className="container">
        <div className="row g-4 row-cols-1 row-cols-md-2 row-cols-lg-3">
          {cardData.map((card, index) => (
            <div className="col-lg col-md-6" key={index}>
              <div className="card h-100">
                <div>
                  <img
                    src={card.image}
                    className="card-img-top"
                    alt="swasticblog"
                  />
                </div>
                <div className="card-body mt-2">
                  <h5
                    className="card-title"
                    style={{
                      fontSize: "21px",
                      lineHeight: "21px",
                      fontWeight: "400",
                      fontFamily: "sans-serif",
                    }}
                  >
                    {card.title}
                  </h5>
                  <p
                    className="card-text text-secondary"
                    style={{ fontSize: "14px" }}
                  >
                    {card.description}
                  </p>
                  <p
                    style={{
                      color: "#007dfe",
                      fontWeight: "bold",
                      fontSize: "12px",
                      lineHeight: "12px",
                    }}
                  >
                    READ MORE »
                  </p>
                </div>
                <div
                  className="card-footer bg-secondary"
                  style={{ lineHeight: "15px" }}
                >
                  <small className="text-white d-inline-flex w-100 text-align-left">
                    {card.date}{" "}
                    <ul>
                      <li>{card.comments}</li>
                    </ul>
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
