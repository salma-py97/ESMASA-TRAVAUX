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
    title: 'ESMASA Travaux',
    keywords: "Esmasa, Esmasa Travaux, esmasa travaux, esmasatravaux, ESMASA, ESMASA Travaux, esmasa construction maroc",
    description: 'LEADER DANS LA CONSTRUCTION ET LA RÉNOVATION DE BÂTIMENTS DURABLES'
}

export default Meta
