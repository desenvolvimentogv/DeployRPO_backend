const app = require('express')();
const cors = require('cors');
const bodyParser = require('body-parser');

const ServerController = require('./src/controllers/serverController');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());

app.get('/', (req, res) => {
  res.json({ hello: 'world' })
})

app.post('/server', ServerController().create);
app.get('/servers', ServerController().getAllServers);

app.listen(3000)