import { generateFakeUsers } from "../commons/fakes";
import { GenericTable } from "./headless-table";

// Define the schema for the User entity
const userSchema = [
    { key: "username", label: "Username" },
    { key: "nickname", label: "Nickname" },
    { key: "email", label: "Email" },
    { key: "role", label: "Role" },
    { key: "bio", label: "Bio" },
    { key: "status", label: "Status" },
  ];
  
  // Fetching data
  const userData = generateFakeUsers(12);

  export const UserTable = () => <GenericTable schema={userSchema} data={userData} rowKey="id" />;
  