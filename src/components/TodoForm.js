import propTypes from "prop-types";
import React from "react";
import { useState } from "react";


const TodoForm = ({
  todoData,
  setTodoData = () => {},
}) => {
 const [title, settitle] = useState("")
 const[desc, setdesc] = useState("")
  const [validationArr , setvalidationArr] = useState([])


 const addtask = () => {

    let addStatus = 0
    let tempErr = []

    if(title == ""){
      tempErr.push("title")
      addStatus = 1
    }

    if(desc == ""){
      tempErr.push("desc")
      addStatus = 1
    }

    setvalidationArr(tempErr)

   if(addStatus == 0){
     let newTsk =  {
      sno : todoData.length + 1,
      title : title,
      desc : desc,
    }
    let tempArray = [...todoData]
    tempArray.push(newTsk)
    setTodoData(tempArray)
}

  }

  return (
    <div className="container">
      <input type={"title"} value={title} onChange={(event) => settitle(event.target.value)} />
      <input type={"desc"} value={desc} onChange={(event) => setdesc(event.target.value)} />
      <button onClick={() => addtask()}>add task</button>


      {validationArr.includes("title") && <p>Title cant be empty</p>}
      {validationArr.includes("desc") && <p>desc cant be empty</p>}
    </div>
  )
};

export default TodoForm;
