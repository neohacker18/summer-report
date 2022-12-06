import React, { useState, useContext } from "react";
import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Input,
  Button,
  Spacer,
  DrawerCloseButton,
  Divider,
} from "@chakra-ui/react";

import RightCartBox from "./Overlay/RightCartBox";
import CartBox from "./Overlay/CartBox";
import { HamburgerIcon } from "@chakra-ui/icons";
import ShoppingBagIcon from "../icons/ShoppingBag";
import CartIcon from "../icons/CartIcon";
import CurrencyIcon from "../icons/CurrencyIcon";
import "../../public/navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import OverlayContext from "../context/OverlayContext";
import AuthContext from "../context/AuthContext";
import LogoutIcon from "../icons/LogoutIcon";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());
  const { openCartOverlay, setOpenCartOverlay } = useContext(OverlayContext);
  const { user, setUser } = useContext(AuthContext);
  console.log(user)
  if (!user) {
    return (
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding={6}
        className="header"
      >
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: isOpen ? "block" : "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        ></Stack>
        <Link to="/login" style={{ position: "absolute", right: "10px" }}>
          <Button
            style={{ width: "97px" }}
            variant={"outline"}
            colorScheme={"black"}
          >
            Login
          </Button>
        </Link>
        <Link to="/signup" style={{ position: "absolute", right: "120px" }}>
          <Button style={{ width: "97px" }} colorScheme={"green"}>
            Signup
          </Button>
        </Link>
        <Flex mr={5} style={{ position: "absolute", right: "50%" }}>
          <Heading as="h1" size="lg">
            <Link to="/">
              <ShoppingBagIcon />
            </Link>
          </Heading>
        </Flex>
      </Flex>
    );
  }
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
          className={`gender__links active__category__${
            location.pathname === "/"
          }`}
        >
          <Text style={{ width: "97px" }}>WOMEN</Text>
        </Link>
        <Link
          to="/men"
          className={`gender__links active__category__${
            location.pathname === "/men"
          }`}
        >
          <Text style={{ width: "97px" }}>MEN</Text>
        </Link>
        <Link
          to="/kids"
          className={`gender__links active__category__${
            location.pathname === "/kids"
          }`}
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
        <Box mx={3}>
          <CurrencyIcon />
        </Box>
        <Box
          my={-0.8}
          onClick={() => {
            setOpenCartOverlay(!openCartOverlay);
          }}
        >
          <CartIcon id="navbar__cartIcon" />
        </Box>
        <Box
          mx={4}
          onClick={() => {
            console.log("yo");
            setUser(null);
            localStorage.setItem("isLoggedIn", false);
            localStorage.setItem("userId", null);
          }}
        >
          <LogoutIcon />
        </Box>
      </Flex>
      <Drawer
        placement="right"
        isOpen={openCartOverlay}
        isClose={openCartOverlay}
        size={"sm"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton
            onClick={() => {
              setOpenCartOverlay(!openCartOverlay);
            }}
          />
          <DrawerHeader>My Cart</DrawerHeader>
          <DrawerBody>
            <CartBox />
            <Divider />
          </DrawerBody>

          <DrawerFooter>
            <Stack mx={120}>
              <Button
                size="lg"
                onClick={() => {
                  navigate("/cart");
                  setOpenCartOverlay(!openCartOverlay);
                }}
              >
                View Cart
              </Button>
              <Button
                size="lg"
                bg={"teal.200"}
                onClick={() => navigate("/checkout")}
              >
                Checkout
              </Button>
            </Stack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default Navbar;
