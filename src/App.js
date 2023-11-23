import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import swal from "sweetalert";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [currentTask, setCurrentTask] = useState("");

  const inputTask = useRef(null);
  
  useEffect(()=>{
    const savedTasks = localStorage.getItem('todoList');
    if (savedTasks) setTodoList(JSON.parse(savedTasks))
  }, []); 

  const saveTasks = (newTasks) => {
    localStorage.setItem("todoList", JSON.stringify(newTasks))
  };

  const addTask = () => {
    if (inputTask.current.value !== "") {
      const newTasks = [...todoList, { task: currentTask, completed: false }];
      setTodoList(newTasks);
      saveTasks(newTasks);
      inputTask.current.value = "";
      setCurrentTask("");
    } else {
      swal("You have to write the name for your task to add it to the list.");
    }
  };

  const deleteTask = (taskToDelete) => {
    const newTasks = todoList.filter((task) => task.task !== taskToDelete);
    setTodoList(newTasks);
    saveTasks(newTasks);
  };

  const completeTask = (tasktoComplete) => {
    const newTasks = todoList.map((task) => 
    task.task === tasktoComplete
      ? { task: tasktoComplete, completed: !task.completed }
      : task
  );
  setTodoList(newTasks);
  saveTasks(newTasks);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div>
        <input
          id="add-task"
          ref={inputTask}
          type="text"
          placeholder="Task..."
          onKeyDown={(event) => {if (event.key === "Enter") addTask()}}
          onChange={(event) => {
            setCurrentTask(event.target.value);
          }}
        />
        <button onClick={addTask}> Add Task </button>
      </div>
      <hr />
      <ul>
        {todoList.map((val, key) => {
          return (
            <div id="task">
              <li key={key}>{val.task}</li>
              <button onClick={() => completeTask(val.task)}>
                {val.completed ? "undo" : "completed"}
              </button>
              <button id="delete-button" onClick={() => deleteTask(val.task)}>
                remove
              </button>
              {val.completed ? <h2><span role="img" aria-label="Checked">✅</span></h2> : ""}
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
