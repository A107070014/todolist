import './index.css';
import all from '../../img/grid.png';
import clock from '../../img/clock.png';
import select from '../../img/select.png';


export default function ListTab({active,setActive}) {
    const tab = [
        {img:all,title:'All'},
        {img:clock,title:'Pending'},
        {img:select,title:'Completed'},
    ];

  return (
        <ul className='list-tab'>
            {tab.map((data,index) => (
                <li onClick={()=>setActive(index)}>
                    <button className={active === index && "active"}>
                        <img src={data.img} alt={data.title} width={20}/>
                        <span>{data.title}</span>
                    </button>
                </li>
            ))}
        </ul>
  );
}

