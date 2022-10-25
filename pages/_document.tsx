import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/** FavIcon */}
          {/** WebFont */}
          {/** stylesheets */}
          {/** scripts */}
          <meta property='og:title' content='Avocados types - Listing and pricing' />
          <meta property='og:image' content='https://i.ibb.co/3zrMGtm/avo-fan.png' />
          <meta property='og:description' content='A site to describe the different types of avocados and their average price in USD' />
          <meta property='og:url' content='https://avo-nextjs-eta.vercel.app/' />
          <meta property='og:image:width' content='1200' />
          <meta property='og:image:height' content='627' />
        </Head>
        <body className="my-body-class">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
