import React, { useEffect, useState } from "react"; // Import React and hooks
import { Link } from "react-router-dom"; // Import Link for navigation
import axios from "axios"; // Import Axios for API requests
import "@fontsource/poppins"; // Import custom font
import "./index.css"; // Import styles

function UserList() {
  // State to hold the list of users
  const [users, setUsers] = useState([]);

  // State to handle error messages
  const [error, setError] = useState("");

  // Fetch users from the API when the component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Fetch user data from the API
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(response.data); // Update state with fetched users
      } catch (error) {
        // Handle errors during API call
        setError("Failed to fetch users. Please try again later.");
      }
    };

    fetchUsers(); // Call the fetch function
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  // Function to delete a user by ID
  const deleteUser = async (id) => {
    try {
      // Simulate delete request to API (API doesn't actually delete users in JSONPlaceholder)
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      // Update state to remove the deleted user
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      // Handle errors during the delete operation
      setError("Failed to delete user. Please try again.");
    }
  };

  return (
    <div className="container">
      {/* Header section containing the main heading and Add User button */}
      <div className="head-cont">
        <h1 className="main-head">List of Users</h1>
        {error && <p className="error">{error}</p>} {/* Display error messages, if any */}
        <Link to="/add" className="btn">
          Add User
        </Link>
      </div>

      {/* Table to display user information */}
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Render each user as a table row */}
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              {/* Split the user's name into first and last names */}
              <td>{user.name.split(" ")[0]}</td>
              <td>{user.name.split(" ")[1]}</td>
              <td>{user.email}</td>
              {/* Display the user's company name as their department */}
              <td>{user.company.name}</td>
              <td className="btn-container">
                {/* Link to edit user */}
                <Link to={`/edit/${user.id}`} className="btn">
                  Edit
                </Link>
                {/* Button to delete user */}
                <button
                  className="btn delete-btn"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList; // Export the component for use in other parts of the app
