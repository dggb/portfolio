import './App.css';

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

function App() {
  return <div className="App">
          <header className="App-header">
            {
              testUser.map((el,index) => {
                return (divTest(el,index))
              })
            }
            <button onClick={() => alert('안녕')}>
              안녕
            </button>
            {element}
          </header>
        </div>;
}

export default App;
