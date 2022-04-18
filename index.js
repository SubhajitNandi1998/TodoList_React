const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use(cors());

app.use(express.static('build'))

app.listen(port, (err) => {
    if (!err)
        console.log('Listening at ' + port)
})