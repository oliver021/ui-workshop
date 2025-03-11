import { faker } from "@faker-js/faker";

// Function to generate fake users
export const generateFakeUsers = (count = 10) => {
  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    username: faker.internet.userName(),
    nickname: faker.person.firstName(),
    email: faker.internet.email(),
    role: faker.helpers.arrayElement(["Admin", "Moderator", "User", "Vendor"]),
    bio: faker.lorem.sentence(),
    status: faker.helpers.arrayElement(["Active", "Inactive", "Pending"]),
  }));
};


// Function to generate fake users
export const generateFakeProducts = (count = 10) => {
    return Array.from({ length: count }, () => ({
      id: faker.string.uuid(),
      name: faker.lorem.slug(),
      category: faker.lorem.slug(),
      price: faker.commerce.price({ min: 10, max: 1000, dec: 2 }),
    }));
  };

  // Function to generate fake inventory data
const generateFakeInventory = (count = 10) => {
    return Array.from({ length: count }, () => ({
      id: faker.string.uuid(),
      name: faker.commerce.productName(),
      category: faker.commerce.department(),
      quantity: faker.number.int({ min: 0, max: 500 }),
      price: faker.commerce.price({ min: 10, max: 1000, dec: 2 }),
      supplier: faker.company.name(),
      status: faker.helpers.arrayElement(["In Stock", "Out of Stock", "Low Stock"]),
    }));
  };