import { useState } from "react";
import { Link } from "react-router-dom";
import imgEstacao from "../../assets/estacao.jpg";
import "../login/login.css";

export default function Register() {
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmaSenha, setConfirmaSenha] = useState("");
    
    return (
        <section className="container">

            <div className="left">
                <img src={imgEstacao} alt="Estação meteorológica" />
            </div>

            <div className="right">
                <form className="form">
                    <h2>🌦️ Cadastro de Usuário</h2>

                    <label>Usuário</label>
                    <input
                        type="text"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                        placeholder="Digite seu usuário"
                    />

                    <label>Senha</label>
                    <input
                        type="password"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        placeholder="Digite sua senha"
                    />

                    <label>Confirmar Senha</label>
                    <input
                        type="password"
                        value={confirmaSenha}
                        onChange={(e) => setConfirmaSenha(e.target.value)}
                        placeholder="Confirme a senha"
                    />

                    <button type="submit">Cadastrar</button>

                    <p>
                        Já tem conta? <Link to="/">Entrar</Link>
                    </p>
                </form>
            </div>

        </section>
    );
}