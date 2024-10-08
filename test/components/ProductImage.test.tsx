import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard, ProductImage } from '../../src/components';
import { product2 } from '../data/product';

describe('ProductImage', () => {
  test('debe de mostrar el componente correctamente con la imagen personalizado', () => {
    const wrapper = renderer.create(
      <ProductImage img="https://image.jpg" className="custom-image" />
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('debe de mostrar el componente con la imagen del producto', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>
        {() => <ProductImage img={product2.img} />}
      </ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
