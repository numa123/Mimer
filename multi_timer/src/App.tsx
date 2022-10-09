import React from "react";
import "./App.css";
import Timer from "./Timer";
import Timer2 from "./conponents/Timer2";
import Timer3 from "./conponents/Timer3";
import Timer4 from "./conponents/Timer4";
import Timer5 from "./conponents/Timer5";
import Timer6 from "./conponents/Timer6";

function App() {
  return (
    <div className="text-center">
      <div className="logoText">
        <h1 className="text-5xl mt-10 text-yellow-900">Mimer</h1>
      </div>
      <div
        className="w-90%  p-9 ml-auto mr-auto rounded-2xl text-center"
        style={{ width: "95vw",}}
      >
        <div
          className="App"
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: "6px",
          }}
        >
          <div>
            <Timer />
            <Timer2 />
          </div>

          <div>
            <Timer3 />
            <Timer4 />
          </div>
          <div>
            <Timer5 />
            <Timer6 />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
