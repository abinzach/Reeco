import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { addOrder, approveOrder, editOrder, missingOrder, urgentOrder } from '../redux/orderSlice';
import Modal from './Modal';
import EditModal from './EditModal';






const Page = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:flex-start;
    align-items: center;
    background-color: #f5f5f5;
    width: 100vw;
    min-height: 100vh;
    
`

const OrderSummaryContainer = styled.div`
  
  display:flex;
  flex-direction: column;
  border: 1px solid #d4d4d4;
  border-radius: 15px;
  margin-top: 40px;
  width:90vw;
  height: 15vh;
  background-color: white;
 justify-content:space-between;
 color: #838383;
 padding-left: 10px;
 padding-right: 10px;
 padding-top: 10px;
 padding-bottom: 10px;

`;

const OrderSummaryInnerContainer = styled.div`
  background-color:transparent;
  display:flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #d4d4d4;
  width:100%;
  height: 100%;
  margin: 10px;
 color: #838383;

`;

const OrderElements = styled.div`
 border-right: 1px solid #d4d4d4;
 display: flex;
 flex-direction: column;
 width: 16%;
 margin-left: 30px;
  margin-right: 30px;
  height: 100%;
`;
const OrderElementsLast = styled.div`

 display: flex;
 flex-direction: column;
 width: 16%;
 margin-left: 30px;
  margin-right: 30px;
  height: 100%;
`;

const RowTitle = styled.div`
  font-size: 20px;
  margin-bottom:10px;
  display: flex;
`;

const RowDetails = styled.div`
  font-size: 25px;
  
  display: flex;
  justify-content: space-between;
  color:#464646 ;
  font-weight: 700;
`;

const TableContainer = styled.div`
  
  display:flex;
  flex-direction: column;
  border: 1px solid #d4d4d4;
  border-radius: 15px;
  margin-top: 40px;
  width:90vw;
  height: auto;
  background-color: white;
 justify-content:center;
 align-items: center;
 color: #838383;
 padding-left: 10px;
 padding-right: 10px;
 padding-top: 10px;
 padding-bottom: 30px;
 margin-bottom: 40px;

`;

const SearchbarButtonRow = styled.div`
    display: flex;
    width:95%;
    justify-content: space-between;
    margin: 40px;
    
`
const Searchbar = styled.input`
    background: transparent;
    border-radius: 30px;
    padding: 5px;
    width: 25vw;
    border:1px solid #b4b4b4;
    text-indent: 15px;
    font-size: 18px;
    

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
        color:#1a4c27;
        border: 3px solid #1a4c27;
    }
    
`
const Table= styled.table`
    width: 95%;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #cacaca;
    font-size: 20px;
    font-weight: 300;
    text-align: center;

`
const TableRow = styled.tr`
  border-bottom: 1px solid #ccc;
`;


const TableCell= styled.td`
     padding-top: 50px;
     padding-bottom: 50px;
     border-bottom: 1px solid #cacaca;
     max-width: 200px;

`
const ProductImageContainer = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
padding-left: 30px;
`
const Namediv = styled.div`
padding-left: 100px;
`

const StatusContainer=styled.div`
    display    : flex;
    height: 100%;
    width: 100%;
    justify-content: flex-end;
   
    
`
const CTAContainer=styled.div`
    display     :flex ;
    justify-content   :space-between;
    margin-right:50px;
`
const CTA = styled.div`
    margin-left: 10px;
    margin-right: 10px;
    cursor:pointer;
`
const Approved = styled.div`
    background:#4CAF50;
    color:white !important;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 5px;
    padding-bottom: 8px;
    border-radius: 80px;
    margin-right:50px;
`

const Urgent = styled.div`
    background:#d20000;
    color:white !important;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 5px;
    padding-bottom: 8px;
    border-radius: 80px;
    margin-right:50px;
    
`
const Missing = styled.div`
    background:#e85e09;
    color:white !important;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 5px;
    padding-bottom: 8px;
    border-radius: 80px;
    margin-right:50px;
`
const PriceUpdated = styled.div`
    background:#4CAF50;
    color:white !important;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 5px;
    padding-bottom: 8px;
    border-radius: 80px;
    margin-right:50px;
`

