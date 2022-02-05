import './links.css'
import {FiArrowLeft, FiLink, FiTrash} from 'react-icons/fi'
import { Link } from 'react-router-dom'


export default function links(){
    return(
      <div className='links-container'>

        <div className='header'>
          <Link to={'/'}>
            <FiArrowLeft size={35} color={'#fff'}/>
          </Link>
          <h1>Meus links</h1>
        </div>

        <div className='item-link'>
          <button className='link'>
            <FiLink size={20} color={'#fff'}/>
            https:/www.google.com
          </button>

          <button className='item-delete'>
            <FiTrash size={20} color={'#FF5454'}/>
          </button>
        </div>
      </div>
      
    )
  }