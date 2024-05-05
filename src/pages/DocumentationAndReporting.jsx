import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";

const DocumentationAndReporting = () => {
  return (
    <Container maxW="container.xl" p={8}>
      <VStack spacing={8} align="stretch">
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading mb={4}>Documentation and Reporting</Heading>
          <Text fontSize="xl">Centralized documentation system for surgeons, junior doctors, and theater staff to enter and access surgical records and equipment usage.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default DocumentationAndReporting;