const OrderPage = () => {

      
    const [isModalOpen,setIsModalOpen]= React.useState(false)
    const [modalProduct,setModalProduct]= React.useState("")
    const [isEditModalOpen, setIsEditModalOpen] = React.useState(false);
  
    const orderData = {
        Supplier: 'East coast fruits and vegetables',
        Shipping_Date: 'Thu, Feb 10',
        Total: '$15000',
        Category: 'Fruits',
        Department: '3000-444-678',
        
      };
      const orderItems = useSelector(store=>store.orderList.orders);
      console.log('order items are ',orderItems);

      const dispatch=useDispatch()

      const handleAddItem = ()=>{
        dispatch(addOrder({
            
            "image":"https://imgs.search.brave.com/9kElagC-KyWFhMHXYp3jin3RLdsE8VvE2X_345cnChc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTU3/NTAzNzU5L3Bob3Rv/L2dyYXBlcy5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9VlFJ/cWlwanBkWWFCVUhX/QXdjMU41ekkwX0N0/OVlOcmhCQkRVZHly/YlppMD0",
            "name": "Grapes",
            "brand": "Elite",
            "price": 200,
            "quantity": 2,
            "total": 400,
            "status": ""
          }))
      }

      const handleApproveOrder = (product) =>{
        dispatch (approveOrder(product.id))
        console.log("order approved", product.id)
        console.log(product)
      }
      const handleMissingOrder = (product) => {
        // Dispatch the openModal action to open the modal
        setIsModalOpen(true)
        setModalProduct(product)
        console.log("in modal product is",product)
      };
      const handleEditOrder = (product) => {
        setModalProduct(product);
        setIsEditModalOpen(true);
      };
    
      return (
    <Page>
        <OrderSummaryContainer>
            <OrderSummaryInnerContainer>
            {Object.keys(orderData).map((key) => (
          <OrderElements key={key}>
            <RowTitle><b>{key}</b></RowTitle>
            <RowDetails>{orderData[key]}</RowDetails>
          </OrderElements>
        ))}
                <OrderElementsLast>
                    <RowTitle><b>Status</b></RowTitle>
                    <RowDetails>Awaiting your approval</RowDetails>
                </OrderElementsLast>
            </OrderSummaryInnerContainer>
        </OrderSummaryContainer> 

        <TableContainer>
            <SearchbarButtonRow>
                <Searchbar placeholder='Search'/>
                <Button1 onClick={handleAddItem}>Add item</Button1>
            </SearchbarButtonRow>   
            <Table>
            <thead style={{textIndent:"start"}}>
          <tr>
            <th>Product Name</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Status</th>
          </tr>
        </thead>  
        <tbody>
           
        {orderItems.map((product) => (
          <TableRow key={product.id}>
            <TableCell><ProductImageContainer><img width="80px" src={product.image} alt='product'></img><Namediv>{product.name}</Namediv></ProductImageContainer></TableCell>
            <TableCell>{product.brand}</TableCell>
            <TableCell>{product.price}</TableCell>
            <TableCell>{product.quantity}</TableCell>
            <TableCell>{product.price*product.quantity}</TableCell>
            <TableCell><StatusContainer>
            {product.status === "Approved" ? (
  <Approved>Approved</Approved>
) : product.status === "Missing-Urgent" ? (
  <Urgent>Missing-Urgent</Urgent>
) : product.status === "Missing" ? (
  <Missing>Missing</Missing>
) : product.status === "Price-Updated" ?(
  <PriceUpdated>Price-Updated</PriceUpdated>
):product.status === "Quantity-Updated" ?(
  <PriceUpdated>Quantity-Updated</PriceUpdated>):
  product.status === "Quantity-Updated" ?(
    <PriceUpdated>Quantity-Updated</PriceUpdated>):
    product.status === "Price and Quantity Updated" ?(
      <PriceUpdated>Price and Quantity Updated</PriceUpdated>):""}

                        <CTAContainer><CTA onClick={()=>handleApproveOrder(product)}>&#10004;</CTA><CTA onClick={()=>handleMissingOrder(product)}>&#10006;</CTA><CTA onClick={()=>handleEditOrder(product)}>Edit</CTA></CTAContainer>
                        </StatusContainer>
            </TableCell>
          </TableRow>
        ))}
            </tbody>  
            
            </Table> 
        </TableContainer>
             {isModalOpen && <Modal handleUrgentClick={() => {
            dispatch(urgentOrder(modalProduct.id));
            setIsModalOpen(false);
          }}
          handleMissingClick={() => {
            dispatch(missingOrder(modalProduct.id));
            setIsModalOpen(false);
          }} product={modalProduct} isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />}
           {isEditModalOpen && (
        <EditModal
          isOpen={isEditModalOpen}
          closeModal={() => setIsEditModalOpen(false)}
          product={modalProduct}
          handleSaveClick={(productId, newPrice, newQuantity) => {
            dispatch(editOrder({ productId, newPrice, newQuantity }));
          }}
        />
      )}
    </Page>
   
  );
};

export default OrderPage;


