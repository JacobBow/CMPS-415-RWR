const express = require('express');
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
//use(express.urlencoded({extended: false}))
//Allow for JSON request bodies
//use(express.json())
express()
  .use(express.static(path.join(__dirname, 'public')))

  .set('views', path.join(__dirname, 'views'))

  .set('view engine', 'ejs')

  .get('/', (req, res) => res.send('Welcome'))

  .get('/emr/', (req, res) => res.status(200).send(emrRecords))

  .get('/emr/:id', (req, res) => res.status(200).send(emrRecords[req.params.id]))

   .post('/emr/', (req, res) => {
      res.status(201).send('emrRecord Created' + req.body)
    }  
  )

  .listen(PORT, () => console.log(`Listening on ${ PORT }`));