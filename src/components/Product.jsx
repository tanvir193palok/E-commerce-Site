import { Link } from "react-router-dom";
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components"

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    position: absolute;
    z-index: 3;
    align-items: center;
    justify-content: center;
    display: flex;
    transition: all 0.5s ease;
    cursor: pointer;
`;

const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;

    &:hover ${Info}{      //When hovering on a product the icons pop up
        opacity: 1;
    }
`;

const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`;

const Image = styled.img`
    height: 75%;
    z-index: 2;
`;

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;

    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`;

const Product = ({item}) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Link style={{ color: "black", textDecoration:"none"}} to='/cart'>
            <Icon>
                <ShoppingCartOutlined />
            </Icon>
        </Link>

        <Link style={{ color: "black", textDecoration:"none"}} to='/product/:id'>
            <Icon>
                <SearchOutlined />
            </Icon>
        </Link>

        <Icon>
            <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  )
}

export default Product
