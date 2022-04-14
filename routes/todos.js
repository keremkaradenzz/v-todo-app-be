import express from 'express';
import { getTodos, createTodo, getByIdTodo, deleteTodo, updateTodo} from "../controller/todos.js";

const router = express.Router();

// url:5000/posts


router.get("/", getTodos);
router.post('/', createTodo)
router.get('/:id', getByIdTodo);
router.delete('/:id', deleteTodo);
router.patch('/:id', updateTodo)


export default router;