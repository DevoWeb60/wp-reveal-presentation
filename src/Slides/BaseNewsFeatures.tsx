import VerticalSlide from '../Components/Slides/VerticalSlide'
import Card from '../Components/Slides/Card'
import Notes from '../Components/Notes'

export default function BaseNewsFeatures() {
    const getNewsHeader = () => {
        return (
            <>
                <h2>Les nouveautées <span className="badge secondary">v1.0.0</span></h2>
                <h4>Fonctionnalités</h4>
            </>
        )
    }

    return (
        <section>
            <VerticalSlide header={getNewsHeader()}>
                <Card title="Connexion">
                    <p>Envoie de mail à la connexion. <code>Mon Service Sécurisé</code></p>
                </Card>
            </VerticalSlide>
            <VerticalSlide header={getNewsHeader()}>
                <Card title="Déconnexion">
                    <p>Déconnexion automatique après 30 minutes d'inactivité. <code>Mon Service Sécurisé</code></p>
                </Card>
            </VerticalSlide>
            <VerticalSlide header={getNewsHeader()}>
                <Card title="Fonctions utilitaires">
                    <ul className="txt left">
                        <li><code>adico_get_default_image()</code> : Récupère l'image par défaut en fonction du type de contenu.</li>
                        <li className='fragment'><code>adico_format_phone_to_tel(string $phone)</code> : Formatage du numéro de téléphone pour l'attribut <code>href</code>.</li>
                        <li className='fragment'><code>adico_is_not_city()</code> : Vérifie si il s'agit d'un syndicat ou d'une commune.</li>
                        <li className='fragment'><code>adico_get_page_by(string $property, string $value)</code> : Récupère une page selon la valeur d'une propriété.</li>
                        <li className='fragment'><code>adico_get_pages_by(string $property, string $value)</code> : Récupère les pages selon la valeur d'une propriété.</li>
                    </ul>
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
                <Notes>
                    <h2>Attention !</h2>
                    <p>Il faudra checker lors des migrations car il y a certaines communes qui ont des rôles particuliers.</p>
                    <p>Voir pour développer ce qu'il faut pour gérer ça.</p>
                </Notes>
            </VerticalSlide>
            <VerticalSlide header={getNewsHeader()}>
                <Card title="Arborescence">
                    <p>Amélioration de l'arborescences des fichiers.</p>
                </Card>
            </VerticalSlide>
            <VerticalSlide header={getNewsHeader()}>
                <Card title="Restrictions">
                    <p>Gestion des restrictions sur le menu, adminbar, blocks, par rôle.</p>
                </Card>
            </VerticalSlide>
            <VerticalSlide header={getNewsHeader()}>
                <Card title="AdicoHook">
                    <ul>
                        <li>Permet la personnalisation plus précise pour le développement sur mesure.</li>
                        <li className="fragment">Création d'un hook automatique via <code>adico_template</code> et <code>adico_component</code>.</li>
                    </ul>
                </Card>
            </VerticalSlide>
        </section>
    )
}
