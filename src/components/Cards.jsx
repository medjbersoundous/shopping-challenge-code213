import React from "react";
import "./Card.css";
export default function Cards({ title, text, icon }) {
  return (
    <div className="cards">
      <div className="icon">{icon}</div>
      <h1 className="Title">{title}</h1>
      {text.map((txt) => (
        <p className="desc">{txt}</p>
      ))}
    </div>
  );
}
