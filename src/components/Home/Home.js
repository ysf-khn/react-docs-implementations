import Calculator from "../Calculator/Calculator";

const Home = ({ user }) => {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <>
      <Calculator />
      <div>Hello {user}</div>
      <div>
        {numbers.map((num) => (
          <li key={num.toString()}>{num * 2}</li>
        ))}
      </div>
    </>
  );
};

export default Home;
