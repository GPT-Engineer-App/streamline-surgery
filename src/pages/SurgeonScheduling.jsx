import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";

const SurgeonScheduling = () => {
  return (
    <Container maxW="container.xl" p={8}>
      <VStack spacing={8} align="stretch">
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading mb={4}>Surgeon Scheduling Module</Heading>
          <Text fontSize="xl">Manage individual surgeon schedules, including allocated surgical weeks and specific times.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default SurgeonScheduling;
