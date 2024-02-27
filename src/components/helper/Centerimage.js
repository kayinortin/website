import React from "react";

const Centerimage = ({ src }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", marginBottom: "20px" }}
    >
      <img
        src={src}
        alt="center-image"
        width="50%"
        style={{ margin: "0 auto" }}
      />
    </div>
  );
};

export default Centerimage;
