import React from "react";

function Greet(props) {
  const { name,id,children } = props;
  console.log(props)
  return (
    <div >
      <h1>My name is {name} id is {id}</h1>
      {children}
    </div>
  );
}
export default Greet;
