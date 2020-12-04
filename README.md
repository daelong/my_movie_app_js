# Movie App

# <<<<<<< HEAD

React Js Fundamentals Course
npm : nodejs의 의존성과 버전관리, 패키지관리를 위한 패키지 매니저임 
npx : node의 패키지를 실행시키는 하나의 도구, 기본적으로 실행되어야할 패키지가 경로에 있는지 먼저 확인한다. 경로에 제대로 있다면, 그대로 실행한다. 그렇지 않다면 패키지는 설치되어 있지 않다는 걸 의미하고, npx가 최신 버전의 패키지를 설치를 한 후에 실행한다. 설치여부확인 후 설치되어있지 않아도 설치하지 않고 실행만 할 수 도 있다. 그리고 로컬 경로에 있는 패키지를 좀 더 편하게 사용할 수 있다.
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
<Food fav="kimchi" something={true} papapapa={["hello", 1, 2, 3, 4, true]} />하고 넣어주면
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

state는 보통 동적데이터와 함께 작업할 때 만들어진다.
동적데이터는 props로 해결못함 그래서 필요한것이 state이다.

함수형(function) 컴포넌트 vs 클래스형 컴포넌트
함수형 컴포넌트보다 클래스형 컴포넌트를 쓰는 이유는 클래스형 컴포넌트는 state를 사용할수 있고
state로 component의 data를 바꾸는게 유용하기 때문에 클래스형 컴포넌트는 state를 사용할때 사용한다.

일단 state는 객체이다.

state를 절대 직접 변경하면 안됨, setState()를 사용하여 접근, 변경해야함. 왜냐하면 이렇게 하면 react는 render function을 refresh하지 않기 때문이다.
매번 state의 상태를 변경할 때 react가 render function을 호출해서 바꿔줘야함
setState function을 설정해놓으면 react는 언제 setState를 사용해야하는지를 안다.
또한 view를 refresh하길 원하는걸 알고 render function을 refresh해야하는걸 안다.
setState는 새로운 state를 받는 것이다.

즉, 정리하자면 setState로 state를 새로 설정한다음 render function을 refresh해준다.
이렇게 함으로써 변경이 있는 부분만 수정이 가능하다. 이게 setState를 사용하는 이유임

setState에 직접적으로 state를 사용하는것 좋지 않음
대신 함수를 사용하여 접근할 수 있음.
this.setState({ count: this.state.count + 1 }); 이것을
this.setState((current) => ({ count: current.count + 1 })); 이런식으로 매개변수를 이용하여 접근할 수 있음.
current라는 매개변수로 현재 state가 가진 정보들을 받아 올 수 있음

react component에서 사용하는 유일한 function은 render function이다.
react class component는 render말고도 많은 것을 가지고 있다.
이들은 life cycle method를 가지는데 이것은 기본적으로 react component를 생성하고 없애는 방법이다.

component가 생성 될 때, render전에 호출되는 몇가지 function이 있다. (컴포넌트가 update될 때 호출됨)

1. mounting() : component가 mount될 때, component가 screen에 표시될 때, component가 website에 갈 때 constructor를 호출한다. 그리고나서 render함, 그리고 componentDidMount()(component가 처음인지 아닌지 알림)
2. updating() : component가 update될 때 됨, componentDidUpdate()는 render뒤에 나옴
3. unmounting() : component가 죽는걸 의미함, 컴포넌트는 페이지를 바끌때, state를 사용하여 component를 교체할 때 죽기도함, render가 끝나고 나서 componentWillUnmount()가 실행된다.

axios fetch와 같이 js에서 data를 fetch하는 것
axios.get("API주소"); 이런식으로 사용하고
시간이 오래걸리니 async/await으로 묶어줘야함
async/await은 시간이 오래 걸리는 작업을 비동기로 기다리라고 말해주는 것.

api에서 데이터를 axios든 fetch든 가져오면 state에 넣어줘야한다.(setState로) 그 후 데이터를 파일에 저장해주고 그 파일을 출력해준다.

> > > > > > > 972abee93a55c1d81bc433cbe09a07d8569a486e

create-react-app 덕분에 css 통합이 쉽다.

react에서 jsx안에 html요소들은 class를 사용하지말고 className을 사용하여 작성하자. react가 구분하기 힘들어함.

cloud
1)gh-pages 설치 : 웹사이트를 github의 github page도메인에 나타나게 해줌, github에 업로드하는걸 허가해주는 모듈임
2)package.json 설정 : homepage를 추가해주면서 홈페이지 링크도 추가해준다.
3)build 시키기 : npm run build하면 파일을 알아서 종류별로 나눠서 새로운 build 폴더를 만든다. 이 폴더를 gh-pages에 업로드 한다. 4)다른 script("deploy": "gh-pages -d build") 만들고,
5)predeploy를 만든다
6)npm run deploy : build폴더를 얻는다

끗

수정 : 이제 state를 얻기위해 class component를 가질 필요가 없다. -> hook사용하면됨

react-router-dom : 네이게이션을 만들어주는 패키지, 경로를 설정해준다.
<a>는 이동할때 페이지를 새로고침한다 따라서 react-router-dom에 있는 Link를 사용한다.
Link는 Router밖에서 쓸수 없다. App.js에서 HashRouter로 Navigation을 감싸고 있는게 그것이다.
즉 Router컴포넌트 안에서 Link컴포넌트를 사용할 수 있다.
Link를 이용해서 data를 이동시킬수 있다. to에 객체를 사용해서 pathname, state를 만들어서 정보를 보낸다.
ex) <Link to={{pathname: "/about", state: { fromNavigation: true,}, }}>About</Link>

리다이렉트 : 사용자가 원한 페이지를 불러낼 수 없을경우 다른 페이지를 불러내는것
