import VerticalSlide from '../Components/Slides/VerticalSlide'
import Card from '../Components/Slides/Card'

export default function BaseNewsFeatures() {
    const getNewsHeader = () => {
        return (
            <>
                <h2>Les nouveautées <small>v1.0.0</small></h2>
                <h4>Fonctionnalités</h4>
            </>
        )
    }

    return (
        <section>
            <VerticalSlide header={getNewsHeader()}>
                <Card title="Connexion" fragment>
                    <p>Envoie de mail à la connexion. <code>Mon Service Sécurisé</code></p>
                </Card>
            </VerticalSlide>
            <VerticalSlide header={getNewsHeader()}>
                <Card title="Fonctions utilitaires">
                    <div className="txt-left">
                        <p><code>adico_get_default_image()</code> : Récupère l'image par défaut en fonction du type de contenu.</p>
                        <p className='fragment'><code>adico_format_phone_to_tel()</code> : Formatage du numéro de téléphone pour l'attribut <code>href</code>.</p>
                        <p className='fragment'><code>adico_is_not_city()</code> : Vérifie si il s'agit d'un syndicat ou d'une commune.</p>
                        <p className='fragment'><code>adico_get_page_by(string $property, string $value)</code> : Récupère une page selon la valeur d'une propriété.</p>
                        <p className='fragment'><code>adico_get_pages_by(string $property, string $value)</code> : Récupère les pages selon la valeur d'une propriété.</p>
                    </div>
                </Card>
            </VerticalSlide>
            <VerticalSlide header={getNewsHeader()}>
                <Card title="Autoloader">
                    <p>Norme PSR-4 avec Composer.</p>
                </Card>
            </VerticalSlide>
            <VerticalSlide header={getNewsHeader()}>
                <Card title="Tableau de bord">
                    <p>Meilleur suppression des widgets hors Adico.</p>
                </Card>
            </VerticalSlide>
            <VerticalSlide header={getNewsHeader()}>
                <Card title="Rôle : Collectivité">
                    <ul>
                        <li>Suppression des rôles inutiles</li>
                        <li className="fragment">Ajout des capacités nécessaires</li>
                        <li className="fragment">Renommage de Editeur à Collectivité</li>
                    </ul>
                </Card>
            </VerticalSlide>
            <VerticalSlide header={getNewsHeader()}>
                <Card title="Arborescence">
                    <p>Amélioration de l'arborescences des fichiers.</p>
                </Card>
            </VerticalSlide>
        </section>
    )
}
