import React, {useState, useContext, useEffect } from "react";
import "../../../public/cart.css";
import CartBox from "./CartBox";
import RightCartBox from "./RightCartBox";
import { Flex, Box, Spacer, Button } from "@chakra-ui/react";
import AuthContext from "../../context/AuthContext";
import axios from "axios";
import CartProduct from "./CartProduct";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate()
  const { user } = useContext(AuthContext);
  // const userId = localStorage.getItem('userId');
  const url = `http://localhost:8000/cart/id=${user}`;
  const [products,setProducts] = useState();
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="main__cart__hero">
      <b>
        <h1
          style={{ fontSize: "2rem", marginBottom: "40px", marginLeft: "20px" }}
        >
          CART
        </h1>
      </b>
      <hr />
      {products && products.map((product,id)=>{
        return(
          <CartProduct key={id} product={product}/>
        )
      })}
      <Flex>
        <Box p="4">
          <h5>
            Tax 21%: <b>$42.00</b>
          </h5>
          <h5>
            Quantity: <b>3</b>
          </h5>
          <h5>
            Total: <b>$200.00</b>
          </h5>
          <br />
          <Button
          onClick={()=>navigate('/checkout')}
            style={{
              backgroundColor: "rgb(87,226,128)",
              color: "white",
              width: "200px",
              borderRadius: "0px",
            }}
          >
            Order
          </Button>
        </Box>
      </Flex>
    </div>
  );
};

export default Cart;
