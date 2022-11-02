const mongoose = require ('mongoose')

const albumSchema = new mongoose.Schema({
    userid: {
        type: Number,
        require: true
    },
    id:{
        type: Number,
        require: true
    },
    title:{
        type: String,
        require: true
    }
})

module.exports= mongoose.model('albums',albumSchema);