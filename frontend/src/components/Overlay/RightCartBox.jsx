import React,{useState} from "react";
import { Flex, Box, Spacer, Stack, Button } from "@chakra-ui/react";
import ImageBox from "./ImageBox";

const RightCartBox = () => {
    const [count, setCount] = useState(1)
  return (
    <div>
      <Flex>
        <Box p="2">
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
        <ImageBox/>
      </Flex>
    </div>
  );
};

export default RightCartBox;
