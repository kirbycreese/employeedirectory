import React from "react";
import "./style.css";

function Subheader() {
  return (
      <div className="subheader">
        <h1>
          <button type="button" className="btn btn-secondary">Sort</button>
          <button type="button" className="btn btn-secondary">Filter</button>
        </h1>
      </div>
    
  );
}

export default Subheader; 