import VerticalSlide from '../Components/Slides/VerticalSlide'
import Card from '../Components/Slides/Card'

export default function BaseNewsOptions() {
    const getNewsHeader = () => {
        return (
            <>
                <h2>Les nouveautées <span className="badge secondary">v1.0.0</span></h2>
                <h4>Option de thème</h4>
            </>
        )
    }

    return (
        <section>
            <VerticalSlide header={getNewsHeader()}>
                <Card title="Maintenance" fragment>
                    <p>Système de maintenance intégré.</p>
                </Card>
            </VerticalSlide>
            <VerticalSlide header={getNewsHeader()}>
                <Card title="Sous pages">
                    <p>Les options de thème sont divisées en sous pages.</p>
                </Card>
            </VerticalSlide>
            <VerticalSlide header={getNewsHeader()}>
                <Card title="Chatbot">
                    <p>Intégration simplifiée.</p>
                </Card>
            </VerticalSlide>
            <VerticalSlide header={getNewsHeader()}>
                <Card title="WP_DEBUG">
                    <p>Gérable depuis l'interface.</p>
                </Card>
            </VerticalSlide>
            <VerticalSlide header={getNewsHeader()}>
                <Card title="Extrait de page">
                    <p>Gestion de la longueur de l'extrait de page et post.</p>
                </Card>
            </VerticalSlide>
            <VerticalSlide header={getNewsHeader()}>
                <Card title="Retrait d'éléments">
                    <ul>
                        <li>Bloc de configuration SMTP</li>
                        <li className="fragment">Désactivation du thème</li>
                    </ul>
                </Card>
            </VerticalSlide>
        </section>
    )
}
