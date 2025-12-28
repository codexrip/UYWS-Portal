require('dotenv').config();
const mongoose = require('mongoose');
const Initiative = require('./models/Initiative');

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("✅ MongoDB Connected for Seeding"))
    .catch(err => console.log(err));

const sampleInitiatives = [
    {
        title: "Clean River Campaign",
        description: "Join us this weekend to clean up the river banks and protect our local water source. Gloves and bags provided.",
        date: new Date("2024-03-15"),
        location: "City River Park",
        imageUrl: "https://images.unsplash.com/photo-1618477461853-5f8dd68aa372?w=800&auto=format&fit=crop&q=60"
    },
    {
        title: "Food Drive for Families",
        description: "Collecting non-perishable food items for local families in need. Drop off at the community center.",
        date: new Date("2024-03-20"),
        location: "Community Center Hall",
        imageUrl: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&auto=format&fit=crop&q=60"
    },
    {
        title: "Tree Planting Day",
        description: "Help us plant 500 new trees to increase our city's green cover. Bring a shovel if you have one!",
        date: new Date("2024-04-05"),
        location: "Greenway Forest Reserve",
        imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=60"
    }
];

const seedDB = async () => {
    await Initiative.deleteMany({}); // Clears old data to avoid duplicates
    await Initiative.insertMany(sampleInitiatives);
    console.log("✅ Database Seeded Successfully!");
    mongoose.connection.close();
};

seedDB();