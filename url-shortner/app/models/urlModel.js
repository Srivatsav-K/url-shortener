const mongoose = require('mongoose')
const isURL = require('validator/lib/isURL')
const sh = require('shorthash')

const { Schema } = mongoose

const urlSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true,
        minlength: 4
    },
    originalUrl: {
        type: String,
        required: [true, 'Original URL is required'],
        validate: {
            validator: function (value) {
                return isURL(value)
            },
            message: function () {
                return 'Invalid URL'
            }
        }
    },
    hashedUrl: {
        type: String,
    }
}, { timestamps: true })

urlSchema.pre('save', function (next) {
    let hashedUrl
    try {
        hashedUrl = sh.unique(this.originalUrl)
        this.hashedUrl = hashedUrl
        next()
    } catch (error) {
        console.log(error)
    }
})

const Url = mongoose.model('Url', urlSchema)

module.exports = Url
