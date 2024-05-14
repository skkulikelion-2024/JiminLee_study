import { useEffect, useState } from "react";
import React from "react";

function Hello(){
  useEffect(()=> {
    console.log("created...");
    return () => console.log("destroyed...");
  }, []); // Hello 함수가 실행되지 않을땐, null 값으로서 코드가 destroy되기때문에 useEffect의 dependencies가 없지만,HELLO가 나올때마다 console.log가 실행되는 것
  return <h1>Hello!</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick1 = () => setShowing((prev)=>!prev);
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick2 = () => setValue((prev) => prev +1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time");
  useEffect(()=> {
    console.log("i run only once");
  }, []);
  useEffect(()=>{ 
    console.log("only when keyword changes");
  },[keyword] );
  useEffect(()=>{ 
    console.log("run when keyword & counter changes");
  },[keyword, counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{counter}</h1>
      {showing ? <Hello /> : null} // null은 그냥 코드를 삭제해주는 것(destroy)
      <button onClick={onClick2}>click me</button>
      <button onClick={onClick1}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;