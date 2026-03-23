export default function Card({ titulo, descricao, imagem }) {
  return (
    <div className="card">
      <img src={imagem} alt={titulo} className="card-img" />
      <div className="card-content">
        <h2>{titulo}</h2>
        <p>{descricao}</p>
      </div>
    </div>
  );
}