import React from "react";
import "./Card.css";

function Card({ color, icon, value, title, subtitle }) {
  return (
    <div className={`card card-${color}`}>
      <div className="card-content">
        <div className="card-value">{value}</div>
        <div className="card-icon">{icon}</div>
      </div>
      <div className="card-title">{title}</div>
      <div className="card-subtitle">{subtitle}</div>
    </div>
  );
}

export default Card; 