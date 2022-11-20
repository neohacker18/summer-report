import { React, useState } from "react";
import Sweater from "../../img/sweater.jpeg";
import ProductCartIcon from "./ProductCartIcon";
import { Flex,Box } from "@chakra-ui/react";

const CategoryItem = () => {
  const [showCartButton, setShowCartButton] = useState(false);
  return (
    <Flex>
      {showCartButton && (
        <ProductCartIcon className="productCard__cart__overlay" />
        )}
      <Flex
        className="home__card__container"
        onMouseEnter={() => setShowCartButton(true)}
        onMouseLeave={() => setShowCartButton(false)}
      >
        <img src={Sweater} alt="" className={`blur__product__card__${showCartButton}`}/>
        <div className="home__card__info">
          <h1>Apollo Running Short</h1>
          <h1>$50.00</h1>
        </div>
      </Flex>
    </Flex>
  );
};

export default CategoryItem;
