import propTypes from "prop-types";
import React from "react";
// call TodoItem from TodoItem and used in div <TodoItem>
import {TodoItem} from "./TodoItem"

const TodoList = ({todoData, onDelete}) => {
  return (
    <div className="container">
      <h3 className="text-center">Todo List</h3>
      
      {/* call from TodoItem */}
      {/* call one by one */}
      {/* <TodoItem todo={todoData[0]}/> */}
      {/* call all */}
      {todoData.map((todoItem , index) => {
        // onDelete comes form App.js
        return <TodoItem key={todoItem.sno} todo={todoItem} onDelete={onDelete}/>
      })}
      
    </div>
  )
};

export default TodoList;
