import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import AddMachines from "./pages/AddMachines";
import AdminLayout from "./components/AdminLayout";
import Dashboard from "./pages/Dashboard";
import MasterSettings from "./pages/MasterSettings";
import { Toaster } from "react-hot-toast";
import AssignMachine from "./components/AssignMachine";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/admin/*"
            element={
              <AdminLayout>
                <Routes>
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="dashboard/:email" element={<Dashboard />} />
                  {/* <Route path="analytics" element={<Analytics />} /> */}
                  {/* <Route path="asset-not-working" element={<AssetNotWorking />} /> */}
                  {/* <Route path="user-settings" element={<UserSettings />} /> */}
                  <Route path="master-settings" element={<MasterSettings />} />
                  <Route path="user-settings" element={<AssignMachine />} />
                </Routes>
              </AdminLayout>
            }
          />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;
