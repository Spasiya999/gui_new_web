import React from 'react'

function MetaData({metadata = {}}) {
    return (
        <>
            <title>{metadata?.title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content={metadata?.description} />
            <link rel="canonical" href={metadata?.canonical || "https://guisrilanka.com/"} />
            <meta name="robots" content="index, follow" />
            <meta property="og:title" content="GUI Solutions Sri Lanka" />
            <meta property="og:site_name" content="GUI Solutions Sri Lanka" />
            <meta property="og:url" content="https://guisrilanka.com/" />
            <meta property="og:description" content="GUI Solutions Sri Lanka" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="https://guisrilanka.com/images/app/og-image.png" />
        </>
    )
}

export default MetaData