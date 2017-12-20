const mongoose = require('./init')

const toDoListSchema = new mongoose.Schema({
    name: String,
    completed: Boolean
})

const toDoList = mongoose.model('ToDoList', toDoListSchema)

module.exports = toDoList