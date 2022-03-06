import express from 'express';

import usersRoutes from './routes/users.js';

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', usersRoutes);

app.use('/', (req, res) => {
  res.send('Welcome to my Homepage');
});

app.listen(PORT, () => { console.log(`Server running on PORT: http://localhost:${PORT}`) })