import "./styles.css";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { useState } from "react";

let Data = [
  {
    sno: 1,
    title : "hei",
    desc: "desc 1"
  },
  {
    sno: 2,
    title : "hei !!",
    desc: "desc 2"
  },
  {
    sno: 3,
    title : "hei !!!",
    desc: "desc 3"
  }
]

function App() {
  // todoData will be call in the todolist  \
  let [todoData, setTodoData] = useState([])

  
  const onDelete = (srn) => {
    let tempArr = todoData.filter((item)=>{
        if(item.sno == srn){
          return false
        } else return true
    })
    setTodoData(tempArr)
    
  }


  return (
    <div className="App">
      {/* title and searchbar will be called in Header.js file */}
      <Header title="Hello" nosearchbar="true" />
      <TodoForm todoData={todoData} setTodoData={setTodoData}/>
      {/* here we call another props todoData and call using props.todoData in TodoList file */}
      <TodoList todoData={todoData} onDelete={onDelete}/>
    </div>
  );
}

export default App;