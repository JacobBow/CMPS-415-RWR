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
      "age": 20,
      "symptoms": "mucus"
    },
    {
      "id": 1,
      "firstName": "Jakobe",
      "lastName": "Jones",
      "age": 21,
      "symptoms": "cough"
    }

]

express()
  //Allow for urlencoded request bodies
  .use(express.urlencoded({extended: false}))
  //Allow for JSON request bodies
  .use(express.json())

  .use(express.static(path.join(__dirname, 'public')))

  .set('views', path.join(__dirname, 'views'))

  .set('view engine', 'ejs')

  .get('/', (req, res) => res.send('Welcome'))

  .get('/emr/', (req, res) => res.status(200).send(emrRecords))

  .get('/emr/:id', (req, res) => res.status(200).send(emrRecords[req.params.id]))

  .post('/emr/', (req, res) => {
      var newRecord = req.body
      emrRecords.push(newRecord)
      res.status(201).send('New emrRecord created for ' + newRecord.firstName + ' ' + newRecord.lastName)
    }  
  )

  .listen(PORT, () => console.log(`Listening on ${ PORT }`));