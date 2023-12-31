import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import {mobile} from '../responsive'
import { Link } from 'react-router-dom';

const Container = styled.div`
  height: 60px;
  ${mobile({ height : "50px"})}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding : "10px 0px"})}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display : "none"})}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width : "50px"})}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize : "24px"})}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center"})}    // Shifts the item at end to the flex box
`;

const MenuItem = styled.div`
  font-size: 14px;
  margin-left: 25px;
  cursor: pointer;
  ${mobile({ fontSize: "12px", marginLeft : "10px"})} 
`;
const StyledLink = styled(Link)`
  font-size: 14px;
  margin-left: 25px;
  text-decoration: none;
  color: black;
  cursor: pointer;
  ${mobile({ fontSize: "12px", marginLeft : "10px"})} 
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
      <Left>
        <Language>EN</Language>
        <SearchContainer>
            <Input placeholder='Search'/>
            <Search style={{color:"gray", fontSize:16}}/>
        </SearchContainer>
      </Left>
      <Center><Logo>Trendy</Logo></Center>
      <Right>
        <MenuItem><StyledLink to='../pages/Register'>REGISTER</StyledLink></MenuItem>
        <MenuItem><StyledLink to='../pages/login'>SIGN IN</StyledLink></MenuItem>
        <MenuItem>
          <StyledLink to='/cart'>
            <Badge badgeContent={4} color="primary">  {/*4 indicates the number of element added in shopping cart*/}
              <ShoppingCartOutlined />
          </Badge>
          </StyledLink>
        </MenuItem>
      </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
