import StudentAbout from "../pages/Student/StudentAbout";
import StudentContact from "../pages/Student/StudentContact";
import StudentDashboard from "../pages/Student/StudentDashboard";

export const studentPaths = [
  {
    name: "Student Dashboard",
    path: "student-dashboard",
    element: <StudentDashboard />,
  },
  {
    name: "Student Contact",
    path: "student-contact",
    element: <StudentContact />,
  },
  {
    name: "Student About",
    path: "student-about",
    element: <StudentAbout />,
  },
];
