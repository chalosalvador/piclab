import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preload"
            href="https://cloud.typography.com/6929016/7418832/css/fonts.css"
            as="style"
            onLoad="this.onload=null;this.rel='stylesheet'"
          />
          <noscript>
            <link
              rel="stylesheet"
              href="https://cloud.typography.com/6929016/7418832/css/fonts.css"
            />
          </noscript>

          <link
            rel="preload"
            href="https://rsms.me/inter/inter.css"
            as="style"
            onLoad="this.onload=null;this.rel='stylesheet'"
          />
          <noscript>
            <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
          </noscript>

          <script
            src="https://kit.fontawesome.com/117bcfe378.js"
            crossOrigin="anonymous"
            async
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
