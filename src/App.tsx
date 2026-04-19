import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SchedulePage from "./pages/SchedulePage";
import AssignmentPage from "./pages/AssignmentPage";
import AssignmentsPage from "./pages/AssignmentsPage";
import { ScrollToTop } from "./components/ScrollToTop";

export default function App() {
  const basename = import.meta.env.BASE_URL;

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
