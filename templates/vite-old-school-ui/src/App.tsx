import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/main"; // 

/* pages */
import DashboardPage from "./pages/dashboard-page";
import UsersPage from "./pages/user-page";
import InventoryPage from "./pages/inventory-page";
import SettingsPage from "./pages/settings-page";
import UnderDevelopment from "./pages/under-development";
import ProductPage from "./pages/product-page";

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>

            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/inventory" element={<InventoryPage />} />


            <Route path="/users" element={<UsersPage />} />
            <Route path="/users/:userType" element={<UsersPage />} />

            <Route path="/settings" element={<SettingsPage />} />

              {/* Redirect Unfinished Pages to "Under Development" */}
            <Route path="organizer" element={<UnderDevelopment />} />
            <Route path="inbox" element={<UnderDevelopment />} />
            <Route path="marketing" element={<UnderDevelopment />} />


            {/* Default Route */}
            <Route path="*" element={<DashboardPage />} />
         </Route>
        </Routes>
    </Router>
  );
};

export default App;
