const express = require('express');
const cors = require('cors');


const app = express();

app.use(cors());
const server = require('http').Server(app);

app.use(express.json());

app.use('/theme', express.static(__dirname + '/theme'));
app.use('/atention', express.static(__dirname + '/atention'));
app.get('/', (req, res) => {
    return res.send('Hello API');
})

server.listen(process.env.PORT || 4200);