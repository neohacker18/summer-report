import { Spinner } from "@chakra-ui/react";
import React from "react";

const LoadingScreen = () => {
  return (
    <div style={{position: 'absolute',left:'46vw',top:'48vh'}}>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="green.300"
        size="xl"
      />
    </div>
  );
};

export default LoadingScreen;
