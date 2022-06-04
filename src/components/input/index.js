import './index.css';
import { ReactComponent as Plus} from '../../img/plus.svg';
import { ReactComponent as Alert} from '../../img/alert.svg';
import { useState } from 'react';

export default function Input({addItem}) {
  const [value,setValue] = useState('');
  const [alert,setAlert] = useState(false);
  function add() {
    if(value === ''){
      setAlert(true);
    }else{
      const id = new Date();
      setValue('');
      addItem({id,value,status:false});
      setAlert(false);
    }
  }
  return (
  <>
    <div className='addList'>   
        <input id='list' type='text' name='item' size='100' placeholder='加入新的代辦事項...' value={value} 
          onChange={(e) => setValue(e.target.value)}
          style={{border:alert && '2px solid rgb(189, 16, 16)'}}
        />
        <Plus onClick={add}/>
    </div>
    {alert && <div className='alert'><Alert/><span>請輸入代辦事項</span></div>}
  </>
  );
}
