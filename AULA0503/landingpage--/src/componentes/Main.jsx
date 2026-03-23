import imgMusculacao from '../assets/img/musculacao.jpg';
import imgCardio from '../assets/img/corrida.jpg';
import imgYoga from '../assets/img/yoga.jpg';

export default function Main() {
    return (
        <main>
            <section id="home">
                <h2><span>Transforme seu corpocom a </span>Fofitness</h2>
                <p>A academia perfeita para quem deseja sáude, diversão e um shpae incrível!</p>
                <button>Começar Agora</button>
            </section>
            <section id="sobre">
                <h2>Sobre Nós</h2>
                <p>Somos uma academia focada em perda de peso com sáude, bem-estar e sem dietas mirabolantes. Nosso lema é "Vem para cá e afine igual um palitinho".</p>
                </section>
                <section id="modalidades">
                    <div className="exercicio">
                        <h3>Musculação</h3>
                        <img src={imgMusculacao} alt="" />
                    </div>
                    <div className="exercicio">
                        <h3>Cardio</h3>
                        <img src={imgCardio} alt="" />
                    </div>
                    <div className="exercicio">
                        <h3>Yoga</h3>
                        <img src={imgYoga} alt="" />
                    </div>
                    </section>

                    <section id="Planos">
                        <h2>Planos e Preços</h2>
                        <div className="tabela-planos">
                            <h3>Básico</h3>
                            <p className="preco">R$ 79,99/mês</p>
                            <ul>
                                <li>Acesso à musculação</li>
                                <li>Aulas coletivas limitadas</li>
                                <li>horário Livre</li>
                            </ul>
                        </div>
                        <div className="plano destaque">
                            <h3>Premium</h3>
                            <p className="preco">R$ 129,99/mês</p>
                            <ul>
                                <li>Acesso total</li>
                                <li>Personal Trainer</li>
                                <li>Yoga e Funcional</li>
                            </ul>
                        </div>
                        <div className="plano">
                            <h3>Vip</h3>
                            <p className="preco">R$ 199,99/mês</p>
                            <ul>
                                <li>Personal exclusivo</li>
                                <li>Nutricionista</li>
                                <li>Acompnhamento mensal</li>
                                <li>Bom dia da(o) atendente</li>
                            </ul>
                        </div>
                    </section>
                    <selection id="depoimentos">
                        <h2>O que nossos alunos dizem</h2>
                        <p>"A melhor academia de Mirandópolis, ambiente confortável, climatizado e acessível."</p>
                        <span>John Doe</span>
                        <div className="depoimento">
                        </div>
                        <div className="depoimento">
                            <p>"Professores atenciosos, estrutura impecável e o melhor, tem ar ar condicionado!"</p>
                            <span>Jane Smith</span>
                        </div>
                 </selection>
                 <section id="contato">
                    <h2>Entre em Contato</h2>
                    <form action="">
                        <input type="text" placeholder="Seu nome" />
                        <input type="email" placeholder="Seu email" />
                        <textarea name=""id=""placeholder="Mensagem"></textarea>
                        <button type="submit">Enviar</button>
                    </form>
                 </section>
        </main>
    )
}