//React core
import { useState } from "react";
//Components
import Card from "./components/Card";
import Header from "./components/Header";
//Media
import logo from './assets/logo.svg';
import './styles/App.css';

function App() {
  //State
  const [total, setTotal] = useState(10);
  const [title, setTitle] = useState("Pug 1");
  const [description, setDescription] = useState("Really cute pug");


  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <h1>Hello {total}</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <Card title= {title} description= {description}/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button 
          onClick = {() => {
            setTotal(555)
          }}
        >Increase Total</button>
      </header>
    </div>
  );
}

export default App;
