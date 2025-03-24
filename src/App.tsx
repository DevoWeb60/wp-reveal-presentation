import Wordpress from "./Slides/Wordpress"
import BaseNewsOptions from "./Slides/BaseNewsOptions"
import BaseNewsFeatures from "./Slides/BaseNewsFeatures"
import BaseNewsBlocks from "./Slides/BaseNewsBlocks"
import BaseNewsFix from "./Slides/BaseNewsFix"
import BaseNewsCustomize from "./Slides/BaseNewsCustomize"
import AdicoHookBefore from "./Slides/AdicoHook/Before"
import AdicoHookAfter from "./Slides/AdicoHook/After"

function App() {

    return (
        <>
            <Wordpress />
            <section data-auto-animate>
                <h2>Le thème de base</h2>
                <p>développé en interne à l'Adico.</p>
                <p className="fragment">Il a pour objectif de fournir un ensemble de fonctionnalités communes à toutes les offres.</p>
            </section>
            <section data-auto-animate>
                <h2>Le thème de base</h2>
                <p>Petit tour de la version bêta. <code>v0.0.1</code></p>
            </section>
            <BaseNewsOptions />
            <BaseNewsFeatures />
            <BaseNewsBlocks />
            <BaseNewsFix />
            <BaseNewsCustomize />
            <section data-auto-animate>
                <h2>Adico Hook</h2>
                <AdicoHookBefore />
            </section>
            <section data-auto-animate>
                <h2>Adico Hook</h2>
                <h3>2 cas de figures ; soit : </h3>
                <ul>
                    <li className="fragment">Je modifie le thème enfant pour forcer l'intégration du nouveau bouton</li>
                    <li className="fragment">Je laisse comme ça mais le thème n'aura pas de bouton</li>
                </ul>
            </section>
            <section data-auto-animate>
                <h2>Adico Hook</h2>
                <h3>2 cas de figure. Soit : </h3>
                <ul>
                    <li>Je modifie le thème enfant.... <strong className="color secondary">On passe trop de temps. </strong></li>
                    <li>Je laisse comme ça... <strong className="color danger">On commence à créer un décalage entre les sites.</strong></li>
                </ul>
            </section>
            <section data-auto-animate>
                <h2 style={{ marginBottom: "-70px" }}>Adico Hook</h2>
                <AdicoHookAfter />
            </section>
            <section data-auto-animate>
                <h2>C'est tout !</h2>
                <h3 className="color secondary">Des questions, suggestions ?</h3>
            </section>
        </>
    )
}

export default App
