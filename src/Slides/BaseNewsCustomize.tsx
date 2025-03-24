import VerticalSlide from '../Components/Slides/VerticalSlide'
import Card from '../Components/Slides/Card'
import Code from '../Components/Slides/Code'

export default function BaseNewsCustomize() {
    const getNewsHeader = () => {
        return (
            <>
                <h2 className="size sm">Les nouveautées <span className="badge secondary">v1.0.0</span></h2>
                <h4 className="size xs">Personnalisation</h4>
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
                <Card>
                    <div className="flex between">
                        <Code lines file="functions.php">
                            {
                                `Customize::register([
  "prefix" => "adico_",
  "max_quick_access" => 6,
]);
`
                            }
                        </Code>
                        <Code lines="1|2-6|7-14" file="functions.php">
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
                    </div>
                </Card>
            </VerticalSlide>
            <VerticalSlide header={getNewsHeader()}>
                <Card>
                    <div className="flex between">
                        <Code lines="1,2,|3|4-7|8|11|13-17|19-28|30-39" file="class/Customize.php">
                            {
                                `public static function customize_register(WP_Customize_Manager $manager)
{
    $logoSection = self::$prefix . 'logo-container';
    $manager->add_section($logoSection, [
        'title' => 'Global - Logo',
        'priority' => 30,
    ]);
    self::logoSection($manager, $logoSection);
}

public static function logoSection($manager, $logoSection)
{
    parent::imageControl($manager, 'logo', [
        "section" => $logoSection,
        "label" => 'Logo / Blason',
        "default" => '',
    ]);

    parent::rangeControl($manager, 'logo-width', [
        "section" => $logoSection,
        "label" => 'Taille - Largeur',
        "default" => 150,
        "input_attrs" => [
            'min' => 100,
            'max' => 250,
            'step' => 1,
        ],
    ]);

    parent::rangeControl($manager, 'logo-height', [
        "section" => $logoSection,
        "label" => 'Taille - Hauteur',
        "default" => 90,
        "input_attrs" => [
            'min' => 50,
            'max' => 150,
            'step' => 1,
        ],
    ]);
}
                                `
                            }
                        </Code>
                        <Code lines="1-5|7,8,21,22|9-14|15-20|24" file="customize/logo.php">
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
                    </div>
                </Card>
            </VerticalSlide>
            <VerticalSlide header={getNewsHeader()}>
                <Card>
                    <div className="flex between">
                        <div>
                            <Code lines="1,2,8|3-7" file="class/Customize.php">
                                {
                                    `public static function getLogo()
{
    return adico_to_object([
        "logo" => get_theme_mod(self::$prefix . 'logo'),
        "width" => get_theme_mod(self::$prefix . 'logo-width', 150),
        "height" => get_theme_mod(self::$prefix . 'logo-height', 90),
    ]);
}                                
                                        `
                                }
                            </Code>
                            <Code lines="2|5-8" file="header.php">
                                {
                                    `<?php 
    $logo = Customize::getLogo();
?>
    
<img 
    src="<?= esc_url($logo->logo); ?>" alt=""
    style="max-width:<?= $logo->width ?>px;max-height:<?= $logo->height ?>px;"
/>
                                    `
                                }
                            </Code>
                        </div>
                        <div>

                            <Code lines="2-3|6" file="header.php">
                                {
                                    `<?php 
    global $Customize;
    $logo = $Customize->getPanel("logo");
?>

<img src="<?= $logo->logo ?>" alt="<?= $logo->logo_alt ?>" />
                            `
                                }
                            </Code>
                            <div className="alert danger fragment">
                                <h2 className="title"><i className="ri-error-warning-fill"></i> Attention !</h2>
                                <p>Tout les tirets sont remplacé par des underscores.</p>
                            </div>
                        </div>
                    </div>
                </Card>
            </VerticalSlide>
        </section>
    )
}
