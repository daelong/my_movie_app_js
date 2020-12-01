import React from "react";
import { HashRouter, Route } from "react-router-dom"; // react-router-dom은 여러 종류의 라우터들이 있다. 그중 HashRouter, Route라는걸 쓰는것
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";

function App() {
  //HashRouter를 리턴해주고 HashRouter안에 Route를 넣어줌. Route안에는 렌더링할 스크린과 무엇을 할지를 정하는 prop을 넣어줌
  //Route로 /about경로로 가면 About 컴포넌트를 보여주게됨
  // exact={true}는 라우터가 컴포넌트 두개를 겹쳐서 읽는것을 방지할때 사용, exact={true}가 적힌 route에선 오직 path에 적힌것만 경로 이동할 수 있음
  return (
    <HashRouter>
      <Navigation />
      <Route paht="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie-detail" component={Detail} />
    </HashRouter>
  );
}

export default App;
