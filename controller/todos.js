import Todos from "../models/todos.js";

export const getTodos = async (req, res) => {
    try {
        const todos = await Todos.find();
        res.status(200).json(todos)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

export const createTodo = async (req, res) => {
    const newTodos = new Todos(req.body);
    try {
        await newTodos.save();
        res.status(200).json(newTodos)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

export const getByIdTodo = async (req, res) => {
    const { id: _id } = req.params;
    try {
        const todosFilter = await Todos.FindById(_id);
        res.status(200).json(todosFilter)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}



export const deleteTodo = async (req, res) => {
    const { id: _id } = req.params;
    try {
        const todos = await Todos.findByIdAndRemove(_id);
        res.status(200).json(todos);
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

export const updateTodo = async (req, res) => {
    const { id: _id } = req.params;
    const todo = req.body;
    try {
        const updateTodo = await Todos.findByIdAndUpdate(_id, todo, { new: true });
        res.status(200).json(updateTodo);
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}