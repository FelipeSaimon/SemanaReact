import './app.css';

export default function App(){
  //Dentro do return chamamos de JSX
  return(
    <div className="app">
      <h1>Calculadora imc</h1>
      <span>Vamos calcular seu imc</span>
      <div className='container'>
        <input type='text' placeholder="Seu peso"/>
        <input type='text' placeholder="Sua altura"/>

        <button>calcular</button>
      </div>
      <h2 className="resultado">Seu imc é de:</h2>
    </div>
  )
}