const mongoose = require('mongoose');
      url      = 'mongodb://localhost/todo-api';
mongoose.set('debug', true);
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  };
   
mongoose.connect(url, options)
.catch(error => console.error(error));

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");