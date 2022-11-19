import React,{useEffect} from "react";
import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ShoppingBagIcon from "../icons/ShoppingBag";
import CartIcon from "../icons/CartIcon";
import CurrencyIcon from "../icons/CurrencyIcon";
import "../../public/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={6}
      className="header"
    >
      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <HamburgerIcon />
      </Box>
      <Stack
        direction={{ base: "column", md: "row" }}
        display={{ base: isOpen ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
      >
        <Link to="/" className="gender__links default__active__category">
          <Text style={{ marginLeft: "20px", width: "97px" }}>WOMEN</Text>
        </Link>
        <Link to="/" className="gender__links">
          <Text style={{ width: "97px" }}>MEN</Text>
        </Link>
        <Link href="/" className="gender__links">
          <Text style={{ width: "97px" }}>KIDS</Text>
        </Link>
      </Stack>
      <Flex mr={5} style={{ position: "absolute", right: "50%" }}>
        <Heading as="h1" size="lg">
          <Link href="/">
            <ShoppingBagIcon />
          </Link>
        </Heading>
      </Flex>
      <Flex  mr={5} mx={10}>
        <Box style={{marginRight: '20px'}}>
          <Link to="/">
            <CurrencyIcon />
          </Link>
        </Box>
        <Box>
          <Link to="/cart">
            <CartIcon />
          </Link>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Navbar;
