import { faker } from "@faker-js/faker";
import { GenericTable } from "./headless-table";

const inventorySchema = [
    { key: "id", label: "ID" },
    { key: "name", label: "Product Name" },
    { key: "category", label: "Category" },
    { key: "quantity", label: "Stock Quantity" },
    { key: "price", label: "Price" },
    { key: "supplier", label: "Supplier" },
    { key: "status", label: "Stock Status" },
  ];


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
  
  // Generate 15 fake inventory items
  const inventoryData = generateFakeInventory(10);

export const InventoryTable = () => <GenericTable schema={inventorySchema} data={inventoryData} rowKey="id" />;