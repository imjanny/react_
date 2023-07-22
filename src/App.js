import './App.css';
import { useState } from 'react';

function Counter(props){
  let countState = useState(props.initValue);
  let count = countState[0];
  let setCount = countState[1];
  console.log(countState);
  function up (){
    console.log(1)
    setCount(count+1);
  }
  console.log(props.title)
  return <div>
    <h1>{props.title}</h1>
  <button onClick={up}>+</button> {count}
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
