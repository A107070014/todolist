import './index.css';
// import { useState } from 'react';
import edit from '../../img/pencil.png';
import trash from '../../img/delete.png';

export default function ListItems({itemArray,deleteData,editData,completed}) {
    
  return (
    <ul className='list-items'>
        {itemArray.map((data,index)=> (
            <li key={index} style={{textDecoration:data.status && 'line-through'}}>
                <div>
                    <input type='checkbox' onClick={()=>completed(index)} />
                    <span>{data.value}</span>
                    {console.log(data.status)}
                </div>
                <div>
                    <img src={edit} alt='edit' width={20} onClick={()=>editData(data.value,index)}/>
                    <img src={trash} alt='trash' width={20} onClick={()=>deleteData(data)}/>
                </div>
            </li>
        ))}
        
    </ul>
  );
}

