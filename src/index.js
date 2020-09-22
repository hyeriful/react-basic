import React from "react"; //component를 작성할 때마다 해주어야 함
import ReactDOM from "react-dom";
import App from "./App";

//component는 html를 반환하는 함수

// react application은 한 번에 하나의 component만 redering할 수 있다
ReactDOM.render(
  //React.StriceMode 문제가 발생하면, 발생된 에러메세지를 바로 출력하는 모드
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
