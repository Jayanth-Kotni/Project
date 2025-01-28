import React, { useState, useEffect } from "react"; // Import React and hooks
import { useNavigate, useParams } from "react-router-dom"; // Import hooks for routing
import axios from "axios"; // Import Axios for API requests
import "./index.css"; // Import styles

function UserForm() {
  const { id } = useParams(); // Get the user ID from the URL if editing an existing user
  const navigate = useNavigate(); // Hook for programmatic navigation

  // State to hold the user details
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });

  // State to handle error messages
  const [error, setError] = useState("");

  // Fetch user details if an ID is provided (Edit Mode)
  useEffect(() => {
    if (id) {
      const fetchUser = async () => {
        try {
          // Fetch the user data from the API
          const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
          if (response.data) {
            // Split the name into first and last names
            const fullName = response.data.name.split(" ");
            // Populate the form with the fetched data
            setUser({
              firstName: fullName[0] || "",
              lastName: fullName[1] || "",
              email: response.data.email || "",
              department: response.data.company?.name || "",
            });
          }
        } catch (error) {
          // Handle errors while fetching user data
          setError("Failed to fetch user details.");
        }
      };

      fetchUser(); // Call the fetch function
    }
  }, [id]); // Dependency array ensures this runs only when the `id` changes

  // Handle input field changes
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value }); // Update the user state dynamically
  };

  // Handle form submission for both adding and editing a user
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh
    try {
      if (id) {
        // If editing, send a PUT request to update the user
        await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, user);
        alert("User updated successfully!"); // Notify user of success
      } else {
        // If adding, create a new user object with a random ID
        const newUser = {
          ...user,
          id: Math.floor(Math.random() * 1000), // Generate a random ID
        };
        // Send a POST request to add the user
        await axios.post("https://jsonplaceholder.typicode.com/users", newUser);
        alert("User added successfully!"); // Notify user of success
      }

      navigate("/"); // Redirect to the main user list page
    } catch (error) {
      // Handle errors during form submission
      setError("Failed to save user. Please try again.");
    }
  };

  return (
    <div className="container">
      {/* Display the form heading based on whether it's Add or Edit mode */}
      <h1>{id ? "Edit User" : "Add User"}</h1>
      {/* Display an error message if any */}
      {error && <p className="error">{error}</p>}
      {/* User form */}
      <form onSubmit={handleSubmit} className="user-form">
        {/* Input fields for user details */}
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={user.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={user.lastName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="department"
          placeholder="Department"
          value={user.department}
          onChange={handleChange}
          required
        />
        {/* Submit button to save the user */}
        <button type="submit" className="btn">
          Save
        </button>
      </form>
    </div>
  );
}

export default UserForm; // Export the component for use in other parts of the app
