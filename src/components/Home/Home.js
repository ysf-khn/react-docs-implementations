import { useState } from "react";

import Calculator from "../Calculator/Calculator";
import Counter from "../Counter";

const Home = ({ user }) => {
  const numbers = [1, 2, 3, 4, 5];

  const [count, setCount] = useState(0);

  const incrementHandler = () => {
    setCount(count + 1);
  };

  const decrementHandler = () => {
    setCount(count - 1);
  };

  return (
    <>
      <Calculator />
      <div>Hello {user}</div>
      <div>
        {numbers.map((num) => (
          <li key={num.toString()}>{num * 2}</li>
        ))}
      </div>
      <Counter count={count} inc={incrementHandler} dec={decrementHandler} />
      <Counter count={count} inc={incrementHandler} dec={decrementHandler} />
    </>
  );
};

export default Home;
