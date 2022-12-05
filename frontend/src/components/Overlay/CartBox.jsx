import React from "react";
import { Box, Flex, Spacer } from "@chakra-ui/react";
import "../../../public/cartOverlay.css";
import { useContext, useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import AuthContext from "../../context/AuthContext";
import RightCartBox from "./RightCartBox";

const CartItem = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState();
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
    <>
      {products &&
        products.map((product, id) => {
          const prod = product.productId;
          const size = prod.size;
          return (
            <Flex key={id} justifyContent={"space-between"}>
              <Box p="2">
                <b>{prod.brand}</b>
                <p>
                  <i>{prod.title}</i>
                </p>
                <b style={{ fontSize: "0.75rem" }}>${prod.price}</b>
                <br />
                <br />
                <p>
                  <Flex className="size__box__grid">
                    <Box
                      className="size__box__cartBox"
                      style={{
                        padding: "0px 5px",
                        backgroundColor: `${size === "XS" ? `black` : `white`}`,
                        color: `${size === "XS" ? `white` : ` black`}`,
                      }}
                    >
                      XS
                    </Box>
                    <Box
                      className="size__box__cartBox"
                      style={{
                        backgroundColor: `${size === "S" ? `black` : `white`}`,
                        color: `${size === "S" ? `white` : ` black`}`,
                      }}
                    >
                      S
                    </Box>
                    <Box
                      className="size__box__cartBox"
                      style={{
                        backgroundColor: `${size === "M" ? `black` : `white`}`,
                        color: `${size === "M" ? `white` : ` black`}`,
                      }}
                    >
                      M
                    </Box>
                    <Box
                      className="size__box__cartBox"
                      style={{
                        backgroundColor: `${size === "L" ? `black` : `white`}`,
                        color: `${size === "L" ? `white` : ` black`}`,
                      }}
                    >
                      L
                    </Box>
                    <Box
                      className="size__box__cartBox"
                      style={{
                        padding: "0px 5px",
                        backgroundColor: `${size === "XL" ? `black` : `white`}`,
                        color: `${size === "XL" ? `white` : ` black`}`,
                      }}
                    >
                      XL
                    </Box>
                  </Flex>
                </p>
              </Box>
              <Box p="2">
                <RightCartBox
                  imageUrl={prod.imageUrl}
                  quantity={product.quantity}
                />
              </Box>
            </Flex>
            // <Flex key={id}>
            //   <Box p="2">
            //       <b>{prod.brand}</b>
            //       <p>
            //         <i>{prod.title}</i>
            //       </p>
            //       <br />
            //       <br />
            //       <p>
            //         <b style={{ fontSize: "0.65rem" }}>SIZE:</b>
            //       </p>
            //       <Flex>
            //         <Box
            //           className="size__box"
            //           style={{
            //             backgroundColor: `black`,
            //             color: `white`,
            //           }}
            //         >
            //           {size}
            //         </Box>
            //       </Flex>
            //       <Box p="2">
            //         <RightCartBox
            //           imageUrl={prod.imageUrl}
            //           quantity={product.quantity}
            //         />
            //       </Box>
            //   </Box>
            // </Flex>
          );
        })}
    </>
  );
};

export default CartItem;
