import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SchedulePage from "./pages/SchedulePage";
import AssignmentPage from "./pages/AssignmentPage";
import AssignmentsPage from "./pages/AssignmentsPage";
import { ScrollToTop } from "./components/ScrollToTop";

export default function App() {
  // Automatically detect the subfolder (e.g., /cs6120f26/) from the URL path
  const pathSegments = window.location.pathname.split('/').filter(Boolean);
  const firstSegment = pathSegments[0] || '';
  
  // If the first segment looks like a course folder (e.g., starts with 'cs'), use it as the basename
  const basename = firstSegment.startsWith('cs') ? `/${firstSegment}` : '/';

  return (
    <Router basename={basename}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/assignments" element={<AssignmentsPage />} />
        <Route path="/assignments/:id" element={<AssignmentPage />} />
      </Routes>
    </Router>
  );
}
