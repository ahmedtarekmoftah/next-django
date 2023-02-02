import React from "react";

export default function Card(props) {
  const style = {
    backgroundColor: props.antiquewhite ? "antiquewhite" : "white",
  };
  const imgStyle = {
    backgroundColor: props.antiquewhite ? "transparent" : "#faebd730",
    position: "absolute",
  };

  return (
    <div
      className="card"
      style={style}
      onClick={() => props.handleClick(props.id)}
    >
      <div className="card-image" style={imgStyle}></div>
      <img src={`images/${props.img}`} alt="asd" className="card-image" />
      <div className="details">
        <div>
          <p>
            <img src="images/Fill 219.svg" alt="" className="card-map-icon" />
            <span>{props.country}</span>
            <a href="google.com" className="card-map-link">
              View on Google Maps
            </a>
          </p>
        </div>
        <h2>{props.co.name}</h2>
        <p className="card-date">{props.date}</p>
        <p className="card-description">{props.description}</p>
      </div>
    </div>
  );
}
