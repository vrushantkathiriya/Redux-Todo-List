import React from 'react';
import './App.css';
import Input from './Components/Input';
import TodoItems from './Components/TodoItems';
import { useDispatch, useSelector } from 'react-redux';
import {selectTodoList} from './features/todoslice'
function App() {
  const todoList = useSelector(selectTodoList)
  // const dispatch = useDispatch()
  return (
    <div className='App' >
      <div className='app_container'>
        <div className='app_todocontainer'>
          {
             todoList.map(item=> (
              <TodoItems 
                  name={item.item} 
                  done={item.done}
                  id={item.id}
              /> 
             ))
          }

        </div>
      <Input />
      </div> 
    </div>
  );
} 
export default App;
