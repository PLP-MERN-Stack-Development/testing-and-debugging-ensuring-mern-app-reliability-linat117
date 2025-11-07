const express = require('express');
const cors = require('cors');
const bugsRoutes = require('./routes/bugs.routes');
const errorHandler = require('./middleware/errorHandler');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/bugs', bugsRoutes);

app.use(errorHandler);

module.exports = app;
