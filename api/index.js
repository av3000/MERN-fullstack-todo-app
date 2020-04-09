const express    = require('express'),
      app        = express(),
      envPORT    = 3000,
      bodyParser = require('body-parser');

const todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function(req, res) {
    res.send("hello world from root");
});

app.use('/api/todos', todoRoutes);

app.listen(envPORT, function() {
    console.log("running on port " + envPORT);
});
