import './index.css';
import { ReactComponent as Edit}  from '../../img/pencil.svg';
import { ReactComponent as Trash}  from '../../img/delete.svg';
import { useState,useEffect } from 'react';

export default function ListItems({active,deleteData,editData,completed,itemArray}) {
    const [activeArray,setActiveArray] = useState(itemArray);
    useEffect(()=>{
        if(active === 0) {
            setActiveArray(itemArray);
        }else if(active === 1){
            const pending = itemArray.filter(e => e.status === false);
            setActiveArray(pending);
        }else{
            const complete = itemArray.filter(e => e.status === true);
            setActiveArray(complete);
        }
    },[active,itemArray])

  return (
    <ul className='list-items'>
        {activeArray.map((data,index)=> (
            <li key={index} style={{textDecoration:data.status && 'line-through'}}>
                <div>
                    <input type='checkbox' onClick={()=>completed(data.id)} checked={data.status}/>
                    <span>{data.value}</span>
                </div>
                <div>
                    <Edit onClick={()=>editData(data)}/>
                    <Trash onClick={()=>deleteData(data)}/>
                </div>
            </li>
            
        ))}
    </ul>
  );
}

