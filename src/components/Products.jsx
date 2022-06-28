import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { publicRequest } from '../axiosInstance';
import ProductCard from './ProductCard';
import { mobile } from '../responsive';
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${mobile({ flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',})}
  margin: 30px;
`;
const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicRequest.get(
          cat ? `/products?category=${cat}` : '/products'
        );
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [cat, filters, products]);

  useEffect(() => {
    if (sort === 'newest') {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === 'asc') {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      {cat
        ? filteredProducts.map((item) => (
            <ProductCard item={item} key={item._id} />
          ))
        : products
            .slice(0, products.length)
            .map((item) => <ProductCard item={item} key={item._id} />)}
    </Container>
  );
};

export default Products;
