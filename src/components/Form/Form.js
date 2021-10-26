import { useState } from "react";

const Form = () => {
  const [value, setValue] = useState("Enter");

  const alertUser = () => {
    alert("Submitted");
  };

  return (
    <>
      <form onSubmit={alertUser}>
        <label> Name :</label>
        <input type="text" value={value} />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default Form;
