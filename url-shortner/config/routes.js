const express = require('express')
const { route } = require('express/lib/router')
const router = express.Router()
const urlControllers = require('../app/controllers/urlControllers')

router.get('/urls', urlControllers.list)
router.get('/urls/:id', urlControllers.show)
router.get('/:hash', urlControllers.redirect)
router.post('/urls', urlControllers.generate)
router.put('/urls/:id', urlControllers.update)
router.delete('/urls/:id', urlControllers.delete)

module.exports = router