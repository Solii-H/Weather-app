// Setup empty JS object to act as endpoint for all routes
projectData = {}

// Require Express body parser and cors to run server and routes
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware -although body parser not in used but I left it -.
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Cors for cross origin allowance
app.use(cors())
// Initialize the main project folder
app.use(express.static('website'))

// Setup Server to port 3030
const port = 3030
app.listen(port, () => {
  console.log(
    `Server is running and listening to port number http://localhost:${port}`
  )
})

/// Start up an instance of app
// get data from the API and sending it in the ProjectData object
app.get('/allStoredData', (req, res) => {
  res.send(projectData)
})
// retreive data from ProjectData object and link them to a specific element in the html file
app.post('/storeData', (req, res) => {
  projectData.temp = req.body.temp
  projectData.date = req.body.date
  projectData.description = req.body.description
  projectData.userResponse = req.body.feelings
  res.send()
})
