import React, { useState } from "react";
import "../../../public/category.css";
import { Button, Heading, SimpleGrid, Box } from "@chakra-ui/react";
import CategoryItem from "./CategoryItem";
import CartOverlay from "../Overlay/CartOverlay";
import { useLoadingContext } from "react-router-loading";

const Women = () => {
  const loadingContext = useLoadingContext();
  const [showCartOverlay, setShowCartOverlay] = useState(false);
  return (
    <>
      <div className={`hero__container blur__background__${showCartOverlay}`}>
        <Heading>Category Name</Heading>
        <Button onClick={() => setShowCartOverlay(!showCartOverlay)}>
          Click For Cart
        </Button>
        <br />
        <br />
        <SimpleGrid columns={[2, null, 3]} spacing="40px">
          <Box>
            <CategoryItem />
          </Box>
          <Box>
            <CategoryItem />
          </Box>
          <Box>
            <CategoryItem />
          </Box>
          <Box>
            <CategoryItem />
          </Box>
          <Box>
            <CategoryItem />
          </Box>
        </SimpleGrid>
      </div>
      {showCartOverlay && <CartOverlay />}
    </>
  );
};

export default Women;
