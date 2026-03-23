export default function avatar(props) {
  return (
    <div className="perfil">
      <img src={props.foto} alt="Foto de perfil" width="150" />
      <h2>Nome: {props.nome}</h2>
      <p>Idade: {props.idade}</p>
      <p>Estilo Musical: {props.estiloMusical}</p>
      <p>Disciplina Favorita: {props.disciplina}</p>
    </div>
  )
}