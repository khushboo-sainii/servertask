import express from 'express';
import {
    getTasks, addTask, deleteTask
} from '../controllers/taskController.js';

const router = express.Router();

// define routes here
router.get('/tasks', getTasks);
router.post('/tasks', addTask);
router.delete('/tasks/:id', deleteTask);

export default router;