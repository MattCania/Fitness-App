require('dotenv').config()
const express = require('express')

const app = express()
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression());
app.use(hpp());
app.use(
  helmet({
    contentSecurityPolicy: process.env.NODE_ENV === "production" ? true : false,
  })
);


app.listen(process.env.PORT , () => {

	console.log(`Successful Connection to Port ${process.env.PORT}`)
})