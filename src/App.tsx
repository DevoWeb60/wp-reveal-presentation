import Wordpress from "./Slides/Wordpress"
import BaseNewsOptions from "./Slides/BaseNewsOptions"
import BaseNewsFeatures from "./Slides/BaseNewsFeatures"
import BaseNewsBlocks from "./Slides/BaseNewsBlocks"
import BaseNewsFix from "./Slides/BaseNewsFix"
import BaseNewsCustomize from "./Slides/BaseNewsCustomize"

function App() {

    return (
        <>
            <Wordpress />
            <section data-auto-animate>
                <h2>Le thème de base</h2>
                <p>développé en interne à l'Adico.</p>
                <p className="fragment">Il a pour objectif de fournir un ensemble de fonctionnalités communes à toutes les offres.</p>
            </section>
            <BaseNewsOptions />
            <BaseNewsFeatures />
            <BaseNewsBlocks />
            <BaseNewsFix />
            <BaseNewsCustomize />
        </>
    )
}

export default App
