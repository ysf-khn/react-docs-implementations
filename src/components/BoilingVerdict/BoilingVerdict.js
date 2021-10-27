const BoilingVerdict = ({ celsius, fahrenheit }) => {
  if (celsius >= 100 || fahrenheit >= 212) return <p>The water would boil.</p>;
  else return <p>The water would not boil.</p>;
};

export default BoilingVerdict;
