import './App.css';
import Input from './components/input';
import ListTab from './components/list-tab'; 
import ListItems from './components/list-items'; 
import Edit from './components/edit-modal'; 
import { useState } from 'react';


export default function Todolist() {
  
  let [itemArray,setItemArray] = useState([]);
  const [editItem,setEditItem] = useState();
  const [editIndex,setEditIndex] = useState();
  const [display,setDisplay] = useState(false);

  function addItem(item) {
    setItemArray(preItem=>[...preItem,item]);
  }

  function deleteData(data){
    const newItemArray = itemArray.filter(e => e !== data);
    setItemArray(newItemArray);
  }

  //按編輯扭取值
  function editData(data,index){
    setEditItem(data);
    setEditIndex(index);
    setDisplay(!display);
  }

  //編輯完取值
  function editSave(editValue){
    itemArray[editIndex] = editValue;
    setItemArray(itemArray);
    setDisplay(!display);
  }

  function editClose(display){
    setDisplay(!display);
  }
  return (
  <>
    <div className="todolist">
      <h1>ToDoList</h1>
      <Input
        addItem={addItem}
      />
      <div className='list'>
        <ListTab/>
        <ListItems
          itemArray={itemArray}
          deleteData={deleteData}
          editData={editData}
          
        />
      </div>
    </div>
    {display && <div className='modal'>
      <Edit
        editItem={editItem}
        editSave={editSave}
        editClose={editClose}
        display={display}
      />
    </div>}
  </>
  );
}

