import { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
// eslint-disable-next-line react/prop-types
function Addtodo({onNewitem}){
  const [TodoName,setTodoName]=useState();
  const [dueDate,setdueDate]=useState();
  const handleNamechange=(event)=>{
    setTodoName(event.target.value);
  }
  const handleDateChange=(event)=>{
    setdueDate(event.target.value);
  }
  const handleAddbuttonClicked =()=>{
    onNewitem(TodoName,dueDate);
    setdueDate("");
    setTodoName("");
  }
  return( 
  <div className="container">
    <div className="row kg-row">
      <div className="col-4">
        <input type="text" placeholder="enter text here" value={TodoName} onChange={handleNamechange} />
      </div>
      <div className="col-4">
        <input type="date" value={dueDate} onChange={handleDateChange} />
      </div>
      <div className="col-2 cl">
        <button type="button" className="btn btn-success but" 
         >status
</button>
      </div>
      <div className="col-2 cl">
        <button type="button" className="btn btn-success but" 
          onClick={handleAddbuttonClicked}
         ><IoMdAddCircleOutline />
</button>
      </div>
    </div>
  </div>
)}
export default Addtodo;