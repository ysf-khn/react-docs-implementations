import "./App.css";

import Home from "./components/Home/Home";
import Form from "./components/Form/Form";

function App() {
  return (
    <div className="App">
      <Home user="Yusuf" />
      <Form />
    </div>
  );
}

export default App;
