import VerticalSlide from '../Components/Slides/VerticalSlide'
import Card from '../Components/Slides/Card'
import Code from '../Components/Slides/Code'

export default function BaseNewsCustomize() {
    const getNewsHeader = () => {
        return (
            <>
                <h2>Les nouveautées <small>v1.0.0</small></h2>
                <h4>Personnalisation</h4>
            </>
        )
    }

    return (
        <section>
            <VerticalSlide header={getNewsHeader()}>
                <Card title="Réseaux sociaux" fragment>
                    <p>Migré vers la page <code>Ma commune</code>/<code>Ma collectivité</code>.</p>
                </Card>
            </VerticalSlide>
            <VerticalSlide header={getNewsHeader()}>
                <Card title="Refonte de la DX">
                    <ol>
                        <li>Séparation en plusieurs fichiers</li>
                        <li className="fragment">Définition des <code>Panel</code>, <code>Section</code> via des <code>Class</code></li>
                        <li className="fragment">Ajout des champs avec une <code>Class</code></li>
                        <li className="fragment">Utilisation de <code>getPanel</code> pour récupérer les valeurs</li>
                    </ol>
                </Card>
            </VerticalSlide>
            <VerticalSlide header={getNewsHeader()}>
                <Card title="Exemple : functions.php">
                    <Code lines="1|2-6|7-14">
                        {
                            `
                            global $Customize;
                            $Customize = new Customize(
                                variables: [
                                    "MAX_QUICK_ACCESS" => 8,
                                ]
                            );
                            $Customize->registers([
                                "colors",
                                "logo",
                                "footer",
                                "quick-access",
                                "home-info",
                                "home-details",
                            ]);
                            `
                        }
                    </Code>
                </Card>
            </VerticalSlide>
            <VerticalSlide header={getNewsHeader()}>
                <Card title="Exemple : customize/logo.php">
                    <Code lines="1-5|7,8,21,22|9-14|15-20|24">
                        {
                            `
                            $section = new Section(
                                id: "logo",
                                title: "Global - Logotype",
                                priority: 10,
                            );

                            $section->addMultipleSettings(
                                [
                                    new Setting(
                                        id: "logo",
                                        control: "image",
                                        title: "Logo",
                                        section: $section,
                                    ),
                                    new Setting(
                                        id: "logo-alt",
                                        control: "text",
                                        title: "Texte alternatif",
                                        section: $section,
                                    )
                                ]
                            );

                            $this->addSection($section);
                            `
                        }
                    </Code>
                </Card>
            </VerticalSlide>
        </section>
    )
}
