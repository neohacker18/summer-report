import { React, useState } from "react";
import ProductCartIcon from "./ProductCartIcon";
import { Flex, Box } from "@chakra-ui/react";

const CategoryItem = (props) => {
  const { brand, price, title, imageUrl } = props;
  const [showCartButton, setShowCartButton] = useState(false);
  return (
    <Flex className="category__productCard">
      {/* {showCartButton && (
        <ProductCartIcon className="productCard__cart__overlay" />
      )} */}
      <Flex
        className="home__card__container"
        onMouseEnter={() => setShowCartButton(true)}
        onMouseLeave={() => setShowCartButton(false)}
      >
        <img
          src={imageUrl}
          alt="prodImage"
          className={`blur__product__card__${showCartButton}`}
        />
        <div className="home__card__info">
          <h1 style={{ fontSize: "1.2rem" }}>{`${brand} ${title}`}</h1>
          <h1>
            <b>${price}</b>
          </h1>
        </div>
      </Flex>
    </Flex>
  );
};

export default CategoryItem;
