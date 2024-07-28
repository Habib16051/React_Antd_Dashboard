import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/common/protected-route.component";
import { routes } from "./routes/routes-list";

const App = () => {
  return (
    <Routes>
      {routes.map(
        ({ title, url, component: Component, isProtected, permission }) => {
          if (!isProtected)
            return <Route key={title} path={url} element={<Component />} />;
          return (
            <Route
              key={title}
              path={url}
              element={
                <ProtectedRoute permission={permission} title={title}>
                  <Component />
                </ProtectedRoute>
              }
            />
          );
        }
      )}
    </Routes>
  );
};

export default App;
