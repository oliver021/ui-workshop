import { Box, Heading, Text, Separator } from "@chakra-ui/react";
import { ProductTable } from "../foundation/product-domain";

const ProductPage = () => {
  

  return (
    <Box p={6}>
      <Heading size="xl">Product Management</Heading>
      <Text fontSize="lg" mt={4}>
        Viewing products.
      </Text>
      <Separator p={5}/>
      <ProductTable/>
    </Box>
  );
};

export default ProductPage;
