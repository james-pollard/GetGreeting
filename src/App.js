import logo from './logo.svg';
import './App.css';
async function hitServer(){
  const response = await fetch('http://localhost:8080/greeting?name=Jim');
  const greet = await response.json();
  return greet;
}

const getGreeting = async () => {
  const data = await hitServer();
  console.log((data));
  document.getElementById('greeting').innerHTML = data.content;
  
}

const postMessage = async () => {
  const subject = document.getElementById('subject').value;
  const body = document.getElementById('content').value;
  const response = await fetch('http://localhost:8080/postit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      subject,
      body
    })
  });
  alert("successfully posted");
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button className="btn btn-primary" onClick={()=>getGreeting()}>Get Greeting</button>
        <label id="greeting"></label>
        <br/>
        <input id="subject" type="text" placeholder="Enter a Subject" /><br/>
        <input id="content" type="text" placeholder="Enter some content" /><br/>
        <button className="btn btn-primary" onClick={()=> postMessage()}>Post</button>
      </header>
    </div>
  );
}

export default App;
