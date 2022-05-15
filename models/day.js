let mongoose = require('mongoose')

let daySchema = new mongoose.Schema({
    id:{
        type: Number,
    },
    dayname: {
        type: String,
        required: true
    },
    subject: {
        type: Array,
        required: true,
        default: [0,0,0,0,0,0,0],
    },
})
  
module.exports = mongoose.model('days', daySchema)