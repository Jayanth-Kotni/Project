###User Management App
A React-based User Management application to list, add, edit, and delete users. The app utilizes React Router for navigation, Axios for API requests, and includes error handling with an ErrorBoundary component.

###Features
View Users: Displays a list of users fetched from an API.
Add User: Allows adding a new user via a form.
Edit User: Edit existing user details.
Delete User: Remove users from the list.
Error Handling: Handles errors gracefully using an ErrorBoundary.
###Technologies Used
React: Component-based front-end framework.
React Router: Navigation between pages.
Axios: HTTP client for API requests.
CSS: Custom styling for responsiveness and aesthetics.
JSONPlaceholder: Mock API for testing.
###Installation
1. Clone the Repository
git clone https://github.com/your-username/user-management-app.git
cd user-management-app
2. Install Dependencies
npm install
3. Run the App
npm start
The app will be available at http://localhost:3000 in your browser.

###File Structure

src
├── components
│   ├── UserList          # Component for displaying the list of users
│   ├── UserForm          # Component for adding/editing users
│   ├── ErrorBoundary     # Component for handling runtime errors
├── App.css               # Global styles
├── App.js                # Main application entry point
├── index.js              # React entry point
###Usage
View Users
Navigate to / (default route) to view the list of users.
Add User
Click the Add User button on the user list page.
Fill in the form and submit.
Edit User
Click the Edit button next to a user.
Update the user details in the form and save.
Delete User
Click the Delete button next to a user to remove them.
###API Information
The app uses the JSONPlaceholder API for testing:

Fetch Users: GET /users
Delete User: DELETE /users/:id
Add/Edit User: POST/PUT /users
Known Issues
The mock API doesn’t persist changes (data resets on refresh).
Limited user data fields due to the mock API.
Contributing
Fork the repository.
Create a new branch (git checkout -b feature-branch).
Commit changes (git commit 
