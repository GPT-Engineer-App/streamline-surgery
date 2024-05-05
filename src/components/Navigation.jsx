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
      <Link to="/surgeon-scheduling">
        <Button colorScheme="blue">Surgeon Scheduling</Button>
      </Link>
      <Link to="/theater-list-and-stack">
        <Button colorScheme="blue">Theater List and Stack</Button>
      </Link>
      <Link to="/communication-and-alerts">
        <Button colorScheme="blue">Communication and Alerts</Button>
      </Link>
      <Link to="/patient-management-and-tracking">
        <Button colorScheme="blue">Patient Management and Tracking</Button>
      </Link>
      <Link to="/documentation-and-reporting">
        <Button colorScheme="blue">Documentation and Reporting</Button>
      </Link>
    </Flex>
  );
};

export default Navigation;
