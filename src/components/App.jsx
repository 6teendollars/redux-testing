import { Layout } from "./Layout";
import { Navigate } from 'react-router-dom';
import { LoginPage } from "./pages/LoginPage";
import { DashboardPage } from "./pages/DashboardPage"
import { Routes, Route } from 'react-router-dom';

export const App =()=> {
  return (
<Routes>
      <Route path="/" element={<Layout />} >
      <Route path="login" element={<LoginPage />} />
      <Route path="login" element={<DashboardPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
      </Routes> 

  );
}

