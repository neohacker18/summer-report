import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthContext";
import {
  Flex,
  Box,
  Text,
  Button,
  Checkbox,
  CheckboxGroup,
  SimpleGrid,
} from "@chakra-ui/react";
import axios from "axios";
import "../../../public/checkout.css";
const CheckoutHero = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState(null);
  const [cartTotal, setCartTotal] = useState(0.01);
  const url = `http://localhost:8000/cart/id=${user}`;
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <Flex direction={"row"} justifyContent="space-between">
      <Flex className="checkout__left" direction={"column"}>
        <Flex
          className="hero__header"
          justifyContent={"space-between"}
          width={"55vw"}
          color="grey"
          mx={20}
        >
          <Flex>PRODUCT</Flex>
          <Flex>PRICE</Flex>
          <Flex>QUANTITY</Flex>
          <Flex>TOTAL</Flex>
        </Flex>
        <SimpleGrid
          columns={1}
          className="products"
          width={"60vw"}
          justifyContent={"space-around"}
          mx={20}
        >
          {products &&
            products.map((product, id) => {
              const prod = product.productId;
              return (
                <SimpleGrid
                  direction={"row"}
                  columns={4}
                  alignItems="center"
                  className={"checkout__Boxes"}
                >
                  <Flex direction={"column"} justifyContent={"space-between"}>
                    <Flex my={4} width={"150px"} height={"150px"}>
                      <img src={prod.imageUrl} alt="image" />
                    </Flex>
                    <Box>
                      <b>{prod.brand}</b>
                    </Box>
                    <Box my={0.5} color={"grey"}>
                      #{product._id}
                    </Box>
                    <Box my={0.5} color={"grey"}>
                      Size: {prod.size}
                    </Box>
                  </Flex>
                  <Box className="prod__price">$ {prod.price}</Box>
                  <Flex
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    width="150px"
                    fontSize={"20px"}
                    className="prod__qty"
                  >
                    <Button variant={"ghost"}>-</Button>
                    <Box
                      width={"40px"}
                      height={"37px"}
                      style={{ padding: "5px 14px" }}
                    >
                      {product.quantity}
                    </Box>
                    <Button variant={"ghost"}>+</Button>
                  </Flex>
                  <Box className="prod__total">
                    ${prod.price * product.quantity}
                  </Box>
                  <br />
                </SimpleGrid>
              );
            })}
        </SimpleGrid>
      </Flex>
      <Flex className="checkout__right" width={"30vw"} height={"100%vh"}>
        <hr />
        <Flex
          className="checkout__total"
          width={"50%"}
          height={"60px"}
          justifyContent={"space-between"}
        >
          <Flex alignItems={"center"}>
            <Text fontSize={"12px"}>CART TOTAL</Text>
            <Text mx={10} fontSize={"20px"}>
              <b>$ {cartTotal}</b>
            </Text>
          </Flex>
          <Box>
            <Text fontSize={"13px"}>
              Shipping & taxes calculated at checkout
            </Text>
          </Box>
        </Flex>
        <Flex className="checkbox__flex">
          <Checkbox colorScheme="blue" defaultChecked>
            I agree to <b>Terms & Conditions</b>
          </Checkbox>
        </Flex>
        <Flex direction={"column"} className={"checkoutButtonClass"}>
          <Button
            size={"lg"}
            className="checkout__button"
            bgColor={"black"}
            borderRadius={"300px"}
          >
            CHECKOUT
          </Button>
          <Button my={5} size={"lg"} borderRadius={"300px"} bgColor={"white"}>
            PayPal
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CheckoutHero;
