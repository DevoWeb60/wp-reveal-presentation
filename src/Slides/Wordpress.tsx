import React from 'react'
import Code from '../Components/Slides/Code'
import Notes from '../Components/Notes'
import Alert from '../Components/Slides/Alert'

export default function Wordpress() {
    return (
        <>
            <section data-auto-animate>
                <h2 className="title">Découverte du Thème de base</h2>
                <code>v1.0.0</code>
                <p className="fragment">Mais avant...</p>
                <h2 className="fragment title">Rappel sur WordPress</h2>
                <Notes>
                    <p><code>v1.0.0</code> parce que c'est la version aboutie.</p>
                    <p><code>v0.0.1</code> était la version initiale, mais une sorte de version bêta.</p>
                </Notes>
            </section>
            <section data-auto-animate>
                <h2>Rappel sur WordPress</h2>
                <h4>Cycle d'exécution</h4>
            </section>
            <section data-auto-animate>
                <h4 style={{ fontSize: "200%" }}>Cycle d'exécution</h4>
                <ol>
                    <li className="fragment">Configuration <code>(wp-config.php)</code></li>
                    <li className="fragment">Coeur de WordPress <code>(wp-settings.php)</code></li>
                    <li className="fragment">Must-Use Plugins <code>(mu-plugins)</code></li>
                    <li className="fragment">Extensions <code>(plugins)</code></li>
                    <li className="fragment">Thème parent activé <code>(themes)</code></li>
                    <li className="fragment">Thème enfant, si activé <code>(themes)</code></li>
                </ol>
            </section>
            <section data-auto-animate>
                <h2>Les hooks</h2>
                <p>Injection de code pour modifier le comportement de WordPress.</p>
                <h4 className="fragment">Ils sont classés en deux catégories : </h4>
                <ul>
                    <li className="fragment color tertiary">Action Hooks</li>
                    <li className="fragment color tertiary">Filter Hooks</li>
                </ul>
            </section>
            <section data-auto-animate>
                <h2>Action Hooks</h2>
                <p>Exécution de code à un moment précis dans le cycle d'exécution de WordPress.</p>
                <Code fragment>
                    {`
                        add_action('init', function(){
                            echo "Hello World";
                        }, 10);
                    `}
                </Code>
                <p className="fragment">
                    <code>init</code> : entre la fin du chargement du thème <code>after_setup_theme</code> et le chargement complet de WordPress <code>wp_loaded</code>.
                </p>
                <Alert title="Important !" icon="ri-error-warning-fill">
                    <p>Une action peut être également exécutée suite à un évènement.
                        <br />
                        Exemple : <code>customize_after_save</code></p>
                </Alert>
                <Notes>
                    <h2>Initialisation</h2>
                    <ul>
                        <li><code>muplugins_loaded</code> - Chargement des Must-Use plugins</li>
                        <li><code>plugins_loaded</code> - Chargement de tous les plugins</li>
                        <li><code>setup_theme</code> - Avant le chargement du thème</li>
                        <li><code>after_setup_theme</code> - Après le chargement du thème</li>
                        <li><code>init</code> - Initialisation de WordPress</li>
                        <li><code>wp_loaded</code> - WordPress complètement chargé</li>
                    </ul>
                    <h2>Requête</h2>
                    <ul>
                        <li><code>parse_request</code> - Analyse de la requête</li>
                        <li><code>send_headers</code> - Avant l'envoi des headers</li>
                        <li><code>parse_query</code> - Analyse de la requête WP_Query</li>
                        <li><code>pre_get_posts</code> - Avant l'exécution de la requête principale</li>
                    </ul>
                    <h2>Template</h2>
                    <ul>
                        <li><code>template_redirect</code> - Avant le chargement du template</li>
                        <li><code>get_header</code> - Avant le chargement du header</li>
                        <li><code>wp_head</code> - Dans la balise head</li>
                        <li><code>wp_body_open</code> - Juste après l'ouverture de la balise body</li>
                        <li><code>loop_start</code> - Début de la boucle WordPress</li>
                        <li><code>loop_end</code> - Fin de la boucle WordPress</li>
                        <li><code>get_footer</code> - Avant le chargement du footer</li>
                        <li><code>wp_footer</code> - Avant la fermeture de la balise body</li>
                    </ul>
                    <h2>Administration</h2>
                    <ul>
                        <li><code>admin_menu</code> - Construction du menu d'administration</li>
                        <li><code>admin_init</code> - Initialisation de l'administration</li>
                        <li><code>admin_head</code> - Dans le head de l'admin</li>
                        <li><code>admin_footer</code> - Dans le footer de l'admin</li>
                    </ul>
                    <h2>Sauvegarde/Modification</h2>
                    <ul>
                        <li><code>save_post</code> - Lors de la sauvegarde d'un article</li>
                        <li><code>pre_post_update</code> - Avant la mise à jour d'un article</li>
                        <li><code>post_updated</code> - Après la mise à jour d'un article</li>
                        <li><code>deleted_post</code> - Après la suppression d'un article</li>
                    </ul>
                    <h2>Commentaires</h2>
                    <ul>
                        <li><code>pre_comment_on_post</code> - Avant l'ajout d'un commentaire</li>
                        <li><code>comment_post</code> - Après l'ajout d'un commentaire</li>
                        <li><code>wp_insert_comment</code> - Lors de l'insertion d'un commentaire</li>
                        <li><code>delete_comment</code> - Lors de la suppression d'un commentaire</li>
                    </ul>
                    <h2>Shutdown</h2>
                    <ul>
                        <li><code>shutdown</code> - Juste avant que PHP termine l'exécution</li>
                    </ul>
                </Notes>
            </section>
            <section data-auto-animate>
                <h2>Filter Hooks</h2>
                <p>Modification de valeur.</p>
                <Code fragment>
                    {`
                        add_filter('the_title', function($title){
                            return $title . " - Mon site";
                        }, 10);
                    `}
                </Code>
                <Code fragment>
                    {`
                        <h1><?php the_title(); ?></h1>
                    `}
                </Code>
                <Code fragment language='html'>
                    {`
                        <h1>Mon titre - Mon site</h1>
                    `}
                </Code>
                <Notes>
                    <p>Chaque filtre fournit un paramètre en entrée et doivent retourne une valeur.</p>
                    <code>$title</code> : retourne le titre du post ou de la page courante.

                </Notes>
            </section>
        </>
    )
}
