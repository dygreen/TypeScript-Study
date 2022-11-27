import React, { useState } from 'react';
import './App.css';

/* 1. JSX 표현하기 */
let box: JSX.Element = <div></div>;

function App() {
  // 4. useState 타입지정 : 알아서 해줌
  let [user, setUser] = useState('Kim'); // string을 초기값으로 입력했기 때문에, 자동으로 타입을 지정해줌
  // 4-1. union 타입을 지정하고 싶다면? generic
  let [user2, setUser2] = useState<string | number>('Kim');

  return (
    <div className="App">
      <h4>안녕하십니까</h4>
      <Profile name="철수" age="20" />
    </div>
  );
}

// 2. Component 만들 때 타입지정: parameter, return
// 3. Component props 타입지정 (type alias, interface...)
function Profile(props: { name: string, age: string }): JSX.Element {
  return (
    <div>{props.name}입니다</div>
  )
}

export default App;
