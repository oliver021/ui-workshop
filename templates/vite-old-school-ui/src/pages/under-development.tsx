import { Box, Heading, Text, Blockquote, Separator  } from "@chakra-ui/react";

const UnderDevelopment = () => {
  return (
    <Box textAlign="center" p={10}>
      <Heading size="xl">🚧 Page Under Development 🚧</Heading>
      <Text fontSize="lg" mt={4}>
        This feature is currently under construction. Please check back later!
      </Text>
      <Separator p={3}/>
      <Blockquote.Root>
      <Blockquote.Content>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat impedit 
        accusantium repellendus deserunt at cum labore cupiditate sequi distinctio 
        deleniti voluptatibus praesentium commodi aperiam iure officia, ea exercitationem
         dolores doloremque.

         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat impedit 
        accusantium repellendus deserunt at cum labore cupiditate sequi distinctio 
        deleniti voluptatibus praesentium commodi aperiam iure officia, ea exercitationem
         dolores doloremque.

         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat impedit 
        accusantium repellendus deserunt at cum labore cupiditate sequi distinctio 
        deleniti voluptatibus praesentium commodi aperiam iure officia, ea exercitationem
         dolores doloremque.
      </Blockquote.Content>
    </Blockquote.Root>
    </Box>
  );
};

export default UnderDevelopment;
