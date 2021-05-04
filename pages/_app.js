import Layout from '../components/Layout'
import Head from 'next/head'
// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Inkaddict | Norrköping</title>
        <meta name="keywords" content="tattoos" />
        <meta name="keywords" content="tatuering" />
        <meta name="keywords" content="tattoo" />
        <meta name="keywords" content="norrköping" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.2/css/all.min.css"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
          crossorigin="anonymous"
        ></script>
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
