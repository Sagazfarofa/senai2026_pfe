import './estilos.css';
import Header from './components/header';
import Card from './components/Card';
import foto from "./assets/resident.jpg";
import foto2 from "./assets/forza.jpg";

function App() {
  return (
    <>
      <Header />
      <Card 
        titulo="Resident Evil"
        descricao="Jogo de terror brabo"
        imagem={foto}
      />
      <Card 
        titulo="Forza Horizon 6"
        descricao="O melhor jogo de corrida de todos os tempos"
        imagem={foto2}
      />
    </>
  );
}

export default App;