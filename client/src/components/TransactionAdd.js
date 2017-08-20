import React, {Component} from 'react';
import moment from 'moment';

export default class TransactionAdd extends Component {
    constructor(props) {
        super(props);

        var momentNow = moment()
        this.state = {
            trans: {
                description: '',
                amount: '',
                date: momentNow.format("YYYY-MM-DD")
            },
            showCard: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        console.log("other  Change");
        
        this.setState({
            trans: {
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        let trans = this.state;

        this.props.onAddTransaction(trans);

        var momentNow = moment()
        this.setState({
            description: '',
            amount: '',
            date: momentNow.format("YYYY-MM-DD")
        })
        event.preventDefault();
    }

    render() {
        return (
            <div className="modal fade" id="addTransactionModal">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <form onSubmit={this.handleSubmit}>
                            <div className="modal-header">
                                <h3 className="modal-title">Add Transaction</h3>
                            </div>
                            <div className="modal-body">
                                <div className="row">
                                    <div className="form-group col-md-12">
                                        <label htmlFor="transactionAddDescription">Description:</label>
                                        <input name="description" type="text" className="form-control" id="transactionAddDescription" placeholder="Description" value={this.state.trans.description} onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="transactionAddAmount">Amount:</label>
                                        <div className="input-group">
                                            <span className="input-group-addon">$</span>
                                            <input name="amount" type="number" className="form-control" id="transactionAddAmount" placeholder="Amount" value={this.state.trans.amount} onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="transactionAddDate">Date:</label>
                                        <div className="input-group">
                                            <input name="date" type="text" className="form-control" id="transactionAddDate" value={this.state.trans.date} onChange={this.handleChange} />
                                            <span className="input-group-btn">
                                                <button className="btn btn-secondary" type="button">Cal</button>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                                <button type="submit" className="btn btn-outline-primary">Add Transaction</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}