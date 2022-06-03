import './App.css';
import Input from './components/input';
import ListTab from './components/list-tab'; 
import ListItems from './components/list-items'; 
import Edit from './components/edit-modal'; 
import { useState } from 'react';


export default function Todolist() {
  
  const [itemArray,setItemArray] = useState([]);
  const [editItem,setEditItem] = useState();
  const [editIndex,setEditIndex] = useState();
  const [display,setDisplay] = useState(false);
  const [active,setActive] = useState(0);

  
  
  function addItem(item) {
    setItemArray(preItem=>[...preItem,item]);
  }

  function deleteData(data){
    const newItemArray = itemArray.filter(e => e !== data);
    setItemArray(newItemArray);
  }

  //按編輯扭取值
  function editData(data){
    setEditItem(data.value);
    setEditIndex(data.id);
    setDisplay(!display);
  }
  //編輯完取值
  function editSave(editValue){
    setItemArray(preItem => (
      preItem.map((data) => (
        data.id === editIndex ? {...data,value:editValue} : data
      ))
    ))
    setDisplay(!display);
  }

  function editClose(){
    setDisplay(!display);
  }

  function completed(index){
    setItemArray( preItem => (
      preItem.map( (data,idx) => (
        idx ===  index ? {...data,status:!data.status}: data
      ))
    ))
  }
  
  return (
  <>
    <div className="todolist">
      <h1>ToDoList</h1>
      <Input
        addItem={addItem}
      />
      <div className='list'>
        <ListTab
          setActive={setActive}
        />
        <ListItems
          active={active}
          deleteData={deleteData}
          editData={editData}
          itemArray={itemArray}
          completed={completed}
        />
      </div>
    </div>
    {display && <div className='modal'>
      <Edit
        editItem={editItem}
        editSave={editSave}
        editClose={editClose}
      />
    </div>}
  </>
  );
}

