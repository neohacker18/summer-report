import { Flex, Box,Spacer,Button} from '@chakra-ui/react'
import React from 'react'
import RightCartBox from './RightCartBox'
import CartBox from './CartBox'
import '../../../public/cartOverlay.css'

const CartOverlay = () => {
  return (
    <div id='overlay__main__hero'>
      <b>
        <h5>My Cart, 3 items</h5>
      </b>
      <hr />
      <Flex>
        <Box p="4">
          <CartBox style={{ borderBottom: "1px solid grey" }} />
        </Box>
        <Spacer />
        <Box p="4">
          <RightCartBox />
        </Box>
      </Flex>
      <Flex>
        <Box p="4">
          <CartBox style={{ borderBottom: "1px solid grey" }} />
        </Box>
        <Spacer />
        <Box p="4">
          <RightCartBox />
        </Box>
      </Flex>
      <Flex>
        <Box p="4">
          <h5>Tax 21%: <b>$42.00</b></h5>
          <h5>Quantity: <b>3</b></h5>
          <h5>Total: <b>$200.00</b></h5>
          <br />
          <Flex>
            <Button>View Bag</Button>
            <Button bg={'teal.200'} mx={10}>Checkout</Button>
          </Flex>
        </Box>
      </Flex>
    </div>
  )
}

export default CartOverlay