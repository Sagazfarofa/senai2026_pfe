import './App.css'
import logoSesi from './assets/img/sesi-sp.jpg'
import logoSenai from './assets/img/senai_logo.png'

export default function App() {

  return (
    <>
    <div className="container">
      <img src={logoSesi} alt='Sesi Logo' className='logo' />
      <img src={logoSenai} alt='Senai Logo' className='logo' />
      <h1 className='titulo'>login</h1>
      <span className='subtitulo'>para continuar</span>
      <label htmlFor="nome" className="label">Nome:</label>
      <input type="text" className="campo" id='nome' placeholder='Seu nome' />
      <label htmlFor="senha" className="label">Senha:</label>
      <input type="password" className="campo" id='senha' placeholder='***' />

      <button className="botao">Log in</button>
      <span className="textoFooter">Esqueceu a senha?</span>
      <span className="textoFooter">Cadastrar-se</span>

    </div>
    </>
  )
}

//export default App;
