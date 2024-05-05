import { Box, Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Flex as="nav" gap="4" p="4" bg="gray.100" align="center">
      <Link to="/">
        <Button colorScheme="blue">Home</Button>
      </Link>
      <Link to="/platform-overview">
        <Button colorScheme="blue">Platform Overview</Button>
      </Link>
    </Flex>
  );
};

export default Navigation;
