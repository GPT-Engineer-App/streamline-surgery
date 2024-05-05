import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";

const PlatformOverview = () => {
  return (
    <Container maxW="container.xl" p={8}>
      <VStack spacing={8} align="stretch">
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading mb={4}>Platform Design Overview</Heading>
          <Text fontSize="xl">Detailed overview of core modules and system architecture.</Text>
        </Box>
        {}
      </VStack>
    </Container>
  );
};

export default PlatformOverview;
