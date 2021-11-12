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
            rel="stylesheet"
            href="https://cloud.typography.com/6929016/7418832/css/fonts.css"
          />

          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />

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
