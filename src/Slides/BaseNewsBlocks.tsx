import VerticalSlide from '../Components/Slides/VerticalSlide'
import Card from '../Components/Slides/Card'

export default function BaseNewsBlocks() {
    const getNewsHeader = () => {
        return (
            <>
                <h2>Les nouveautées <small>v1.0.0</small></h2>
                <h4>Blocks</h4>
            </>
        )
    }

    return (
        <section>
            <VerticalSlide header={getNewsHeader()}>
                <Card title="Mise en avant / Alertes" fragment>
                    <p>Utilise les couleurs de la palette du site.</p>
                </Card>
            </VerticalSlide>
            <VerticalSlide header={getNewsHeader()}>
                <Card title="Sidebar">
                    <p>Désactivé pour le moment.</p>
                </Card>
            </VerticalSlide>
            <VerticalSlide header={getNewsHeader()}>
                <Card title="Tiroir">
                    <p>Refonte et amélioration de l'UX</p>
                </Card>
            </VerticalSlide>
            <VerticalSlide header={getNewsHeader()}>
                <Card title="Fichier PDF">
                    <p>Refonte et amélioration de l'UX.</p>
                </Card>
            </VerticalSlide>
        </section>
    )
}
