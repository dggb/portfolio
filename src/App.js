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

function userName(user){
  return user.name + ' ' + user.old;
}

function divTest(item,index) {
  if(item.name === '박경호'){
    return <div key={index}>Hello World {userName(item)}</div>
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

function App() {
  return <div className="App">
          <header className="App-header">
            {
              testUser.map((el,index) => {
                return (divTest(el,index))
              })
            }
            <ButtonToggle />
            <button onClick={(e)=> eventTest(e)}>클릭</button>
            {element}
            <Test item={testUser} abc="abc" />
            
          </header>
        </div>;
}

export default App;
