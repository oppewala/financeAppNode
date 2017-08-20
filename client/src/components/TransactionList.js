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
            <div className="card">
                <div className="card-header">
                    <h4>Transaction Listing</h4>
                </div>
                <TransactionAdd onAddTransaction={this.addTransaction} />
                <div className="card-body">
                    <table className="table table-striped table-hover mb-0">
                        <thead className="thead">
                        <tr key="0">
                            <th>Date</th>
                            <th>Description</th>
                            <th className="text-right">Amount</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.renderTransactions(this.state.transactions)}
                        </tbody>
                    </table>
                </div>
                <div className="card-footer">
                    <div className="row">
                        <div className="col-3">
                            <button type="button" className="btn btn-secondary btn-sm mr-1 disabled">Prev</button>
                            <button type="button" className="btn btn-secondary btn-sm mr-1 disabled">Next</button>
                            <span>Showing 1-{this.state.transactions.length} of {this.state.transactions.length}</span>
                        </div>
                        <div className="col-9">
                            <button type="button" className="btn btn-primary btn-sm float-right" data-toggle="modal" data-target="#addTransactionModal">Add Transaction(s)</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}