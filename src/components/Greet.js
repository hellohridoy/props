import React from "react";

function Greet(props) {
  const { name } = props;
  return (
    <div className="app">
      <h1>My name is {name}</h1>;
    </div>
  );
}
export default Greet;
