import React from "react";
import Head from "next/head";

interface Props {
    title?: string;
    name?: string;
}
const SiteHelmet: React.FC<Props> = ({ title, name }) => {
    const siteTitle = `${title || "Pokedex"} - ${name || ""}`;
    const author = 'Leonardo Louie Ordonez'

    return (
        <Head>
            {/* Standard meta tags */}
            {siteTitle && <title>{siteTitle}</title>}

            <meta property="twitter:image:type" content="image/jpeg" />
            <meta name="twitter:card" content="summary" />
            {author && <meta property="article:author" content={author} />}
            <meta name="theme-color" content="#fff" />
            <meta httpEquiv="Content-Type" content="text/html; charset=ISO-8859-1" />
        </Head>
    );
};


export default SiteHelmet;
