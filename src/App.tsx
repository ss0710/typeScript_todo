import React, { FC, ChangeEvent, useState } from 'react';
import './App.css';
import TodoWork from './components/TodoWork';
import {ITask} from './Interface';

const App: FC = () => {

  const [work, setWork] = useState<string>("");
  const [time, setTime] = useState<number>(0);
  const [todo, setTodo] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if(event.target.name === "task"){
      setWork(event.target.value);
    } else {
      setTime(Number(event.target.value));
    }
  };

  const addTask = (): void => {
     const newWork = { taskName: work, deadLine: time};
      setTodo([...todo, newWork]);  
      setWork("");
      setTime(0);
  }

  return (
    <div className="App">
      <div className="header">
      <div className="inputContainer">
      <input type="text" value={work} placeholder="Task..." name="task" onChange={handleChange}/>
      <input type="number" placeholder="DeadLine" name="deadLine" onChange={handleChange}/> 
      </div>
      <button onClick={addTask}>Add</button>
      </div>
      <div className="todoList">
          {
            todo.map((todo: ITask, index: number) => {
              return <TodoWork key={index} task={todo}/>
            })
          }
      </div>
    </div>
  );
}

export default App;
