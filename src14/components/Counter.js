import React, { useState } from 'react';
import CardBody from './CardBody';

// TODO: Add a comment explaining what export default does
// exports the function so it can be used in other folders
export default function Counter() {
  // TODO: Add a comment that explains how the useState hook works
  // lets us set up the count starting at 0
  const [count, setCount] = useState(0);

  // TODO: Explain what is happening with this click handler
  // takes our count number and increments by 1 
  const handleIncrement = () => {
    setCount((count + 1));
  };

  // TODO: Explain what is happening with this click handler
  // count - 1 is decreasing the count by 1 
  const handleDecrement = () => {
    setCount((count - 1));
  };

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">Click Counter!</div>
      {/* TODO: Add a comment that explains what props are getting passed to CardBody */}
      <CardBody
        count={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    </div>
  );
}
