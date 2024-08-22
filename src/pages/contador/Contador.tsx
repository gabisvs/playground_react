import { useState } from "react"

function Contador() {

  // const [nome_estado, função setState] = useState(valor_inicial_do_estado)

  // Estado de valor(React)
  const [valor, setValor] = useState(0);

  // Fuction (TypeScript)
  function handleClick(){
    setValor(valor + 1);
  }


  return (
    <div>
      
      <h2>Componente Contador</h2>

      <p>O valor atual do meu estado é: {valor}</p>

      <button onClick={handleClick}>Adicionar +1</button>

    </div>
  )
}

export default Contador