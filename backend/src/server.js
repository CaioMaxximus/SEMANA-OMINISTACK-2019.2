const express = require('express');
const app = express();
const routes = require('./routes')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path');
mongoose.connect('mongodb+srv://oministack9:jdps2238oministack@serveraplicacaooministack-zdtdh.mongodb.net/semanaoministack?retryWrites=true&w=majority', {
    useNewUrlParser : true,
    useUnifiedTopology: true
});
app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname,'..','uploads')));
app.use(routes);
app.listen(3333);