import { useState } from 'react';

export default function Event3() {
  const [score, setScore] = useState(0);

  function increment() {
    setScore(score + 1);
    console.log(score);
  }

  return (
    <>
      <button onClick={() => increment()}>+1</button>
      <button onClick={() => {
        increment();
        increment();
        increment();
      }}>+3</button>
      <h1>Score: {score}</h1>
    </>
  )
}
