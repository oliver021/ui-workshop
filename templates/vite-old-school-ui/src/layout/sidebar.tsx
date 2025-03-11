import { Box, VStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { menuItems } from "../commons/nav-preset";

const Sidebar = () => {
  return (
    <Box bg="gray.800" color="white" p={4} borderRadius="md">
      <VStack align="stretch">
        {menuItems.map((item) => (
          <MenuItem key={item.slug} item={item} />
        ))}
      </VStack>
    </Box>
  );
};

// Recursive Menu Item Component (Handles Nested Items)
const MenuItem = ({ item }: { item: any }) => {
  return (
    <Box>
      <Link to={item.slug}>
        <Text p={1} fontSize="lg" fontWeight="bold">
          {item.icon} {item.defaultTitle}
        </Text>
      </Link>
      {item.subItems.length > 0 && (
        <VStack align="start" pl={4}>
          {item.subItems.map((subItem:any) => (
            <MenuItem key={subItem.slug} item={subItem} />
          ))}
        </VStack>
      )}
    </Box>
  );
};

export default Sidebar;
