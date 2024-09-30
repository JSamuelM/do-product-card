import React, { useContext } from 'react';
import { ProductContext } from './ProductCard';
import NoImage from '../assets/no-image.jpg';

import styles from '../styles/styles.module.css';

export interface ProductImageProps {
  img?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const ProductImage = ({
  img = '',
  className,
  style,
}: ProductImageProps) => {
  const { product } = useContext(ProductContext);

  return (
    <img
      className={`${styles.productImg} ${className}`}
      src={img || product.img || NoImage}
      style={style}
      alt="Product Image"
    />
  );
};
