import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";

const CommunicationAndAlerts = () => {
  return (
    <Container maxW="container.xl" p={8}>
      <VStack spacing={8} align="stretch">
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading mb={4}>Communication and Alerts System</Heading>
          <Text fontSize="xl">Real-time messaging and notification system for all stakeholders, including surgeons, theater managers, and ward staff.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default CommunicationAndAlerts;
