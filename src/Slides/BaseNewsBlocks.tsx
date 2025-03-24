import VerticalSlide from '../Components/Slides/VerticalSlide'
import Card from '../Components/Slides/Card'
import alertImg from '../images/blocks/alerte.png'
import colonneImg from '../images/blocks/colonne.png'
import pdfImg from '../images/blocks/pdf.png'
import tiroirImg from '../images/blocks/tiroir.png'
import Notes from '../Components/Notes'

export default function BaseNewsBlocks() {
    const getNewsHeader = () => {
        return (
            <>
                <h2>Les nouveautées <span className="badge secondary">v1.0.0</span></h2>
                <h4>Blocks</h4>
            </>
        )
    }

    return (
        <section>
            <VerticalSlide header={getNewsHeader()}>
                <Card title="Mise en avant / Alertes" fragment>
                    <p>Utilise les couleurs de la palette du site.</p>
                    <img src={alertImg} alt="Mise en avant / Alertes" className="fragment" />
                </Card>
                <Notes>
                    <p>Pas de problème avec les couleurs classique, vert, rouge, jaune, bleu.</p>
                    <p>Utilise les niveaux primaire, secondaire et tertiaire pour mettre en avant.</p>
                </Notes>
            </VerticalSlide>
            <VerticalSlide header={getNewsHeader()}>
                <Card title="Sidebar">
                    <p>Désactivé pour le moment.</p>
                </Card>
            </VerticalSlide>
            <VerticalSlide header={getNewsHeader()}>
                <Card title="Tiroir">
                    <p>Refonte et amélioration de l'UX</p>
                    <img src={tiroirImg} alt="Tiroir" className="fragment" />
                </Card>
            </VerticalSlide>
            <VerticalSlide header={getNewsHeader()}>
                <Card title="Fichier PDF">
                    <p>Refonte et amélioration de l'UX.</p>
                    <img src={pdfImg} alt="Fichier PDF" className="fragment" />
                </Card>
                <Notes>
                    <ul>
                        <li>Affiche que les PDF (pour le moment). Voir pour une évolution future.</li>
                        <li>Reprend et formatte comme il peut le titre du fichier PDF.</li>
                    </ul>
                </Notes>
            </VerticalSlide>
            <VerticalSlide header={getNewsHeader()}>
                <Card title="Colonne stylisé">
                    <p>Ajout d'une bordure pour mieux distinguer les colonnes.</p>
                    <img src={colonneImg} alt="Colonne stylisé" className="fragment" />
                </Card>
            </VerticalSlide>
        </section>
    )
}
