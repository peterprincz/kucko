import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="hu">
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta lang="hu" />
                <meta name="Description" content='Kiskenguru varázsműhely és lélekkuckó. Gyermek és ifjúsági szellemi-lelki tanácsadás, coaching és iskolaelőkészítő foglalkozások' />
                <meta name='robots' content='all' />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}