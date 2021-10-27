const Counter = ({ count, inc, dec }) => {
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={inc}>Increase</button>
      <button onClick={dec}>Decrease</button>
    </div>
  );
};

export default Counter;
