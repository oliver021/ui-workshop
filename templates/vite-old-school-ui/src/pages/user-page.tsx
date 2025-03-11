import { useParams } from "react-router-dom";
import { Box, Heading, Text, Separator } from "@chakra-ui/react";
import { UserTable } from "../foundation/user-domain";

const UsersPage = () => {
  // Get the "userType" parameter from the route
  const { userType } = useParams();

  return (
    <Box p={6}>
      <Heading size="xl">User Management</Heading>
      <Text fontSize="lg" mt={4}>
        Viewing users of type: <strong>{userType || "All Users"}</strong>
      </Text>
      <Separator p={5}/>
      <UserTable/>
    </Box>
  );
};

export default UsersPage;
