import React, { Component } from 'react';
import './App.css';
import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";


class App extends Component{  

  constructor(props)  {  
    super(props);
    this.state =  { apiResponse: "" };

  }
  
  // fetch data from api and store in apiResponse
  /*callAPI()  { 
    fetch("http://localhost:9000/testAPI")
    .then(res => res.text())
    .then(res => this.setState({apiResponse: res} ))
    .catch(err => err)
  }

  // react lifecycle event
  componentDidMount(){
    this.callAPI();
  }*/

  render() {
    
    const taskList = this.props.tasks.map(task => (
    
    <Todo 
     id={task.id} 
     name={task.name} 
     completed={task.completed}
     key={task.id} />
     )
    );

    return (
      <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form />
      
      <div className="filters btn-group stack-exception">
        <FilterButton name="All"/>
        <FilterButton name="Active" />
        <FilterButton name="Tutu" />
      </div>
      
      <h2 id="list-heading">
        3 tasks remaining
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
      </ul>
    </div>
  );
  }
}
export default App;
