// import React from 'react';
// import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import { Suspense, lazy } from "react"
// import LoadingSpinner from './pages/shared/LoadingSpinner';
// import HomePage from './pages/HomePage/HomePage';
// import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
// import AboutPage from './pages/AboutPage/AboutPage';
// import ContactsPage from './pages/ContactsPage/ContactsPage';

// const HomePage = lazy(() => import("./pages/HomePage"))
// const ProjectsPage = lazy(() => import("./pages/ProjectsPage"))

// function App() {
//   return (
//     <Router>
//       <Suspense fallback={<LoadingSpinner />}>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/projects" element={<ProjectsPage />} />
//           <Route path="/about" element={<AboutPage />} />
//           <Route path="/contacts" element={<ContactsPage />} />
//         </Routes>
//       </Suspense>
//     </Router>
//   );
// }

// export default App;


import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import DashboardPage from "../pages/dashboard/DashboardPage";
import ManagementPage from "../pages/job-request-management/ManagementPage";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout />
    ),
    children: [
      {
        path: "/",
        element: <DashboardPage />,
      },

      {
        path: "/request-management",
        element: <ManagementPage />,
      },
    ],
  },
]);

export default router;
