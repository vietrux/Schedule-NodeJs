let mongoose = require('mongoose')

let taskSchema = new mongoose.Schema({
    subject: {
        type: Number,
        required: true,
    },
    task: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('tasks', taskSchema)