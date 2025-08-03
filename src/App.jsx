import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Suspense, lazy } from "react"
import LoadingSpinner from './pages/shared/LoadingSpinner';
import HomePage from './pages/HomePage/HomePage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';

// const HomePage = lazy(() => import("./pages/HomePage"))
// const ProjectsPage = lazy(() => import("./pages/ProjectsPage"))

function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
