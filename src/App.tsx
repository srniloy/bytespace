import { lazy } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/main-layout';
import AuthLayout from './layouts/auth-layout';

const LandingPage = lazy(() => import('./pages/landing-page'));
const CoursePage = lazy(() => import('./pages/course-page'));
const CreatorPage = lazy(() => import('./pages/creator-page'));
const LoginPage = lazy(() => import('./pages/login-page'));
const RegisterPage = lazy(() => import('./pages/register-page'));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/courses" element={<CoursePage />} />
          <Route path="/creators" element={<CreatorPage />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up" element={<RegisterPage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
