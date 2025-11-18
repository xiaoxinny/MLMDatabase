import { Routes, Route } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import { HomePage } from './pages/HomePage';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};
