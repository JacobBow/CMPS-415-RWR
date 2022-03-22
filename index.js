const express = require('express');
const app = express
const { append } = require('express/lib/response');
const res = require('express/lib/response');
const path = require('path');
const { send } = require('process');
const PORT = process.env.PORT || 5000;
const emrRecords = [
    {
      "id": 0,
      "firstName": "Jacob",
      "lastName": "Bowen",
      "favMeme": "poggers"
    },
    {
      "id": 1,
      "firstName": "Jakobe",
      "lastName": "Jones",
      "favMeme": "pepe"
    }

]

//Allow for urlencoded request bodies
app.use(express.urlencoded({extended: false}))

app.use(express.static(path.join(__dirname, 'public')))

app.set('views', path.join(__dirname, 'views'))

app.set('view engine', 'ejs')

app.get('/', (req, res) => res.send(user))

app.get('/emr/', (req, res) => res.status(200).send(emrRecords))

app.get('/emr/:id', (req, res) => res.status(200).send(emrRecords[req.params.id]))

app.post('/emr/', (req, res) => {
    console.log(req.body)
    res.status(201).send('emrRecord Created')
  }  
)

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));