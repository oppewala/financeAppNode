var express = require('express');
var router = express.Router();
var moment = require('moment');
var admin = require('firebase-admin');

var currentID = 3;
var getNextID = function() {
    this.currentID += 1;
    return this.currentID;
}
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

router.all('/', function(req, res, next) {
    console.log('Request received for transaction router.');
    next();
});
router.get('/', function(req, res) {
  res.json(transactions);
});
router.get('/:id', function(req, res) {
    var transaction = transactions.find(function(t) {
        t.transactionID === req.params.id;
    });
    res.json(transaction);
});
router.post('/', function(req, res) {
  var transaction = req.body;

  transaction.transactionID = this.getNextID(); 

  transactions.push(transaction);
  res.json(transactions);
});

module.exports = router;
