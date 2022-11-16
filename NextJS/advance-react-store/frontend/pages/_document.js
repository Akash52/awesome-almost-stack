import Document, { Html, Head, NextScript, Main } from 'next/document';

export default class MyDocumnet extends Document {
  render() {
    return (
      <Html lang="en-CA">
        {/* <Head></Head> */}
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
