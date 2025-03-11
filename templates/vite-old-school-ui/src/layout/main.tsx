import { Outlet } from "react-router-dom";
import { Grid, GridItem, Box } from "@chakra-ui/react";
import Sidebar from "./sidebar";

const MainLayout = () => {
  return (
    <Grid
      templateAreas={`"sidebar header"
                      "sidebar main"
                      "sidebar footer"`}
      gridTemplateRows={"60px 1fr 50px"}
      gridTemplateColumns={"250px 1fr"}
      h="100vh"
      gap={4}
      p={4}
      bg="gray.50"
    >
      {/* Sidebar */}
      <GridItem area={"sidebar"} bg="gray.800" color="white" p={4} borderRadius="md">
        <Sidebar />
      </GridItem>

      {/* Header is styled in highlight way */}
      <GridItem area={"header"} bg="blue.500" color="white" p={4} borderRadius="md">
        (UI) Old School
      </GridItem>

      {/* Main Routes Content Content */}
      {/* We rely on outlet content from routing system */}
      <GridItem area={"main"} bg="white" p={4} borderRadius="md" boxShadow="md">
      <Outlet /> {/* This is where nested pages will render */}
      </GridItem>

      {/* Footer */}
      <GridItem area={"footer"} bg="gray.200" p={4} borderRadius="md">
        React Template Project with Chakra UI Components. Old School Style. 
      </GridItem>
    </Grid>
  );
};

export default MainLayout;
