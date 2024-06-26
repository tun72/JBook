import React, { useState } from "react";

export default function App() {
  const [text, setText] = useState();
  const [code, setCode] = useState("");

  function handelClick() {
    console.log(text);
  }
  return (
    <div>
      <textarea value={text} onChange={(e) => e.target.value}></textarea>
      <button onClick={handelClick}>SUbmit</button>
      <pre>{code}</pre>
    </div>
  );
}
