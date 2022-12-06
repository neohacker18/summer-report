import React, { useEffect, useState } from "react";
import { Flex, Box, Spacer, Stack, Button } from "@chakra-ui/react";
import "../../../public/cart.css";
import ImageBox from "./ImageBox";
import axios from "axios";

const RightCartBox = ({ product }) => {
  const [count, setCount] = useState(product.quantity);
  const handleAdd = () => {
    const url = "http://localhost:8000/cart";
    const userId = localStorage.getItem("userId");
    setCount(count + 1);
    axios
      .post(url, {
        productId: product.productId._id,
        userId: userId,
        option: "Add",
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubtract = () => {
    const url = "http://localhost:8000/cart";
    const userId = localStorage.getItem("userId");
    setCount(count - 1);
    axios
      .post(url, {
        productId: product.productId._id,
        userId: userId,
        option: "Reduce",
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleRemove = () => {
    history.go(0);
    const url = "http://localhost:8000/cart-delete-item";
    const userId = localStorage.getItem("userId");
    axios
      .post(url, {
        productId: product.productId._id,
        userId: userId,
      })
      .then((res) => {
        location.reload();
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Flex>
        <Box p="4">
          <Stack>
            <Box>
              <Button
              variant={'outline'}
                onClick={() => {
                  handleAdd();
                }}
              >
                +
              </Button>
            </Box>
            <Box className="cart__quantity">
              <h5>{count}</h5>
            </Box>
            {count > 0 && (
              <Box>
                <Button
              variant={'outline'}
                  onClick={() => {
                    if (count == 1) {
                      handleRemove();
                    } else {
                      handleSubtract();
                    }
                  }}
                >
                  -
                </Button>
              </Box>
            )}
          </Stack>
        </Box>
        <Spacer />
        <ImageBox imageUrl={product.productId.imageUrl} />
      </Flex>
    </div>
  );
};

export default RightCartBox;
