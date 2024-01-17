import { useState } from "react";
import "./Todoitem.css";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
// eslint-disable-next-line react/prop-types
function Todoitem({itemName,itemdate,onDelete}){
const [done,setdone]=useState(false);
const handledone=()=>{
  setdone(!done);
  console.log(done);
}
return <div className="container">
    <div className="row kg-roww" id="container" style={{backgroundColor:`${!done?"rgba(207, 31, 31, 0.582)":"aquamarine"}`}}>
      <div className="col-4" style={{textDecoration:`${done && "line-through"}`}}>
        {itemName}
      </div>
      <div className="col-4">
        {itemdate}
      </div>
      <div className="col-2">
        <button type="button" id="tuf" className="btn btn-danger buttt"  onClick={()=>
          handledone(itemName)
        }
        >{!done?<TiTick />:<ImCross />}</button>
      </div>
      <div className="col-2">
        <button type="button" className="btn btn-danger but" 
        onClick={()=>onDelete(itemName)}
        >DELETE</button>
      </div>
    </div>
  </div>

}
export default Todoitem;