import { useState } from 'react';
import './index.css';

export default function Edit({editItem,editSave,editClose}) {
  const [editValue,setEditValue] = useState(editItem);
  
  return (
    <div className='editModal'>
        <h1>重新命名</h1>
        <span>將'{editItem}'更改為</span>
        <input type='text' value={editValue} placeholder='重新命名代辦事項...'  onChange={e=>setEditValue(e.target.value)}/>
        <div className='btn'>
          <div onClick={editClose}>取消</div>
          <div onClick={()=>editSave(editValue)}>儲存</div>
        </div>
    </div>
  );
}

