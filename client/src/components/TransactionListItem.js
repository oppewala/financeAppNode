import React, {Component} from 'react';

export default class TransactionListItem extends Component {
    constructor() {
        super();
    }

    removeTransaction(transID) {
        this.props.removeTransaction(transID);
    }

    render() {
        const transaction = this.props.transaction;

        return (
            <tr key={transaction.transactionID}>
                <td>{transaction.date}</td>
                <td>{transaction.transactionID} {transaction.description}</td>
                <td>{transaction.amount}</td>
                <td><button onClick={this.removeTransaction.bind(this, transaction.transactionID)}>Delete</button></td>
            </tr>
        )
    }
}