const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (if any)
app.use(express.static('public'));

// Array to store registered users (for demonstration purposes)
let registeredUsers = [];

// Route to handle form submission
app.post('/register', (req, res) => {
    const { name, address, contact, email, password } = req.body;

    // Add the submitted data to the array
    registeredUsers.push({
        name,
        address,
        contact,
        email,
        password
    });

    // Send a response indicating success
    res.json({ message: 'User registered successfully' });
});

// Route to get all registered users
app.get('/users', (req, res) => {
    // Return the array of registered users
    res.json(registeredUsers);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
