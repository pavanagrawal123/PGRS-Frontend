import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/css/materialize.min.css" />
                    <link rel="stylesheet" href="/_next/static/style.css" />
                    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/js/materialize.min.js"></script>
                </Head>
                <body style={{ margin: '0px' }}>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}