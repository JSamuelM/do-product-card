import React from 'react'
import { Props as ProductCardProps } from '../components/ProductCard'
import { ProductTitleProps as ProductTitleProps } from '../components/ProductTitle'
import { ProductImageProps as ProductImageProps } from '../components/ProductImage'
import { Props as ProductButtonsProps } from '../components/ProductButtons'

export interface Product {
  id: string
  title: string
  img?: string
}

export interface ProductContextProps {
  counter: number
  product: Product
  maxCount?: number
  increaseBy: (value: number) => void
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps) : React.JSX.Element;
  Buttons: (Props: ProductButtonsProps) => React.JSX.Element;
  Image: (Props: ProductImageProps) => React.JSX.Element;
  Title: (Props: ProductTitleProps) => React.JSX.Element;
}

export interface onChangeArgs {
  product: Product;
  count: number;
}

export interface ProductInCart extends Product {
  count: number
}

export interface InitialValues {
  count?: number
  maxCount?: number
}

export interface ProductCardHandlers {
  count: number
  isMaxCountReached: boolean
  maxCount?: number
  product: Product

  increaseBy: (value: number) => void
  reset: () => void
}
