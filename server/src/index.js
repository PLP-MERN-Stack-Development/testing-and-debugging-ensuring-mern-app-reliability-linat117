require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');

const DB = process.env.MONGO_URI || 'mongodb://localhost:27017/mern-bug-tracker';
const PORT = process.env.PORT || 5000;

mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> {
    app.listen(PORT, () => console.log(`Server running on ${PORT}`));
  })
  .catch(err => console.error('DB connection error', err));
