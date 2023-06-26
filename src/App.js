import './App.css';
import React, { useState } from 'react';

const element = (
  <div>
    <h1>테스트</h1>
  </div>
);

const testUser = [
  {
    name: '박경호',
    old: '31'
  },
  {
    name: '테스트',
    old: '32'
  },
];

const type2 = testUser.map((item,index) =>
  <div key={index}>{divTest(item,index,false)}</div>
);

function userName(user){
  return user.name + ' ' + user.old;
}

function divTest(item,index,bool) {
  if(bool){
    return <div key={index}>Hello World {userName(item)}</div>
  }else{
    return item.name === '박경호' && <div key={index}>Hello World {userName(item)}</div>
  }
}

function Test(props) {
  console.log(props);
}

function ButtonToggle() {
  const [isToggleOn, setToggleState] = useState(true);

  const clickEvent = () => {
    setToggleState(isToggleOn => !isToggleOn);
  };

  return (
    <button onClick={clickEvent}>
      {isToggleOn ? 'ON' : 'OFF'}
    </button>
  );
}

function eventTest(e){
  console.log(e);
}

function NumberList() {
  const [count, setCount] = useState(0);

  const inputData = (event) => {
    const value = parseInt(event.target.value);
    setCount(value);
  };

  const listItems = [];

  for (let i = 1; i <= count; i++) {
    listItems.push(<li key={i.toString()}>{i}</li>);
  }

  return (
    <div>
      숫자를 입력하세요 : &nbsp;
      <input type="number" onChange={inputData} /> 
      <ul>{listItems}</ul>
    </div>
  );
}

function App() {
  return <div className="App">
          <header className="App-header">
            {
              testUser.map((el,index) => 
                divTest(el,index,true)
              )
            }
            <ButtonToggle />
            <button onClick={(e)=> eventTest(e)}>클릭</button>
            {element}
            <Test item={testUser} abc="abc" />
            {type2}
            <NumberList />
          </header>
        </div>;
}

export default App;
