import Todoitem from "./Todoitem";
// eslint-disable-next-line react/prop-types, no-unused-vars
const Todoitems=({todoitems,ondelete})=>{
  return(
  <div className="item-container">
      {
        // eslint-disable-next-line react/prop-types
        todoitems.map((items)=>(
          // eslint-disable-next-line react/jsx-key
          <Todoitem itemName={items.name} itemdate={items.duedate} onDelete={ondelete}></Todoitem>
        ))
      }
    </div>
  );
};
export default Todoitems;