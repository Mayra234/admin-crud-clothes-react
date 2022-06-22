import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AdminLayout } from './layouts/AdminLayout';
import { Clothes } from './pages/Clothes/';
import { Dashboard } from './pages/Dashboard';
import { Employees } from './pages/Employees';
import { Materials } from './pages/Materials';
import { Companies } from './pages/Companies';
import { useClotheApi } from './apis/useClotheApi';
import { useEffect } from 'react';
import { AuthLayout } from './layouts/AuthLayout';
import { Login } from './pages/Login';

function App() {
  const clotheApi = useClotheApi();

  const listClothes = async () => {
    console.log(await clotheApi.list());
  };

  /**
   * Mounted
   */
  useEffect(() => {
    listClothes();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <AuthLayout>
              <Login />
            </AuthLayout>
          }
        />
        <Route
          path="/dashboard"
          element={
            <AdminLayout>
              <Dashboard />
            </AdminLayout>
          }
        />
        <Route
          path="/clothes"
          element={
            <AdminLayout>
              <Clothes />
            </AdminLayout>
          }
        />
        <Route
          path="/materials"
          element={
            <AdminLayout>
              <Materials />
            </AdminLayout>
          }
        />
        <Route
          path="/companies"
          element={
            <AdminLayout>
              <Companies />
            </AdminLayout>
          }
        />
        <Route
          path="/employees"
          element={
            <AdminLayout>
              <Employees />
            </AdminLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
