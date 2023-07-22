import './App.css';

function Counter(props){
  console.log(props.title)
  return <div>
    <h1>{props.title}</h1>
  <button>+</button> {props.initValue}
  </div>
}

function App() {
  return (
      <div>
        <Counter title="불면증 카운터" initValue={10} ></Counter> 
        <Counter title="카운터2" initValue={5}></Counter>
        <Counter title="counter" initValue={1}></Counter>
      </div>
  );
}
// 중괄호 안에 있으면js의 데이터 타입으로 정수형이되고 , ""안에 있으면 문자열
export default App; 
