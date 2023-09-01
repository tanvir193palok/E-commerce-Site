import { Link, useNavigate } from 'react-router-dom';
import {mobile} from '../responsive'
import styled from "styled-components";

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({ height: "20vh"})} 
`;

const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center ;
    width: 100%;
    height: 100%;
`;

const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
`;

const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color: gray;
    cursor: pointer;
    font-weight: 600;
`;

const CategoryItem = ({item}) => {

  const navigate = useNavigate();
  const handleButtonClick = ()=>{
      navigate('/products/:category');
  }

  return (
    <Container>
    <Link to={`/products/${item.category}`}>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button onClick={handleButtonClick}>SHOP NOW</Button>
      </Info>
      </Link>
    </Container>
  )
}

export default CategoryItem