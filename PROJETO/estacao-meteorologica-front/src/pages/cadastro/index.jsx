import { useState } from 'react';
import Header from '../../components/header';

export default function Cadastro() {
    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [email, setEmail] = useState('');
    const [celular, setCelular] = useState('');
    const [documento, setDocumento] = useState('');

    return ( 
        <section className="container">
            <Header />
            <h2>Cadastro de dados pessoais</h2>

            <form>
                <label>Nome</label>
                <input 
                    type="text" 
                    placeholder="Nome completo"
                    value={nome} 
                    onChange={(e) => setNome(e.target.value)} 
                />

                <label>Endereço</label>
                <input 
                    type="text" 
                    placeholder="Endereço"
                    value={endereco} 
                    onChange={(e) => setEndereco(e.target.value)} 
                />

                <label>Email</label>
                <input 
                    type="email" 
                    placeholder="Email"
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />

                <label>Celular</label>
                <input 
                    type="text" 
                    placeholder="Celular"
                    value={celular} 
                    onChange={(e) => setCelular(e.target.value)} 
                />

                <label>Documento</label>
                <input 
                    type="text" 
                    placeholder="Documento"
                    value={documento} 
                    onChange={(e) => setDocumento(e.target.value)} 
                />

                <button type="submit">Salvar</button>
            </form>
        </section>
    );
}