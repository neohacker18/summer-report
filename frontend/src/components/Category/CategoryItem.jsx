import { React, useState } from "react";
import ProductCartIcon from "./ProductCartIcon";
import { Flex, Box, Center, WrapItem, Heading } from "@chakra-ui/react";

const CategoryItem = (props) => {
  const { brand, price, title, imageUrl } = props;
  const [showCartButton, setShowCartButton] = useState(false);
  return (
    <WrapItem
      onMouseEnter={() => setShowCartButton(true)}
      onMouseLeave={() => setShowCartButton(false)}
    >
      <Center
        w="300px"
        h="400px"
        alignItems={"left"}
        cursor={"pointer"}
        className="home__card__container"
      >
        <img
          src={imageUrl}
          alt="prodImage"
          className={`blur__product__card__${showCartButton}`}
        />
        <h1 style={{ fontSize: "1.2rem" }}>{`${brand} ${title}`}</h1>
        <h1>
          <b>${price}</b>
        </h1>
      </Center>
    </WrapItem>
  );
};

export default CategoryItem;
