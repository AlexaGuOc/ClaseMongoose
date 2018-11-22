const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const keys = require('./config/keys')

mongoose.connect(keys.mongoConection);

const app = express();
app.use(bodyParser.json());

const ruta = require('./routes/personasRoutes');
ruta(app);
// require('./routes/personasRoutes')(app);

//app.get('/', (req, res) => {
//	res.send({ mensaje: 'hola ale'});
//})



app.listen(process.env.PORT||5000);