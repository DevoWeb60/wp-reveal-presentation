import React from 'react'
import Code from '../Components/Slides/Code'

export default function Wordpress() {
  return (
    <>
     <section data-auto-animate>
                <h2>Découverte du Thème de base</h2>
                <p>v1.0.0</p>
                <p className="fragment">Mais avant...</p>
                <h2 className="fragment">Rappel sur WordPress</h2>
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
                    <li className="fragment">Thèmes parent <code>(themes)</code></li>
                    <li className="fragment">Thème enfant (si activé)</li>
                </ol>
            </section>
            <section data-auto-animate>
                <h2>Les hooks</h2>
                <p>Injection de code pour modifier le comportement de WordPress.</p>
                <h4 className="fragment">Ils sont classés en deux catégories : </h4>
                <ul>
                    <li className="fragment">Action Hooks</li>
                    <li className="fragment">Filter Hooks</li>
                </ul>
            </section>
            <section data-auto-animate>
                <h2>Action Hooks</h2>
                <p>Exécution de code à un moment précis dans le cycle d'exécution de WordPress.</p>
                <Code fragment>
                    {`
                        add_action('init', function(){
                            echo "Hello World";
                        });
                    `}
                </Code>
            </section>
            <section data-auto-animate>
                <h2>Filter Hooks</h2>
                <p>Modification de valeur.</p>
                <Code fragment>
                    {`
                        add_filter('the_title', function($title){
                            return $title . " - Mon site";
                        });
                    `}
                </Code>
            </section>
    </>
  )
}
