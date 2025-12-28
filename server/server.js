require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Import Models (Make sure these files exist in /models folder)
const Application = require('./models/Application');
const User = require('./models/User'); // <--- CRITICAL FOR SIGNUP

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Database Connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("✅ MongoDB Connected Successfully"))
    .catch(err => console.error("❌ MongoDB Connection Error:", err));

// ==========================================
// 1. AUTH ROUTES (Login & Signup) - ADDED THIS
// ==========================================

// SIGNUP Route
app.post('/api/register', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "User already exists" });

        const newUser = new User({
            name,
            email,
            password,
            role: 'admin'  // <--- CHANGE THIS temporarily (was 'volunteer')
        });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        console.error("Signup Error:", err);
        res.status(500).json({ message: "Server error during registration" });
    }
});

// LOGIN Route
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

// ==========================================
// 2. DASHBOARD / APPLICATION ROUTES
// ==========================================

// Apply for a program
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

// Get My Applications
app.get('/api/my-applications/:userId', async (req, res) => {
    try {
        const apps = await Application.find({ userId: req.params.userId });
        res.json(apps);
    } catch (err) {
        res.status(500).json({ error: "Error fetching applications" });
    }
});

// ADMIN: Get ALL Applications
app.get('/api/admin/applications', async (req, res) => {
    try {
        const apps = await Application.find().sort({ appliedDate: -1 });
        res.json(apps);
    } catch (err) {
        res.status(500).json({ error: "Error fetching admin data" });
    }
});

// ADMIN: Update Status
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
// 3. EXISTING ROUTES (Initiatives/Volunteers)
// ==========================================
const initiativesRouter = require('./routes/initiatives');
const volunteersRouter = require('./routes/volunteers');

app.use('/api/initiatives', initiativesRouter);
app.use('/api/volunteers', volunteersRouter);

app.get('/', (req, res) => {
    res.send('UPOPK API is Running...');
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});