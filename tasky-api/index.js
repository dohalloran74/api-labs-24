import dotenv from 'dotenv';
import express from 'express';
import tasksRouter from './api/tasks';
import './db';
import usersRouter from './api/users';
// other imports
import cors from 'cors';

dotenv.config();

const app = express();

// Enable CORS for all requests
app.use(cors());

const port = process.env.PORT;

app.use(express.json());

app.use('/api/tasks', tasksRouter);

app.use('/api/users', usersRouter);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});