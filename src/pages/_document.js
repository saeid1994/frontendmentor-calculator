import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <body className="">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
