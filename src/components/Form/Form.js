import { useState } from "react";

const Form = () => {
  const [value, setValue] = useState("");
  const [text, setText] = useState("");

  const alertUser = (e) => {
    alert(`Submitted ${e.target.value}`);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const logValue = (e) => {
    setText(e.target.value);
    console.log(text + e.target.value);
  };

  return (
    <>
      <form onSubmit={alertUser}>
        <label> Name :</label>
        <input type="text" value={value} onChange={handleChange} />
        {/* <input type="submit" value="Submit" onClick={alertUser} /> */}
        <textarea value={text} onChange={logValue} />
        <div>{text}</div>
        <select multiple={true} value={["B", "D"]}>
          <option value="B">Bee</option>
          <option value="C">See</option>
          <option value="D">Sad</option>
        </select>
      </form>
    </>
  );
};

export default Form;
