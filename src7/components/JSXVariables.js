import React from 'react';

function JSXVariables({name, thoughts} {
  return (
    <div className="main-container">
      <div className="container">
        <div className="p-5 mb-4 bg-light">
          {/* TODO: Add your name variable */}
          <h1>Hi! My name is{props.name}</h1>
          {/* TODO: Add your number of letters variable */}
          <h2>My name has {props.name.length} letters</h2>
          {/* TODO: Add your thoughts variable */}
          <h2>I think React {props.thoughts}</h2>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
