import React, { useContext } from "react";
import "../../../public/category.css";
import {  Heading, SimpleGrid, Box } from "@chakra-ui/react";
import CategoryItem from "./CategoryItem";
import OverlayContext from "../../context/OverlayContext";

const Women = () => {
  const {openCartOverlay,setOpenCartOverlay} = useContext(OverlayContext)
  return (
    <>
      <div
       className={`hero__container blur__background__${openCartOverlay}`}
       >
        <Heading>Category Name</Heading>
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
    </>
  );
};

export default Women;
