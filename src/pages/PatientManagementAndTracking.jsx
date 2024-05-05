import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";

const PatientManagementAndTracking = () => {
  return (
    <Container maxW="container.xl" p={8}>
      <VStack spacing={8} align="stretch">
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading mb={4}>Patient Management and Tracking</Heading>
          <Text fontSize="xl">Interface for tracking patient status and location to coordinate timely transportation by porters.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default PatientManagementAndTracking;
