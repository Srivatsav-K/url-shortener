const mongoose = require('mongoose')

const connectDB = () => {
    mongoose.connect('mongodb://localhost:27017/url-shortner')
        .then(() => {
            console.log('connected to db')
        })
        .catch((err) => {
            console.log('error connecting to db', err)
        })
}

module.exports = connectDB