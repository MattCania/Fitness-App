require('dotenv').config()
const express = require('express')


const app = express()

app.listen(process.env.PORT , () => {

	console.log(`Successful Connection to Port ${process.env.PORT}`)
})