import './index.css';
import all from '../../img/grid.png';
import clock from '../../img/clock.png';
import select from '../../img/select.png';


export default function ListTab() {
  
  return (
        <ul className='list-tab'>
            <li>
                <button>
                    <img src={all} alt='all' width={20}/>
                    <span>All</span>
                </button>
            </li>
            <li>
                <button>
                    <img src={clock} alt='pending' width={20}/>
                    <span>Pending</span>
                </button>
            </li>
            <li>
                <button>
                    <img src={select} alt='completed' width={20}/>
                    <span>Completed</span>
                </button>
            </li>
        </ul>
  );
}

