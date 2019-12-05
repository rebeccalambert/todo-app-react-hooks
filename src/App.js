import React, { useState } from "react";
import "./App.css"
import { format } from "path";


function Todo({ todo, index }) {

  // const completeTodo = index => {
  //   const newTodos = [...todos];
  //   newTodos[index].isCompleted = true;
  //   setTodos(newTodos);
  // };

  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}

      <div>
        {/* <button onClick={() => completeTodo(index)}>Complete</button> */}
      </div>
    </div>
  );
}

function TodoForm({addTodo}) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    addTodo(value);
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        className="input" 
        value={value} 
        onChange={e => setValue(e.target.value)}
        placeholder="Add new to-do"
        />
    </form>
  )
}


function App() {
  const [todos, setTodos] = useState([
    { text: "Learn about React", 
      isCompleted: false},
    { text: "Meet friend for lunch", 
    isCompleted: false },
    { text: "Build really cool todo app", 
    isCompleted: false }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);

  }


  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            // completeTodo={completeTodo}

          />
        ))}

        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;