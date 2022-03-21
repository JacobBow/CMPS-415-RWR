const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const user = {
  name: 'Jack',
  isMarried: false,
  age: 25
}

express()
  .use(express.static(path.join(__dirname, 'public')))

  .set('views', path.join(__dirname, 'views'))

  .set('view engine', 'ejs')

  .get('/', (req, res) => res.send(user))

  .get('/test', (req, res) => res.send("Here is your response Jacob!"))

  .listen(PORT, () => console.log(`Listening on ${ PORT }`));