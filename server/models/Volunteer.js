const mongoose = require('mongoose');

const volunteerSchema = new mongoose.Schema({
    fullName: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true 
    },
    phone: { 
        type: String, 
        required: true 
    },
    // This links the volunteer to a specific Initiative
    initiativeId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Initiative' 
    },
    message: { 
        type: String 
    },
    registeredAt: { 
        type: Date, 
        default: Date.now 
    }
});

module.exports = mongoose.model('Volunteer', volunteerSchema);