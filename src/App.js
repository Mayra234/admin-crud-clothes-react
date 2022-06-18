import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AdminLayout } from './layouts/AdminLayout';
import { Clothes } from './pages/Clothes/';
import { Dashboard } from './pages/Dashboard';
import { Employees } from './pages/Employees';
import { Materials } from './pages/Materials';
import { Companies } from './pages/Companies';

function App() {
  return (
    <BrowserRouter>
      <Routes>
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
