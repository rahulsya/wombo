import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <title>Wumbo</title>
        <meta name="description" content="Slicing with styled components" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        ></link>
        <meta name="title" content="example slicing with styled-components" />
        <meta name="description" content="build with next js " />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://wombo-e5y8.vercel.app/" />
        <meta
          property="og:title"
          content="example slicing with styled-components"
        />
        <meta property="og:description" content="build with next js " />
        <meta
          property="og:image"
          content="https://images.ctfassets.net/tn98a1n78hiq/1ZS0hpKodq7lGIgmq2SXzz/5018c3efdc5a9032b09ccd1fdaa12100/thumbnails.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://wombo-e5y8.vercel.app/" />
        <meta
          property="twitter:title"
          content="example slicing with styled-components"
        />
        <meta property="twitter:description" content="build with next js " />
        <meta
          property="twitter:image"
          content="https://images.ctfassets.net/tn98a1n78hiq/1ZS0hpKodq7lGIgmq2SXzz/5018c3efdc5a9032b09ccd1fdaa12100/thumbnails.png"
        ></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
