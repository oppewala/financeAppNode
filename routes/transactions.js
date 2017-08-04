var express = require('express');
var router = express.Router();
var moment = require('moment');
var admin = require('firebase-admin');

var transactions = [{
        transactionID: 1,
        date: moment("2017-01-01", "YYYY-MM-DD"),
        description: "Transaction Desc 1",
        amount: 400
    },
    {
        transactionID: 2,
        date: moment("2017-02-01", "YYYY-MM-DD"),
        description: "Tran 2",
        amount: -50
    },
    {
        transactionID: 3,
        date: moment("2017-03-01", "YYYY-MM-DD"),
        description: "Transact no 3",
    }];

router.get('/', function(req, res, next) {
  res.json(transactions);
});
router.post('/', function(req, res, next) {
  var transaction = req.body;

  transaction.transactionID = 52; 

  transactions.push(transaction);
  res.json(transactions);
});

module.exports = router;
