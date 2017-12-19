const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoose.connect('mongodb://localhost/flux', { useMongoClient: true }).then(() => {
    console.log('Successfully connected to MongoDB database')
}).catch((error) => {
    console.log('Failed to connect to MongoDB database', error)
})

module.exports = mongoose