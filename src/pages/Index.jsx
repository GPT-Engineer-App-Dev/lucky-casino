import { Container, Text, VStack, Heading, Button, Box, Image } from "@chakra-ui/react";
import { FaDice, FaMoneyBillWave, FaGamepad } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" mb={4}>Welcome to Casino Royale</Heading>
        <Text fontSize="xl" textAlign="center">Experience the thrill of the casino from the comfort of your home.</Text>
        <Box display="flex" justifyContent="center" mt={6}>
          <Button leftIcon={<FaDice />} colorScheme="teal" size="lg" m={2}>
            Play Dice
          </Button>
          <Button leftIcon={<FaMoneyBillWave />} colorScheme="teal" size="lg" m={2}>
            Play Slots
          </Button>
          <Button leftIcon={<FaGamepad />} colorScheme="teal" size="lg" m={2}>
            Play Poker
          </Button>
        </Box>
        <Box mt={8}>
          <Image src="/images/casino.jpg" alt="Casino" borderRadius="md" />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;