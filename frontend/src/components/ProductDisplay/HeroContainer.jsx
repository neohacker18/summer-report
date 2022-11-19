import React from 'react'
import "../../../public/productDisplay.css";
import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import Sweater from '../../img/sweater.jpeg'

const HeroContainer = () => {
  return (
    <>
        <Flex>
        <Flex className="hero__image">
            <img src={Sweater} alt="yo" />
        </Flex>
      </Flex>
    </>
  )
}

export default HeroContainer