import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import { Remove, Add } from '@material-ui/icons';
import { mobile } from '../responsive';
import { userRequest } from '../axiosInstance';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/cartRedux';
import NavbarSticky from '../components/NavbarSticky';
import { formatRupiah } from '../formatRupiah';

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  margin-top: 100px;
  ${mobile({ padding: '10px', flexDirection: 'column' })}
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 80%;
  height: 70vh;
  object-fit: scale-down;
  ${mobile({ height: '40vh' })}
`;

const Info = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: '10px' })}
`;

const Title = styled.h1`
  font-weight: 300;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 200;
  font-size: 28px;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
  margin-right: 2px;
`;

const FilterContainer = styled.div`
  width: 50%;
  display: flex;
  margin: 30px 0px;
  justify-content: space-between;
  ${mobile({ width: '100%' })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
  font-size: 15px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: '100%' })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border: 1px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 1.5px solid #04d4f0;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #04d4f0;
    color: white;
  }
`;
const Product = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const [product, setProduct] = useState({});
  const [color, setColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await userRequest.get('/products/' + id);
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === 'decrease') {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      quantity < product.stock && setQuantity(quantity + 1);
    }
  };

  const handleCart = ()=>{
    dispatch(addProduct({...product, quantity, color, size}))
  }

  return (
    <Container>
      <NavbarSticky/>
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src={product.img} />
        </ImageContainer>
        <Info>
          <Title>{product.productName}</Title>
          <Desc>{product.description}</Desc>
          <Price>{formatRupiah(product.price)}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((c) => (
                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize defaultValue="" onChange={(e)=> setSize(e.target.value)}>
                <FilterSizeOption key="disabled" disabled selected={"choose size"}>choose size</FilterSizeOption>
                {product.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>

          <AddContainer>
            <AmountContainer>
              <Remove
                style={{ cursor: 'pointer' }}
                onClick={() => handleQuantity('decrease')}
              />
              <Amount>{quantity}</Amount>
              <Add
                style={{ cursor: 'pointer' }}
                onClick={() => handleQuantity('increase')}
              />
            </AmountContainer>
            <Button onClick={()=> handleCart()}>ADD TO CART</Button>
          </AddContainer>
        </Info>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Product;
