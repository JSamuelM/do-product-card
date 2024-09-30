# Do-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### Samuel Mena

## Ejemplo
```JSX
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'do-product-card';
```
```JSX
<ProductCard
  product={product}
  initialValues={{
    count: 4,
    maxCount: 8
  }}
>
  {({ count, reset, maxCount, isMaxCountReached, increaseBy }) => (
    <>
      <ProductImage />
      <ProductTitle />
      <ProductButtons />
    </>
  )}
</ProductCard>
```