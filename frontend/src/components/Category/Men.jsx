import React from "react";
import "../../../public/category.css";
import { Heading, SimpleGrid, Box } from "@chakra-ui/react";
import CategoryItem from "./CategoryItem";

const Men = () => {
  return (
    <div className="hero__container">
      <Heading>Category Name</Heading>
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
  );
};

export default Men;
