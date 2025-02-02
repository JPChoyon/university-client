import AcademicDepartment from "../pages/admin/AcademicSemesterContext/AcademicDepartment";
import AcademicFaculty from "../pages/admin/AcademicSemesterContext/AcademicFaculty";
import AcademicSemester from "../pages/admin/AcademicSemesterContext/AcademicSemester";
import CreateAcademicDepartment from "../pages/admin/AcademicSemesterContext/CreateAcademicDepartment";
import CreateAcademicFaculty from "../pages/admin/AcademicSemesterContext/CreateAcademicFaculty";
import CreateAcademicSemester from "../pages/admin/AcademicSemesterContext/CreateAcademicSemester";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/userManagement/CreateAdmin";
import CreateFaculty from "../pages/admin/userManagement/CreateFaculty";
import CreateStudent from "../pages/admin/userManagement/CreateStudent";

export const adminPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "Academic Management",
    children: [
      {
        name: "Create A. Semesters",
        path: "create-academic-semesters",
        element: <CreateAcademicSemester />,
      },
      {
        name: "Academic Semesters",
        path: "academic-semesters",
        element: <AcademicSemester />,
      },
      {
        name: "Create A. Department",
        path: "create-academic-department",
        element: <CreateAcademicDepartment />,
      },
      {
        name: "Academic Department",
        path: "academic-department",
        element: <AcademicDepartment />,
      },
      
      {
        name: "Create A. Faculty",
        path: "create-academic-faculty",
        element: <CreateAcademicFaculty />,
      },
     
      {
        name: "Academic Faculty",
        path: "academic-faculty",
        element: <AcademicFaculty />,
      },
    ],
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: <CreateFaculty />,
      },
      {
        name: "Create Student",
        path: "create-student",
        element: <CreateStudent />,
      },
      {
        name: "Create Member",
        path: "create-member",
        element: <CreateStudent />,
      },
    ],
  },
];
