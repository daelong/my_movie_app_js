# Movie App

React Js Fundamentals Course

React만 사용할 수는 없음 다른 것들과 같이 써야함


webpack이랑 babel가 있어야하고 react를 컴파일하고 등등 여러 단계를 거쳐야 브라우저가 이해할 수 있음
그런데 create react app으로 react web app 을 준비할 수 있음


react는 내가 쓰는 모든 요소를 생성한다는 것임. 자바스크립트와 함께 그것들을 만들고 그것들을 HTML에 밀어 넣는다. 
index.html을 보면 <div id="root"></div>하고 div안에 아무것도 없는데 react는 이곳에 element를 넣는 역할을 담당한다. 
나의 모든 react application을 div사이에 넣는것이다. 
‌‌index.js에서 ReactDOM.render으로 컴포넌트를 document.getElementById("root")에 밀어 넣는다.
이게 react.js가 동작하는 원리이다. 
따라서 개발자 검사를 해도 index.html에 있는것을 볼 수 있지 component 내부를 볼수는 없다. 
이게 react를 빠르게 할 수 있는 원리이다. react는 소스코드에 처음부터 HTML을 넣지 않고, HTML에서 HTML을 추가하거나 제거하는 법으로 작동한다. 

application이 index.html을 로드할 때 빈 HTML을 로드하게 되고 react가 HTML을 밀어넣는다. 내가 component에 작성해 뒀던 것들을
이것이 바로 virtual DOM이다. 소스코드에는 존재하지 않는 것

js파일을 따로 만들지 않아도 함수로 만들어서 component를 사용할 수도 있음
component에 정보를 보낼 수 있다, component를 계속 반복해서 사용할 수 있다. 
-> component에서 component로 children component로 정보를 보내어서 사용
application에서 children component에 정보를 보내고 정보를 받은 children component에서 그 정보를 사용한다. 

ex) <Food />라는 children component에 
<Food fav="kimchi" something={true} papapapa={["hello", 1, 2, 3, 4, true]}  />하고 넣어주면
Food component에서 이것들을 객체로 만들어서 인자로 받음 
그냥 인자로 받으면 넘기는 정보들이 다 넘어오는데 {fav}이런식으로 받으면 fav의 정보만 받을 수 있음

컴포넌트는 대문자로 시작해야함
jsx에 {}안에 자바스크립트 사용 가능 

map은 배열안의 것들에 하나씩 접근함, 안에 함수를 넣어줄 수도 있음
함수를 넣어주면 배열의 각각의 것들을 함수로 하나씩 넣어줌
react에서 각각의 element들은 key가 필요함 그래서 key를 만들어주는게 react내부에서 사용하기 좋음

부모 컴포넌트로 부터 전달받은 props가 우리가 쓸수 잇는 props인지 알아야함 
이 경우에 list에 모든것을 평가하는 인자을 만들어줘야함 

prop-types : 내가 전달받은 props가 내가 원하는 props인지 확인해 줌
Food.propTypes = {
  name: propTypes.string.isRequired,
  picture: propTypes.string.isRequired,
  rating: propTypes.number.isRequired,
}; 이런식으로 확인할 수 있음
string, number는 type이 string이거나, number여야 한다는 것이고
isRequired는 꼭 있어야한다는 것이다. 
