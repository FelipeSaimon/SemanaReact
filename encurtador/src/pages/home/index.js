import { FiLink } from "react-icons/fi"
import './home.css'
import Menu from '../../components/Menu'
import { useState } from "react"


export default function Home(){

  const [texto, setTexto] = useState('')


  function encurta(){
    console.log('Link =>', texto)
    setTexto('')
  }

  return(
    <div className="container-home">
      <div className="logo">
        <img src="/Logo.png"/>
        <h1>Enclinks</h1>
        <span>Cole seu link para encurtar</span>
      </div>

      <div className="area-input">
        <div>
          <FiLink size={24} color={'#FFF'}/>
          <input type="text" placeholder="Cole seu link aqui"
            value={texto}
            onChange={(event) => {
              setTexto(event.target.value)
            }}
          />
        </div>
        <button type="submit"
          onClick={encurta}
        >Gerar link</button>
      </div>
      <Menu/>
    </div>



    
  )
}