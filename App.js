import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";
import logo from './logo.svg';
import './App.css';
import {
  ListGroup,
  ListGroupItem,
  Button,
  Form,
  Input,
  InputGroup
} from "reactstrap";

const initialTodoList = [
  "Teach Intro to React Hooks",
  "Get coffee",
  "Fix all the bugs"
];


function App() {
  const {
    todo,
    todoList,
    handleInputChange,
    handleSubmit,
    handleRemoveClick
  } = useTodoState();
  
 const [data, setData] = useState({ hits: [] });

 useEffect(() => {
    const result =  axios(
      'https://jsonplaceholder.typicode.com/todos',
    );
    setData(result.data);
  });
  return (
    <section>
      <h1>TODO</h1>

      <ListGroup>
        {todoList.map((item, i) => {
          return (
            <ListGroupItem key={i}>
              {item}
              <Button close onClick={() => handleRemoveClick(i)} />
            </ListGroupItem>
          );
        })}
      </ListGroup>
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Input value={todo} onChange={handleInputChange} />
          <Button>Add</Button>
        </InputGroup>
      </Form>
    </section>
  );
}

function useTodoState() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState(initialTodoList);
  const demoJson = useState("");
 
 
  function handleInputChange(e) {
    setTodo(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTodoList([...todoList, todo]);
    setTodo("");
  }

  function handleRemoveClick(todoIndex) {
    const newTodoList = todoList.filter((_, i) => i !== todoIndex);
     
    setTodoList(newTodoList);
  }

  return {
    todo,
    todoList,
    handleInputChange,
    handleSubmit,
    handleRemoveClick
  };
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


function App22() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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

export default App;
