import React, {Component} from 'react';
import TransactionListItem from './TransactionListItem';
import TransactionAdd from './TransactionAdd';

export default class TransactionList extends Component {
    constructor() {
        super();
        this.state = {
            transactions: [{
                transactionID: 1,
                date: "2017-01-01",
                description: "Transaction Desc 1",
                amount: 400
            },
            {
                transactionID: 2,
                date: "2017-02-01",
                description: "Tran 2",
                amount: -50
            },
            {
                transactionID: 3,
                date: "2017-03-01",
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

        this.setState((prev, props) => {
            prev.transactions.push(trans);
            prev.currentTransactionID = trans.transactionID;
            console.log(prev);
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
            .sort((a, b) => a.transactionID - b.transactionID)
            .map(transaction => <TransactionListItem removeTransaction={this.removeTransaction} transaction={transaction} />);
    };

    render() {
        return (
            <div>
                <table>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Amount</th>
                    </tr>
                    {this.renderTransactions(this.state.transactions)}
                </table>
                <TransactionAdd onAddTransaction={this.addTransaction} />
            </div>
        )
    }
}