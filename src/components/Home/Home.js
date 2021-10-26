const Home = ({ user }) => {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <>
      <div>Hello {user}</div>
      <div>
        {numbers.map((num) => (
          <li>{num * 2}</li>
        ))}
      </div>
    </>
  );
};

export default Home;
