import React from 'react';
import './app.css';


export default function App(){
  const [peso, setPeso] = React.useState('');
  const [altura, setAltura] = React.useState('');
  const [result, setResult] = React.useState('')
  
  function calcular(){
    //console.log('CLICOU');
    const alt = altura / 100
    const imc = (peso/(alt*alt))
    
    if(imc <= 18.5)
      setResult('Voce está abaixo do peso ideal, seu imc é: ' + imc.toFixed(2))
    else if(imc < 25){
      setResult('Peso ideal, seu imc é: ' + imc.toFixed(2))
    }else if(imc < 30){
      setResult('Seu peso está pouco acima do ideal, seu imc é: ' + imc.toFixed(2))
    }else if(imc >= 30){
      setResult('[CUIDADO] risco de obsidade, seu imc é: ' + imc.toFixed(2))
    }
  }


  //Dentro do return chamamos de JSX
  return(
    <div className="app">
      <h1>Calculadora imc</h1>
      <span>Vamos calcular seu imc</span>
      <div className='container'>
        <input type='text' placeholder="Seu peso"
          value={peso}
          onChange={ (event) => {
            //console.log('Testando digitação', event.target.value)
            setPeso(event.target.value) 
          }}
        />
        <input type='text' placeholder="Sua altura"
          value={altura}
          onChange={ (event) => {
            //console.log('Testando digitação', event.target.value)
            setAltura(event.target.value) 
          }}
        />

        <button
          onClick={calcular}
        >calcular</button>
      </div>
      <h2 className="resultado">{result}</h2>
    </div>
  )
}