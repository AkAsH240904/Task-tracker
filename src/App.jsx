import AppName from "./components/AppName";
import Addtodo from "./components/Addtodo";
import Todoitems from "./components/Todoitems";
import { useState } from "react";
import Welcome from "./components/Welcome";
function App() {
  const [Todo,setTodo]=useState([]); 
  const handlenewItem = (itemName,itemDuedate)=>{
    console.log(`item being added are ${itemName} on ${itemDuedate}`);
    const newTodoitems=[
      ...Todo,{
        name : itemName,duedate: itemDuedate
      },
    ];
    setTodo(newTodoitems);
  };
  const handleDeleteClick=(todoName)=>{
    const newTodoitems=Todo.filter((items)=>items.name!==todoName)
    setTodo(newTodoitems);
  }

  return (
  <div className="hero">
    
    <div className="main"><AppName/>
    <Addtodo onNewitem={handlenewItem} />
    {Todo.length===0 && <Welcome></Welcome>}
    <Todoitems todoitems={Todo} ondelete={handleDeleteClick}></Todoitems>
    </div>
  </div>

  )
      
}
export default App;
