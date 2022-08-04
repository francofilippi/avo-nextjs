import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
import Link from 'next/link'
import Image from 'next/image' // la etiqueta <Image> para optimizacion de carga de imagenes, nativo de next

type ProductListProps = {
  products: TProduct[]
}

const mapProductsToCards = (products: TProduct[]) =>
  products.map(({ name, id, price, image }) => (
    <Link key={id} href={`/product/${id}`} passHref>
      <Card>
        <Image src={image} width={333} height={333} />
        <Card.Content>
          <Card.Header>Price:</Card.Header>
          <Card.Meta style={{ color: 'dimgray' }}>
            <span>${price}</span>
          </Card.Meta>
        </Card.Content>
      </Card>
    </Link>
  ))

const ProductList = ({ products }: ProductListProps) => (
  <Card.Group itemsPerRow={2} stackable>
    {mapProductsToCards(products)}
  </Card.Group>
)

export default ProductList
