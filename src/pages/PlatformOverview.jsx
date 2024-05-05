import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const PlatformOverview = () => {
  return (
    <Container maxW="container.xl" p={8}>
      <VStack spacing={8} align="stretch">
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading mb={4}>Platform Design Overview</Heading>
          <Text fontSize="xl">Detailed overview of core modules and system architecture.</Text>
        </Box>
        <Link to="/surgeon-scheduling">Surgeon Scheduling Module</Link>
        <Link to="/theater-list-and-stack">Theater List and Stack Module</Link>
        <Link to="/communication-and-alerts">Communication and Alerts System</Link>
        <Link to="/patient-management-and-tracking">Patient Management and Tracking</Link>
        <Link to="/documentation-and-reporting">Documentation and Reporting</Link>
      </VStack>
    </Container>
  );
};

export default PlatformOverview;
