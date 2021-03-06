import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component{  

  constructor(props)  {  
    super(props);
    this.state =  { apiResponse: "" };
  }
  
  // fetch data from api and store in apiResponse
  callAPI()  { 
    fetch("http://localhost:9000/testAPI")
    .then(res => res.text())
    .then(res => this.setState({apiResponse: res} ))
    .catch(err => err)
  }

  // react lifecycle event
  componentDidMount(){
    this.callAPI();
  }

    render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to react</h1>
          <p className='App-intro'>{ this.state.apiResponse }</p>
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
        </header>
      </div>
    );
  }
}
export default App;
