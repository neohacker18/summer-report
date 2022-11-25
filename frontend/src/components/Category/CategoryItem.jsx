import { React, useState } from "react";
import { Flex, Center, WrapItem, Button, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const CategoryItem = (props) => {
  const toast = useToast();
  const navigate = useNavigate();
  const { brand, price, title, imageUrl, size } = props;
  const [showCartButton, setShowCartButton] = useState(false);
  const handleClick = () => {
    //passing data to product page
    navigate("/product", {
      state: {
        data: props,
        productId: props.id
      },
    });
  };
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
        <Flex className={`onHoverProductFlex__${showCartButton}`}>
          <img
            src={imageUrl}
            alt="prodImage"
            className={`blur__product__card__${showCartButton}`}
            onClick={handleClick}
          />
        </Flex>
        {showCartButton ? (
          <Flex
            direction={"column"}
            className={`onHoverBottomFlex__${showCartButton}`}
          >
            <Button
              onClick={() => {
                console.log("clicked");
                toast({
                  description: "Item added to cart!",
                  status: "success",
                  duration: 4000,
                  isClosable: true,
                });
              }}
            >
              Add To Cart
            </Button>
            <h5>
              <b>Size Available:</b> {size}
            </h5>
          </Flex>
        ) : (
          <Flex direction={"column"}>
            <h1 style={{ fontSize: "1.2rem" }}>{`${brand} ${title}`}</h1>
            <h1>
              <b>${price}</b>
            </h1>
          </Flex>
        )}
      </Center>
    </WrapItem>
  );
};

export default CategoryItem;
