'use strict';

const Set = require('../model/set');

module.exports = function setBrowseHandler(req, res, next) {
  Set.find({ }, (err, docs) => {
    if (err) return next(err);
    res.json(docs);
    next();
  });
};
