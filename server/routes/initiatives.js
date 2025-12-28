const express = require('express');
const router = express.Router();
const Initiative = require('../models/Initiative');

// GET all initiatives
router.get('/', async (req, res) => {
    try {
        const initiatives = await Initiative.find().sort({ date: 1 });
        res.json(initiatives);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST a new initiative
router.post('/', async (req, res) => {
    const initiative = new Initiative({
        title: req.body.title,
        description: req.body.description,
        date: req.body.date,
        location: req.body.location,
        imageUrl: req.body.imageUrl
    });

    try {
        const newInitiative = await initiative.save();
        res.status(201).json(newInitiative);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;