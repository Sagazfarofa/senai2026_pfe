import './App.css'
import Saudacao from './componentes/bemVindo.jsx'
import Perfil from './componentes/avatar.jsx'
import PropsNomeado from './componentes/propsNomeado.jsx'

import foto from './img/Oruan.avif'

function App() {
  return (
    <>
    <PropsNomeado
    titulo='Usando Props Nomeado'
    subtitulo='Aprendendo props named'
    />
      <Saudacao titulo="Aprendendo Props/Properties/Propriedades" 
      texto="Bem vindo " nome="Luiz Gustavo!" />
      <div>
        <Perfil
          nome="Oruan"
          idade={67}
          foto={foto}
          estiloMusical="Sertanejo"
          disciplina="Programação"
        />
      </div>
    </>
  )
}
  
export default App 
