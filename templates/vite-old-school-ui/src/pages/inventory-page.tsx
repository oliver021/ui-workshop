import { Box, Heading, Text, Separator } from "@chakra-ui/react";
import { InventoryTable } from "../foundation/inventory-domain";

const InventoryPage = () => {
  

  return (
    <Box p={6}>
      <Heading size="xl">Product Management</Heading>
      <Text fontSize="lg" mt={4}>
        Viewing invfetoring.
      </Text>
      <Separator p={5}/>
      <InventoryTable/>
    </Box>
  );
};

export default InventoryPage;
