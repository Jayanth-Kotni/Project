import React from "react"; // Import React library
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import routing components from React Router
import UserList from "./components/UserList"; // Import the UserList component
import UserForm from "./components/UserForm"; // Import the UserForm component
import ErrorBoundary from "./components/ErrorBoundary"; // Import ErrorBoundary for handling errors

import "./App.css"; // Import global styles

function App() {
  return (
    <Router>
      {/* Wrap the entire application in an ErrorBoundary to handle unexpected errors gracefully */}
      <ErrorBoundary>
        <Routes>
          {/* Define the route for the UserList component (default route) */}
          <Route path="/" element={<UserList />} />
          
          {/* Define the route for adding a new user (UserForm component) */}
          <Route path="/add" element={<UserForm />} />
          
          {/* Define the route for editing an existing user (UserForm component with user ID in the URL) */}
          <Route path="/edit/:id" element={<UserForm />} />
        </Routes>
      </ErrorBoundary>
    </Router>
  );
}

export default App; // Export the App component as the default export
