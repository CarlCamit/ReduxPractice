const express = require('express')

const ToDoList = require('../models/ToDoList')

const router = express.Router()

router.get('/todolists', (req, res) => {
    ToDoList.find().then((todolists) => {
        res.json(todolists)
    })
    .catch((error) => {
        res.json({ error: error.message })
    })
})

router.post('/todolists', (req, res) => {
    const attributes = req.body
    ToDoList.create(attributes).then((todolist) => {
        res.status(201).json(todolist)
    })
    .catch((error) => {
        res.status(400).json({ error: error.message })
    })
})

router.patch("/todolists/:id", (req, res) => {
    const id = req.params.id
    const attributes = req.body
    ToDoList.findByIdAndUpdate(id, attributes, { new: true })
      .then(todolist => {
        if (todolist) {
          res.status(200).json({ message: "You updated the to do list item!", todolist })
        } else {
          res.status(404).json({ error: error.message })
        }
      })
      .catch(error => {
        res.status(400).json({ error: error.message })
      })
  })

router.delete('/ToDoLists/:id', (req, res) => {
    id = req.params["id"]
    ToDoList.findByIdAndRemove(id).then((todolist) => {
        if (todolist) {
            res.status(200).json({ message: `To do list with an id: ${id} was removed from the database` })
        }
        else {
            res.status(400).json({ error: `To do list with the id: ${id} cannot be found` })
        }
    })
    .catch((error) => {
        res.status(404).json({ message: "Invalid ID" })
    })
})

module.exports = router