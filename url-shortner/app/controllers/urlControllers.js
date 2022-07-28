const Url = require("../models/urlModel");

const urlControllers = {}

urlControllers.list = (req, res) => {
    Url.find()
        .then((url) => {
            res.json(url)
        })
        .catch((err) => {
            res.json({ errors: err.message })
        })
}

urlControllers.generate = (req, res) => {
    const body = req.body
    const url = new Url(body)
    url.save()
        .then((url) => {
            res.json(url)
        })
        .catch((err) => {
            res.json({ errors: err })
        })
}

urlControllers.show = (req, res) => {
    const id = req.params.id
    Url.findById(id)
        .then((url) => {
            if (url) {
                res.json(url)
            } else {
                res.json(error)
            }
        })
        .catch((err) => {
            res.json(err)
        })
}

urlControllers.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    Url.findByIdAndUpdate(id)
        .then((url) => {
            res.json(url)
        })
        .catch((err) => {
            res.json({ errors: err.message })
        })
}

urlControllers.delete = (req, res) => {
    const id = req.params.id
    Url.findByIdAndDelete(id)
        .then((url) => {
            res.json(url)
        })
        .catch((err) => {
            res.json({ errors: err.message })
        })
}

urlControllers.redirect = (req, res) => {
    const hash = req.params.hash
    Url.findOne({ hashedUrl: hash })
        .then((url) => {
            if (url) {
                res.redirect(url.originalUrl)
            } else {
                res.json({ errors: 'Invalid url' })
            }
        })
        .catch((err) => {
            res.json({ errors: err.message })
        })
}

module.exports = urlControllers