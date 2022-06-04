import './index.css';
import { ReactComponent as Plus} from '../../img/plus.svg';
import { useState } from 'react';

export default function Input({addItem}) {
  const [value,setValue] = useState();
  function add() {
    if(value === ''){
      alert('請輸入代辦事項');
    }else{
      const id = new Date();
      console.log(id);
      setValue('');
      addItem({id,value,status:false});
    }
  }
  return (
    <div className='addList'>   
        <input id='list' type='text' name='item' size='100' placeholder='加入新的代辦事項...' value={value} onChange={(e) => setValue(e.target.value)}/>
        <Plus onClick={add}/>
    </div>
  );
}
