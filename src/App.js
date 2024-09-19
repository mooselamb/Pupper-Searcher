import React, { useContext } from "react";
import { AuthContext, AuthProvider } from "./context/AuthContext";
import LoginPage from "./components/LoginPage";
import SearchPage from "./components/SearchPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AppContainer from "./components/AppContainer";

function App() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <AppContainer>
      <Router>
        {isAuthenticated ? (
          <Routes>
            <Route path="/" element={<SearchPage />} />
            {/* Add other authenticated routes here */}
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        )}
      </Router>
    </AppContainer>
  );
}

export default function WrappedApp() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}
