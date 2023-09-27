import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #ffffff;
  display:flex;
  flex-direction: column;
 justify-content:space-between;
 color: #464646;
 padding-left: 100px;
 padding-right: 100px;
 padding-top: 10px;
 padding-bottom: 10px;
 box-shadow: 1px 0px 30px #646464;
`;

const RowTop = styled.div`
  font-size: 20px;
  margin:10px;
  display: flex;
`;

const RowBot = styled.div`
  font-size: 28px;
  margin:10px;
  display: flex;
  justify-content: space-between;
`;
const BotOrder = styled.div`
  font-size: 28px;
  font-weight: bold;

`;
const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;

`
const Button1 = styled.button`
    border: 3px solid #256a37;
    color:#256a37;
    background-color: transparent;
    border-radius: 30px;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 30px;
    padding-right: 30px;
    font-size: 18px;
    font-weight: bold;
    margin-left: 10px;
    margin-right:20px;
    cursor: pointer;
    &:hover {
        color:black;
        border: 3px solid black;
    }
    
`
const Button2 = styled.button`
    border: 3px solid #256a37;
    padding-top: 8px;
    padding-bottom: 8px;
    color:white;
    background-color: #256a37;
    border-radius: 30px;
    padding-left: 30px;
    padding-right: 30px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    &:hover {
        background-color: #215d31;
    }
`

const OrderDetailsContainer = () => {
  return (
    <Container>
      
      <RowTop>Order / Order 34234ABC </RowTop>
      <RowBot>
        <BotOrder>Order 34234ABC</BotOrder>
      <ButtonContainer>
        <Button1>Back</Button1>
        <Button2>Approve order</Button2>
      </ButtonContainer>
      </RowBot>
    </Container>
  );
};

export default OrderDetailsContainer;
