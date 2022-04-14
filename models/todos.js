import mongoose from "mongoose";

const todosSchema = mongoose.Schema({
    name:String,
    isCompleted:Boolean,
    createdAt:{
        type:Date,
        default: new Date(),
    }
});

const Todos = mongoose.model('Todos', todosSchema);

export default Todos;