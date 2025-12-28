const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: String, // Stored for easier printing
  email: String,
  program: { type: String, required: true }, // e.g., "Clean Water", "Education"
  status: { type: String, enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending' },
  appliedDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Application', ApplicationSchema);