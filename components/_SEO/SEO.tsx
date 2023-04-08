import Head from 'next/head'
import React from 'react'

const SEO: React.FC<SEOProps> = ({ description, keywords, title }) => (
  <Head>
    <title>{title}</title>
    <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
    <link rel="shortcut icon" href="/favicon.svg" />
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords?.join(', ')} />
    <meta property="og:type" content="website" />
    <meta name="og:title" property="og:title" content={title} />
    <meta name="og:description" property="og:description" content={description} />
    <meta property="og:site_name" content="" />
    <meta property="og:url" content="" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:site" content="" />
    {/* <meta name='twitter:creator' content='@waves' /> */}
    <meta name="twitter:image" content="" />
    <meta property="og:image" content="" />
    <link rel="icon" type="image/png" href="/icons/icon-72x72.png" />
    <link rel="apple-touch-icon" type="image/png" href="/icons/icon-72x72.png" />
    {/* <script async src='https://www.googletagmanager.com/gtag/js?id=UA-171177495-4'></script>
    <script
      dangerouslySetInnerHTML={{
        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-171177495-4');
              `,
      }}
    /> */}
  </Head>
)

export type SEOProps = {
  description?: string
  // lang?: string
  // meta?: any[]
  keywords?: string[]
  title: string
}

SEO.defaultProps = {
  description:
    'Power Protocol is a new open-source governance platform for communities. Built to disintermediate the greatest intermediary on the planet, government. With rewards for good decisions and penalties for bad, Power Protocol creates the first goal based governance system.',
  keywords: [
    'decentralized',
    'governance',
    'community',
    'web3',
    'ecosystem',
    'blockchain',
    'dao',
    'smart',
    'contracts',
    'ethereum',
    'collaboration',
    'distributed',
    'ledger',
    'technology',
    'internet',
  ],
}

export default SEO
