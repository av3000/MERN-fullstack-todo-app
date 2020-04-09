const express = require('express'),
      router  = express.Router(),
      db      = require("../models");
      helpers = require("../helpers/todos");

router.get   ('/',        helpers.getTodos);
router.post  ('/',        helpers.createTodo);
router.get   ('/:todoId', helpers.getTodo);
router.put   ('/:todoId', helpers.updateTodo);
router.delete('/:todoId', helpers.deleteTodo);

module.exports = router;