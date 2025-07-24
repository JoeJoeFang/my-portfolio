import React from "react";
import "./NameCardTitle.css";

function NameCardTitle({scrollY}) {
  const maxScroll = 1650;
  const rawScale = Math.max(0, 1 - scrollY / maxScroll);
  const scale = Math.max(0.3, rawScale);

  return (
    <div
      className="name-card__title"
    >
      <h1 style={{
        fontSize: `${scale*5}rem`,
      }}>
        Turning Ideas into the
        <br />
        Digital World
      </h1>
      <h3 style={{
        fontSize: `${scale}rem`,
      }}
      >Welcome to Joe's Digital Portfolio</h3>
    </div>
  );
}

export default NameCardTitle;