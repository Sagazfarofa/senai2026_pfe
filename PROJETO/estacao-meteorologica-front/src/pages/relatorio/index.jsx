
import Header from "../../components/header";

export default function Relatorio() {
    const leituras = [
        {
            horario: "12:00",
            qualidadeAr: "Boa",
            iqa: 42,
            temperatura: "25°C",
            umidade: "68%",
        },
        {
            horario: "13:00",
            qualidadeAr: "Boa",
            iqa: 42,
            temperatura: "32°C",
            umidade: "68%",
        },
        {
            horario: "14:00",
            qualidadeAr: "Boa",
            iqa: 42,
            temperatura: "32°C",
            umidade: "68%",
        },
        {
            horario: "20:00",
            qualidadeAr: "Boa",
            iqa: 42,
            temperatura: "20°C",
            umidade: "68%",
        },
    ];

    return (
        <div className="container">
            <Header />

            <h2>Relatório da Estação Meteorológica</h2>
            <p>Monitoramento da temperatura e umidade em tempo real</p>

            <section className="graficos">
                {/* gráficos aqui */}
            </section>

            <section className="tabela">
                <table>
                    <thead>
                        <tr>
                            <th>Horário</th>
                            <th>Qualidade do Ar</th>
                            <th>IQA</th>
                            <th>Temperatura</th>
                            <th>Umidade</th>
                        </tr>
                    </thead>

                    <tbody>
                        {leituras.map((item, index) => (
                            <tr key={index}>
                                <td>{item.horario}</td>
                                <td>{item.qualidadeAr}</td>
                                <td>{item.iqa}</td>
                                <td>{item.temperatura}</td>
                                <td>{item.umidade}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
}
