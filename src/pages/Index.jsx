import { Box, Button, Container, Heading, IconButton, Image, Input, Stack, Text, VStack } from "@chakra-ui/react";
import { FaCalendarAlt, FaHospital, FaPhone, FaUserMd } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={8}>
      <VStack spacing={8} align="stretch">
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading mb={4}>Streamline Surgical Workflow with the All-in-One Platform</Heading>
          <Text fontSize="xl">Improve Efficiency, Communication, and Patient Care with Intelligent Scheduling and Management Tools.</Text>
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

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" bgImage="url('/path-to-hero-image.jpg')" bgSize="cover" bgPos="center">
          <Heading size="md" my={2}>
            <FaPhone /> Communication & Alerts
          </Heading>
          <Text>Real-time messaging and notifications for surgeons, theater staff, and ward personnel. Automated alerts for schedule changes or emergency additions to keep everyone informed instantly.</Text>
        </Box>

        <Stack spacing={4} direction="row" align="center" justifyContent="center" mt={8}>
          <Button colorScheme="teal" size="lg">
            Sign up for a Free Trial
          </Button>
          <Button colorScheme="orange" size="lg">
            Schedule a Demo
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
