const express = require('express'),
      app     = express(),
      envPORT = 3000;

app.get('/', function(req, res) {
    res.send("hello world");
});

app.listen(envPORT, function() {
    console.log("running on port " + envPORT);
});
