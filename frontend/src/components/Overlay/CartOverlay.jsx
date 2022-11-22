import { Heading, Flex, Box, Spacer, Button, Stack } from "@chakra-ui/react";
import React, { useContext } from "react";
import RightCartBox from "./RightCartBox";
import CartBox from "./CartBox";
import "../../../public/cartOverlay.css";
import { Link } from "react-router-dom";
import OverlayContext from "../../context/OverlayContext";

const CartOverlay = () => {
  const { openCartOverlay, setOpenCartOverlay } = useContext(OverlayContext);

  return (
    <div id="overlay__main__hero">
      <hr style={{ width: "210px" }} />
      <Flex>
        <Box p="2">
          <CartBox style={{ borderBottom: "1px solid grey" }} />
        </Box>
        <Spacer />
        <Box p="2">
          <RightCartBox />
        </Box>
      </Flex>
      <Flex>
        <Box p="2">
          <h5>
            Tax 21%: <b>$42.00</b>
          </h5>
          <h5>
            Quantity: <b>3</b>
          </h5>
          <h5>
            Total: <b>$200.00</b>
          </h5>
        </Box>
      </Flex>
    </div>
  );
};

export default CartOverlay;
