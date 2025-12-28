require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Import Models
const Application = require('./models/Application');
const User = require('./models/User');

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
    origin: "*", // Allow all connections (Easiest for student projects)
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

// Database Connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("✅ MongoDB Connected Successfully"))
    .catch(err => console.error("❌ MongoDB Connection Error:", err));

// ==========================================
// ROUTES
// ==========================================

app.get('/', (req, res) => {
    res.send('UPOPK API is Running on Vercel...');
});

// 1. AUTH ROUTES
app.post('/api/register', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "User already exists" });

        const newUser = new User({ 
            name, email, password, role: 'volunteer' 
        });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});

app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user || user.password !== password) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});

// 2. APPLICATION ROUTES
app.post('/api/apply', async (req, res) => {
    const { userId, name, email, program } = req.body;
    try {
        const existing = await Application.findOne({ userId, program });
        if (existing) return res.status(400).json({ error: "Already applied!" });

        const newApp = new Application({ userId, name, email, program });
        await newApp.save();
        res.json(newApp);
    } catch (err) {
        res.status(500).json({ error: "Server error" });
    }
});

app.get('/api/my-applications/:userId', async (req, res) => {
    try {
        const apps = await Application.find({ userId: req.params.userId });
        res.json(apps);
    } catch (err) {
        res.status(500).json({ error: "Error fetching data" });
    }
});

app.get('/api/admin/applications', async (req, res) => {
    try {
        const apps = await Application.find().sort({ appliedDate: -1 });
        res.json(apps);
    } catch (err) {
        res.status(500).json({ error: "Error fetching admin data" });
    }
});

app.put('/api/admin/application/:id', async (req, res) => {
    try {
        const { status } = req.body;
        const updatedApp = await Application.findByIdAndUpdate(req.params.id, { status }, { new: true });
        res.json(updatedApp);
    } catch (err) {
        res.status(500).json({ error: "Error updating status" });
    }
});

// ==========================================
// VERCEL SERVER CONFIGURATION
// ==========================================
// Vercel handles the port automatically.
// We export the app for Vercel, but also listen if running locally.

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`🚀 Server running locally on port ${PORT}`);
    });
}

module.exports = app;