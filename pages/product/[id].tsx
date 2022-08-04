import React, { useState, useEffect } from 'react'
//import { useRouter } from 'next/router'
import { GetStaticPaths, GetStaticProps } from 'next'

import Layout from '@components/Layout/Layout'
import ProductSummary from '@components/ProductSummary/ProductSummary'

// PAGINA DINÁMICA
// build-time, nextjs tiene que saber de antemano las paginas que se necesitaran, eso lo hacemos con getStaticPaths, le decimos que paginas va a tener

export const getStaticPaths: GetStaticPaths = async () => { // le decimos las paginas que vamos a generar de forma estática

  const response = await fetch('https://platzi-avo.vercel.app/api/avo')
  const { data: productList }: TAPIAvoResponse = await response.json()
  const paths = productList.map(({ id }) => ({
    params: {
      id
    }
  }))
  // Lo de arriba es lo mismo
  // const paths = productList.map((avo)=> ({
  //   params:{
  //     id: avo.id
  //   }
  // }))
  return {
    paths,
    // incremental static generation (hace que cualquier pagina que no se especifique en los paths, da un 404)
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string
  const response = await fetch(`https://platzi-avo.vercel.app/api/avo/${id}`)
  const product: TProduct = await response.json()

  return {
    props: {
      product,
    }
  }
}

const ProductPage = ({ product }: { product: TProduct }) => {
  // const { query } = useRouter()
  // const [product, setProduct] = useState<TProduct | null>(null)

  // CLIENT-SIDE RENDERING
  // useEffect(() => {
  //   if (query.id) { // si existe un id en la url..
  //     window
  //       .fetch(`/api/avo/${query.id}`) // llamamos a la api
  //       .then((response) => response.json()) // procesamos el response
  //       .then((data: TProduct) => {
  //         setProduct(data) // guardamos el response en el estado product
  //       })
  //   }
  // }, [query.id]) // si cambia la url, vuelve a ejecutar el efecto

  return (
    <Layout>
      {product == null ? null : <ProductSummary product={product} />}
    </Layout>
  )
}

export default ProductPage
