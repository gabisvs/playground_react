import { useEffect, useState } from "react"

function Tarefa() {
  const [completed, setCompleted] = useState(false);
  const [tarefa, setTarefa] = useState('');

  useEffect(() => {
    if (completed) {
      setTarefa('Parabéns! você concluiu a Tarefa.')
    } else {
      setTarefa('')
    }
  }, [completed])

  return (
    <div>
      <h2>Componente Tarefa</h2>
      <h3>{tarefa}</h3>
      <p>Conclua a Tarefa</p>
      <button onClick={() => setCompleted(!completed)}>Concluir Tarefa</button>

    </div>
  )
}

export default Tarefa