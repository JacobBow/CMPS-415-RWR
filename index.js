const express = require('express');
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

express()
  .use(express.static(path.join(__dirname, 'public')))

  .set('views', path.join(__dirname, 'views'))

  .set('view engine', 'ejs')

  .get('/', (req, res) => res.send(user))

  .get('/emr', (req, res) => res.send(emrRecords))

  .get('/emr/:id', (req, res) => res.send(emrRecords[req.params.id]))

  .post('/emr', (req, res) => {
      
      console.log(req.body.id)
      console.log(req.body.firstName)
      console.log(req.body.lastName)
      
      res.send('Created new record: ' + emrRecords[length])
    }  
  )

  .listen(PORT, () => console.log(`Listening on ${ PORT }`));