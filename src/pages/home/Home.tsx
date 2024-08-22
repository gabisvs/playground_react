
interface homeProps{
  titulo: string;
  texto: string;
}
function Home(props: homeProps) {
  return (
    <div>
      
      <h1>Componente Home</h1>
      <h2>{props.titulo}</h2>
      <p>{props.texto}</p>
      
      </div>
  )
}

export default Home