const ToDoList = require('./todolist')

ToDoList.deleteMany().then(() => {
    console.log('deleted all products')
    process.exit() //prevent hanging
}).catch ((error) => {
    console.error(error)
})