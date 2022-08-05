import React from 'react'
import { Basket } from '@components/SVGIcons'

type ShoppingCartIconProps = {
  cartCount: number
  name: string
}

const ShoppingCartIcon = ({ cartCount, name }: ShoppingCartIconProps) => {
  const showCartCount = () => {
    if (!cartCount) {
      return `(0)`
    }
    if (cartCount > 9) {
      return (
        <span>
          9<sup>+</sup>
        </span>
      )
    }
    return `(${cartCount})`
  }

  return (
    <div className="containerBasket">
      <Basket />
      <div className="text cartText">
        {` ${name} `}
        {showCartCount()}
      </div>
      <style>{`
        .containerBasket {
          display: flex;
          align-items: center;
        }
        .text {
          margin-left: 0.5rem;
        }
        .text span {
          font-size: smaller;
        }
        .cartText {
          color: white;
        }
      `}</style>
    </div>
  )
}

export default ShoppingCartIcon
