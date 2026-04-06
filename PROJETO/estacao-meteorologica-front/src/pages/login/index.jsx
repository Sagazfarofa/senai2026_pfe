import { useState } from "react";
import { Link } from "react-router-dom";
import imgEstacao from "../../assets/estacao.jpg";
import "./login.css";

export default function Login() {
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");

    return (
        <section>

            <div>
                <img src={imgEstacao} alt="Estação meteorológica" />
            </div>

            <div>
                <form>
                    <h2>Conecte-se</h2>

                    <label htmlFor="usuario">Usuário</label>
                    <input
                        type="text"
                        id="usuario"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                    />

                    <label htmlFor="senha">Senha</label>
                    <input
                        type="password"
                        id="senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />

                    <button type="submit">Entrar</button>

                    <p style={{ marginTop: "10px", textAlign: "center" }}>
                        Não tem conta? <Link to="/cadastro">Cadastre-se</Link>
                    </p>
                </form>
            </div>

        </section>
    );
}