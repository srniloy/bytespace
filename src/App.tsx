import { lazy } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/main-layout';
import AuthLayout from './layouts/auth-layout';
import ScrollToTop from './components/scroll-to-top';

const HomePage = lazy(() => import('./pages/home-page'));
const CoursePage = lazy(() => import('./pages/course-page'));
const CourseDetailsPage = lazy(() => import('./pages/course-details-page'));
const CreatorPage = lazy(() => import('./pages/creator-page'));
const CreatorsPage = lazy(() => import('./pages/creators-page'));
const LoginPage = lazy(() => import('./pages/login-page'));
const RegisterPage = lazy(() => import('./pages/register-page'));

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursePage />} />
          <Route path="/courses/:id" element={<CourseDetailsPage />} />
            <Route path="/creators" element={<CreatorsPage />} />
            <Route path="/creators/:id" element={<CreatorPage />} />
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
