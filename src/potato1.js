// 리액트는 component랑 함께 동작한다. 모든것은 component이다.
// index.js에 ReactDom.render()안에를 보면
// <>로 되어있는 것들이 전부 컴포넌트이다.

// 컴포넌트는  HTML를 반환하는 함수(function)이다.
// js에서 HTML을 이러한 방식으로 사용하는 것을 jsx라고 부른다.
// 이러한 jsx는 react에만 있는 유일한 개념이다.  <APP /> 이렇게 component를 사용한다.

// 컴포넌트를 만드는 법 :
// 1) js파일을 만든다
// 2) component를 작성할 때 마다 import React from "react"를 써준다.
// 이것을 하지 않으면 react는 여기에 jsx가 있는 component를 사용하는 것을 이해하지 못한다.

import React from "react";
//react를 import해주고
function Potato() {
  return <h3>I love potato</h3>;
} //이렇게 함수로 html을 return해주면 component생성이 완료된다.

export default Potato;
//이 컴포넌트를 다른데서 사용할 수 있게 해주려면 export해주면 됨
//그리고 사용할 js파일에 가서 import해주고 <>로 작성해주면 됨
// index.js에는 <APP /><Potato /> 이렇게 되어있는데 실행을 누르면 실행되지 않는다.
//react application이 하나의 component만 rendertin하기 때문에 인접한 jsx요소를 가지게 하지 않기 때문임
//그래서 실행을 하게 되면 오류가 날 수 밖에 없다.
//이러한 문제점을 해결하기 위해서
//Potato를 App안에 넣어주면 됨 그리고 App에서 Potato를 사용하면 됨
//HTML이 적힌 JSX에 </>로 component를 사용해주면 된다.
//이렇게 하면 react는 component를 가져와서 browser가 이해할 수 있는 평범한 HTML로 만든다.
//중요한 것은 react application은 한번에 하나의 component만 rendering할 수 있다는 것이다.
//따라서 모든 것은 application으로 사용할 파일에 들어가야한다.(보통 App.js)
//application안에서 많은 component를 넣을 수 있다.
