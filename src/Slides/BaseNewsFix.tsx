import VerticalSlide from '../Components/Slides/VerticalSlide'
import Card from '../Components/Slides/Card'

export default function BaseNewsFix() {
    const getNewsHeader = () => {
        return (
            <>
                <h2>Les nouveautées <span className="badge secondary">v1.0.0</span></h2>
                <h4>Corrections</h4>
            </>
        )
    }

    return (
        <section>
            <VerticalSlide header={getNewsHeader()}>
                <Card title="Mentions légales" fragment>
                    <p>Les URLS sont maintenant correctes.</p>
                </Card>
            </VerticalSlide>
            <VerticalSlide header={getNewsHeader()}>
                <Card title="AdicoMenu">
                    <p>Correction RGAA, navigation au clavier.</p>
                </Card>
            </VerticalSlide>
        </section>
    )
}
