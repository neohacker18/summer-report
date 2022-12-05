import React,{useState} from "react";
import { Flex, Box, Spacer, Stack, Button } from "@chakra-ui/react";
import "../../../public/cart.css";
import ImageBox from "./ImageBox";
const RightCartBox = ({product}) => {
    const [count, setCount] = useState(product.quantity)
  return (
    <div>
      <Flex>
        <Box p="4">
          <Stack>
            <Box>
              <Button onClick={()=>setCount(count+1)}>+</Button>
            </Box>
            <Box className="cart__quantity">
              <h5>{count}</h5>
            </Box>
            {count>0 && <Box>
              <Button onClick={()=>setCount(count-1)}>-</Button>
            </Box>}
          </Stack>
        </Box>
        <Spacer />
        <ImageBox imageUrl = {product.productId.imageUrl}/>
      </Flex>
    </div>
  );
};

export default RightCartBox;
