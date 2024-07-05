import React, { useEffect, useRef, useState } from "react";
import * as esbuild from "esbuild-wasm";

export default function App() {
  let ref = useRef<any>();
  const [text, setText] = useState("");
  const [code, setCode] = useState("");

  async function handelClick() {

  
    
    if (!ref.current) {
      return;
    }

    const result = await ref.current.transform(text, {
      loader: "jsx",
      target: "es2015",
    });

    console.log(result);
    
    setCode(result.code);
  }

  async function startService() {
    ref.current = await esbuild.startService({
      worker: true,
      wasmURL: "/esbuild.wasm",
    });
  }
  useEffect(() => {
    startService();
  }, []);
  return (
    <div>
      <textarea value={text} onChange={(e) => {setText(e.target.value)}}></textarea>
      <button onClick={handelClick}>Submit</button>
      <pre>{code}</pre>
    </div>
  );
}
