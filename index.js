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

  //.post('/emr', (req, res) => )

  .listen(PORT, () => console.log(`Listening on ${ PORT }`));