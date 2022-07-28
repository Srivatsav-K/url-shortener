const express = require('express')
const app = express()
const configDB = require('./config/database')
configDB()
const router = require('./config/routes')
const cors = require('cors')
const port = process.env.PORT || 3060

app.use(cors())

app.use(express.json())
app.use(router)

app.listen(port, () => {
    console.log('listening on port', port)
})