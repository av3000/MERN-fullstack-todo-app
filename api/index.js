let express = require('express'),
    app     = express();

const envPORT = 3000;

app.get('/', function(req, res) {
    res.send("hello world");
});

app.listen(envPORT, function() {
    console.log("running on port " + envPORT);
});
