import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { MainLayout } from "../layout";
interface ProtectedRouteProps {
  children: React.ReactNode;
  permission: string | null;
  title: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, title }) => {
  const isProtected = false;
  const isAuthenticated = true;
  useEffect(() => {
    if (isProtected) {
      console.log("You dont have access");
    }
  }, [isProtected, title]);

  if (!isAuthenticated) return <Navigate to={"/login"} replace />;

  if (isProtected) {
    return (
      <MainLayout>
        <Navigate to="/" replace />
      </MainLayout>
    );
  }

  return <MainLayout>{children}</MainLayout>;
};

export default ProtectedRoute;
