import { ReactNode } from "react";
import { useCurrentToken } from "../redux/feature/auth/AuthSlice";
import { useAppSelector } from "../redux/hooks";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children }: { children: ReactNode }) => {
  const token = useAppSelector(useCurrentToken);
  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }
  return children;
};

export default ProtectedRoutes;
