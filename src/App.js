import './App.css';
import Input from './components/input';
import ListTab from './components/list-tab'; 
import ListItems from './components/list-items'; 
import Edit from './components/edit-modal'; 
import { useState } from 'react';


export default function Todolist() {
  
  const [itemArray,setItemArray] = useState([]);
  function addItem(item) {
    setItemArray(preItem=>[...preItem,item]);
  }

  function deleteData(data){
    const newItemArray = itemArray.filter(e => e !== data);
    setItemArray(newItemArray);
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
        />
      </div>
    </div>
    <div className='modal'>
      <Edit/>
    </div>
  </>
  );
}

