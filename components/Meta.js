import Head from 'next/head'
const Meta = ({title, keywords, description}) => {
    return (

        <Head>
            <meta name='viewport' content="width=device-width, initial-scale=1" />
            <meta name='keywords' content={keywords} />
            <meta name='description' content={description} />
            <meta charSet='utf_8' />
            <link rel='icon' href='/favicon.ico' />
            <title>{title}</title>


        </Head>

    )
}

Meta.defaultProps = {
    title: 'Esmasa Travaux',
    keywords: "Esmasa, Esmasa Travaux, construction, génie civil, construction maroc, construction casa, LA RÉNOVATION DE BÂTIMENTS DURABLES, construction casablanca, génie civil maroc, génie civil casa, géni civil casablanca, Terrassement, Remblai, Béton de Fondation, Béton d’élévation, Maçonnerie, Toiture en Béton, Toiture en autoportante, Etanchéité, Revêtement des sols et murs, Menuiseries, Travaux Enduisage, motif et peintur, Travaux d’électricité intérie, Travaux des descentes d’eau pluviale, Plomberie sanitaire-Protection Incendie, Climatisation- VMC, VRD - Aménagements extérieur, Travaux d’aménagement des espaces ver, Travaux d’éclairage publ, Travaux d’assainissement pour drainage d’eaux pluviales",
    description: 'LEADER DANS LA CONSTRUCTION ET LA RÉNOVATION DE BÂTIMENTS DURABLES'

}

export default Meta
