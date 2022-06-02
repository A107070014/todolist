import { useState } from 'react';
import './index.css';

export default function Edit({editItem,editSave,editClose,display}) {
  const [editValue,setEditValue] = useState(editItem)
  function editItemFunc(){
    editSave(editValue);
  }
  function closeItemFunc(){
    editClose(display);
  }
  return (
    <div className='editModal'>
        <h1>重新命名<span>{editItem}</span>事項</h1>
        <input type='text' value={editValue} placeholder={editItem} onChange={e=>setEditValue(e.target.value)}/>
        <div>
          <div onClick={editItemFunc}>儲存</div>
          <div onClick={closeItemFunc}>取消</div>
        </div>
    </div>
  );
}

