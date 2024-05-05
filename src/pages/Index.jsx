import { Box, Button, Container, Heading, IconButton, Image, Input, Stack, Text, VStack } from "@chakra-ui/react";
import { FaCalendarAlt, FaHospital, FaPhone, FaUserMd } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={8}>
      <VStack spacing={8} align="stretch">
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading mb={4}>OrthoStream: Orthopedic Department Management</Heading>
          <Text fontSize="xl">Streamline and automate booking, communication, and documentation in your orthopedic department.</Text>
        </Box>

        <Stack direction={{ base: "column", md: "row" }} spacing={4} align="center">
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" flex="1">
            <Heading size="md" my={2}>
              <FaCalendarAlt /> Scheduling
            </Heading>
            <Text>Efficiently manage all surgical and consultation appointments.</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" flex="1">
            <Heading size="md" my={2}>
              <FaUserMd /> Surgeon Portal
            </Heading>
            <Text>Access schedules, patient details, and necessary documentation.</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" flex="1">
            <Heading size="md" my={2}>
              <FaHospital /> Theater Management
            </Heading>
            <Text>Optimize the utilization of operation theaters and staff.</Text>
          </Box>
        </Stack>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading size="md" my={2}>
            <FaPhone /> Communication Tools
          </Heading>
          <Text>Integrated communication tools to connect surgical teams, theater staff, and ward personnel.</Text>
        </Box>

        <Stack spacing={4} direction="row" align="center" justifyContent="center">
          <Input placeholder="Enter your email" size="md" />
          <Button colorScheme="blue" px={8}>
            Subscribe
          </Button>
        </Stack>

        <Box textAlign="center" p={5}>
          <Text fontSize="sm">© 2023 OrthoStream. All rights reserved.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
