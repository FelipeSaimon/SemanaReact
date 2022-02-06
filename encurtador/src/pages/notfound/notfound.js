import './notfound.css'
import { Link } from 'react-router-dom'

export default function Error(){
    return(
        <div className='container'>
            <img src='../../notfound.png'/>
            <h2>Página não encontrada</h2>
            <Link to='/'>
                voltar para home
            </Link>
        </div>
    )
}