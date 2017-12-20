const mongoose = require('./init')

const toDoListSchema = new mongoose.Schema({
    name: String,
    completed: Boolean
})

const ToDoList = mongoose.model('ToDoList', toDoListSchema)

module.exports = ToDoList