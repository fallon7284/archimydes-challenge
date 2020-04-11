import React from "react";

export default ({ message, close }) => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        position: "fixed",
        zIndex: 1000,
        background: "black",
        opacity: 0.4
      }}
    >
      <div
        onClick={() => close()}
        style={{
          height: "30vh",
          width: "30vw",
          background: "white",
          opacity: 1,
          color: "red",
          fontSize: "3em",
          position: "fixed",
          zIndex: 1001,
          transform: "translate(35vw, 35vh)"
        }}
      >
        {message}
      </div>
    </div>
  );
};
