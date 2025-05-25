const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const authRoutes = require('./routes/auth');

const app = express();
app.use(bodyParser.json());
app.use('/api/auth', authRoutes);

sequelize.sync().then(() => {
  console.log('Database connected and tables synced');
  app.listen(3000, () => console.log('Server running on http://localhost:3000'));
}).catch(err => console.error('DB error:', err));