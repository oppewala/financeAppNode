import React, {Component} from 'react';
import TransactionListItem from './TransactionListItem';
import TransactionAdd from './TransactionAdd';
import moment from 'moment';

export default class TransactionList extends Component {
    constructor() {
        super();
        this.state = {
            transactions: [{
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
                amount: -350
            }],
            currentTransactionID: 3
        };

        this.addTransaction = this.addTransaction.bind(this);
        this.removeTransaction = this.removeTransaction.bind(this);
    }

    addTransaction(trans) {
        trans.transactionID = this.state.currentTransactionID + 1;
        
        trans.date = moment(trans.date, "YYYY-MM-DD");

        this.setState((prev, props) => {
            prev.transactions.push(trans);
            prev.currentTransactionID = trans.transactionID;
            return prev;
        });
        // this.forceUpdate();
    }

    removeTransaction(transID) {
        let transactions = this.state.transactions, data;
        data = transactions.filter(el => {
            return el.transactionID !== transID;
        });

        this.setState({
            transactions: data
        });
    }

    renderTransactions(transactions) {
        return transactions
            .sort((a, b) => a.date - b.date)
            .map(transaction => <TransactionListItem key={transaction.transactionID} removeTransaction={this.removeTransaction} transaction={transaction} />);
    }

    render() {
        return (
            <div className="table-responsive">
                <TransactionAdd onAddTransaction={this.addTransaction} />
                <h2>Transactions</h2>
                <table className="table table-striped table-hover pb-3">
                    <thead className="thead">
                      <tr key="0">
                          <th>Date</th>
                          <th>Description</th>
                          <th>Amount</th>
                          <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.renderTransactions(this.state.transactions)}
                    </tbody>
                </table>
            </div>
        )
    }
}