import './index.css';
import plus from '../../img/plus.png';
import { useState } from 'react';

export default function Input({addItem}) {
  const [value,setValue] = useState();
  function add() {
    setValue('');
    addItem(value);
  }
  return (
    <div className='addList'>   
        <input id='list' type='text' name='item' size='100' placeholder='加入新的代辦事項...' value={value} onChange={(e) => setValue(e.target.value)}/>
        <img src={plus} alt='addIcon' onClick={add}/>
    </div>
  );
}
