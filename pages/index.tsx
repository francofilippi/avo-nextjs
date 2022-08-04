import React from 'react'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import fetch from 'isomorphic-unfetch'
import Layout from '@components/Layout/Layout'
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import ProductList from '@components/ProductList/ProductList'

// PAGINA ESTATICA

export const getStaticProps: GetStaticProps = async () => { // STATIC-SITE GENERATION (cuando hacemos npm build)

  // Esto es lo mismo que el fetch comentado abajo, con la diferencia que este es static-site rendering.
  // en el codigo fuente se ve igual que para el server-side pero este se ejecuta 1 UNICA VEZ, que es cuando hago el build.
  const response = await fetch('https://avo-nextjs-eta.vercel.app/api/avo')
  const { data: productList }: TAPIAvoResponse = await response.json()

  return {
    props: {
      productList,
    }
  }
}
// 
// export const getServerSideProps = async () => { // SERVER-SIDE RENDERING. Lo que esté dentro de la fx, sucederá en el servidor
// 
//   // Esto es lo mismo que el window fetch comentado abajo, con la diferencia que este es server-side rendering.
//   // si busco en el codigo fuente, voy a encontrar la info de los avocados!! ya que viene desde el servidor en el código fuente.
//   const response = await fetch('https://next-vercel-avo.vercel.app/api/avo')
//   const { data: productList }: TAPIAvoResponse = await response.json()

//   return {
//     props: {
//       productList,
//     }
//   }
// }

const HomePage = ({ productList }: { productList: TProduct[] }) => {

  // Este effecto se ejecuta en el navegador (CLIENT-SIDE RENDERING)
  // si busco en el codigo fuente, no voy a encontrar la info de los avocados, ya que se hace la peticion y
  // se ejecuta este efecto cuando se abre la pagina en el navegador. Dicho de otras palabras, desde el servidor no recibo la info de la API en el codigo fuente (o inicial)
  // useEffect(() => { // conecta a API. 
  //   window
  //     .fetch('/api/avo')
  //     .then((response) => response.json())
  //     .then(({ data }: TAPIAvoResponse) => {
  //       setProductList(data)
  //     })
  // }, []) // solo se va a llamar cuando el componente es renderizado

  return (
    <Layout>
      <KawaiiHeader />
      <section>
        <Link href="/yes-or-no">
          <a>¿Deberia comer un avo hoy?</a>
        </Link>
      </section>
      <ProductList products={productList} />
      <style>{`
        section {
          text-align: center;
          margin-bottom: 2rem;
        }
      `}</style>
    </Layout>
  )
}

export default HomePage
