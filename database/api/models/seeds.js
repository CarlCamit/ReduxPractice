const ToDoList = require('./todolist')

ToDoList.create([
  {
    name: 'Clean room',
    completed: false
  },
  {
    name: 'Take out garbage',
    completed: false
  },
  {
    name: 'Do dishes',
    completed: false
  }
]).then((toDoList) => {
    console.log('created to do list', toDoList)
    process.exit() //prevent hanging
}).catch ((error) => {
    console.error(error)
})