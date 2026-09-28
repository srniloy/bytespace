import { lazy, Suspense } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const LandingPage = lazy(() => import('./pages/landing-page'));
const CoursePage = lazy(() => import('./pages/course-page'));
const CreatorPage = lazy(() => import('./pages/creator-page'));

function App() {

  return (
    <BrowserRouter>
      <Suspense fallback={<div className=' text-white bg-red-600'>Loading...</div>}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/courses" element={<CoursePage />} />
          <Route path="/creators" element={<CreatorPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
