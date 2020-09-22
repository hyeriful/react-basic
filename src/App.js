import React from "react";
// BrowerRouter 와의 차이는 url에 #이 없음. 근데 github pages에 정확히 설정하기가 HashRouter가 좋음.
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Details";
import Navigation from "./components/Navigation";
import "./App.css";

//컴포넌트 Route안에 있는 것은 props가 있음. (-> Navigation은 props가 없음)
function App() {
  //exact는 이거 아니면 렌더링 안한다는 뜻!
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;
