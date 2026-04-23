import Header from "../../components/header";

export default function Dashboard() {
    return (
        <>
        <Header />
        <section className="cards">
                <div className="card">
                    <h6>Temperatura</h6>
                    <h2>32° C</h2>
                </div>
                <div className="card">
                    <h6>Umidade</h6>
                    <h2>47%</h2>
                </div>
                <div className="card">
                    <h6>Pressão Atmosférica</h6>
                    <h2>1013 hPa</h2>
                </div>
                <div className="card">
                    <h6>Vento</h6>
                    <h2>15 km/h</h2>
                </div>
        </section>

        <section className="graficos">
                <h6>Gráficos</h6>
                <div>
                    {/* colocar gráficos */}
                </div>
        </section>

        <section className="tabela">
                <h6>Leituras recentes</h6>
                <table>
                    <thead>
                        <tr>
                            <th>Horário</th>
                            <th>Temperatura</th>
                            <th>Umidade</th>
                            <th>Vento</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>10:00</td>
                            <td>32° C</td>
                            <td>47%</td>
                            <td>15 km/h</td>
                        </tr>
                        <tr>
                            <td>13:00</td>
                            <td>35° C</td>
                            <td>47%</td>
                            <td>15 km/h</td>
                        </tr>
                        <tr>
                            <td>01:00</td>
                            <td>22° C</td>
                            <td>49%</td>
                            <td>26 km/h</td>
                        </tr>
                    </tbody>
                </table>
        </section>
        </>
    )
}