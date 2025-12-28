const express = require('express');
const router = express.Router();
const Volunteer = require('../models/Volunteer');

// POST (Register a volunteer)
router.post('/', async (req, res) => {
    const volunteer = new Volunteer({
        fullName: req.body.fullName,
        email: req.body.email,
        phone: req.body.phone,
        initiativeId: req.body.initiativeId,
        message: req.body.message
    });

    try {
        const newVolunteer = await volunteer.save();
        res.status(201).json(newVolunteer);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// GET all volunteers (For Admin Dashboard later)
router.get('/', async (req, res) => {
    try {
        const volunteers = await Volunteer.find().populate('initiativeId', 'title');
        res.json(volunteers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// DELETE a volunteer by ID
router.delete('/:id', async (req, res) => {
    try {
        const removedVolunteer = await Volunteer.findByIdAndDelete(req.params.id);
        res.json(removedVolunteer);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;