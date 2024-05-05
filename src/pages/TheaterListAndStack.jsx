import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";

const TheaterListAndStack = () => {
  return (
    <Container maxW="container.xl" p={8}>
      <VStack spacing={8} align="stretch">
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading mb={4}>Theater List and Stack Module</Heading>
          <Text fontSize="xl">A dynamic display of scheduled surgeries, including short summaries, X-ray images, and theater allocations.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default TheaterListAndStack;
