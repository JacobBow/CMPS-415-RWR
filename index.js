const express = require('express');
const path = require('path');
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

  .get('/test', (req, res) => res.send("Here is your response Jacob!"))

  .listen(PORT, () => console.log(`Listening on ${ PORT }`));