import React from "react";
import "./App.css";
import { ProjectListScreen } from "screens/project-list";
import { useAuth } from "context/auth-context";
import { AuthenticatedApp } from "authenticated-app";
import { UnauthenticatedApp } from "unauthenticatedApp";
function App() {
  const { user } = useAuth()
  return (
    <div className="App">
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </div>
  );
}

export default App;
