import React, { useState, useContext } from "react";
import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ShoppingBagIcon from "../icons/ShoppingBag";
import CartIcon from "../icons/CartIcon";
import CurrencyIcon from "../icons/CurrencyIcon";
import "../../public/navbar.css";
import { Link, useLocation } from "react-router-dom";
import OverlayContext from "../context/OverlayContext";
import CartOverlay from "./Overlay/CartOverlay";

const Navbar = () => {
  const location = useLocation();
  console.log(location.pathname);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());
  const [women, setWomen] = useState(location.pathname === "/");
  const [men, setMen] = useState(location.pathname === "/men");
  const [kids, setKids] = useState(location.pathname === "kids");
  const { openCartOverlay, setOpenCartOverlay } = useContext(OverlayContext);
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
        <Link
          to="/"
          className={`gender__links active__category__${women}`}
          onMouseOver={() => {
            setWomen(true);
            setMen(false);
            setKids(false);
          }}
        >
          <Text style={{ marginLeft: "20px", width: "97px" }}>WOMEN</Text>
        </Link>
        <Link
          to="/men"
          className={`gender__links active__category__${men}`}
          onMouseOver={() => {
            setMen(true);
            setWomen(false);
            setKids(false);
          }}
        >
          <Text style={{ width: "97px" }}>MEN</Text>
        </Link>
        <Link
          to="/kids"
          className={`gender__links active__category__${kids}`}
          onMouseOver={() => {
            setKids(true);
            setWomen(false);
            setMen(false);
          }}
        >
          <Text style={{ width: "97px" }}>KIDS</Text>
        </Link>
      </Stack>
      <Flex mr={5} style={{ position: "absolute", right: "50%" }}>
        <Heading as="h1" size="lg">
          <Link to="/">
            <ShoppingBagIcon />
          </Link>
        </Heading>
      </Flex>
      <Flex mr={5} mx={10}>
        <Box style={{ marginRight: "20px" }}>
          <Link to="/">
            <CurrencyIcon />
          </Link>
        </Box>
        <Box
          onClick={() => {
            setOpenCartOverlay(!openCartOverlay);
          }}
        >
          <CartIcon id="navbar__cartIcon" />
        </Box>
      </Flex>
      {openCartOverlay && <CartOverlay />}
    </Flex>
  );
};

export default Navbar;
