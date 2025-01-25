import MainLayout from "./component/layout/MainLayout";
import ProtectedRoutes from "./routes/ProtectedRoutes";

function App() {
  return (
    <>
      <ProtectedRoutes>
        <MainLayout />
      </ProtectedRoutes>
    </>
  );
}

export default App;
