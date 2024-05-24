import { useState } from "react";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    username: "vijay singh diggi",
    age: 26
  }

  let newArray = [
    1, 2, 3, 4
  ]

  return (
    <>
      <h1 className="bg-green-400 text-black p4 rounded-xl">Tailwind Test</h1>
      <Card username="chai aur Code"/>
      <Card username="hitesh" btnText = "click me"/>
      <Card username="vijay" btnText=" visit me"/>
     
    </>
  );
}

export default App;
