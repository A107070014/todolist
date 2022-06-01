import './index.css';
import edit from '../../img/pencil.png';
import trash from '../../img/delete.png';

export default function ListItems({itemArray,deleteData}) {

  return (
    <ul className='list-items'>
        {itemArray.map((data,index)=> (
            <li key={index}>
                <div>
                    <input type='checkbox'/>
                    <span>{data}</span>
                </div>
                <div>
                    <img src={edit} alt='edit' width={20}/>
                    <img src={trash} alt='trash' width={20} onClick={()=>deleteData(data)}/>
                </div>
            </li>
        ))}
        
    </ul>
  );
}

