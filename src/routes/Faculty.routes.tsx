import FacultyDashboard from "../pages/Faculty/FacultyDashboard";
import OfferedCaurse from "../pages/Faculty/OfferedCaurse";

export const facultyPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <FacultyDashboard />,
  },
  {
    name: "Offered Course",
    path: "offered-course",
    element: <OfferedCaurse />,
  },
];
