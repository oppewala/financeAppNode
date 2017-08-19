import React, {Component} from 'react';
import moment from 'moment';

export default class TransactionAdd extends Component {
    constructor(props) {
        super(props);

        var momentNow = moment()
        this.state = {
            description: '',
            amount: '',
            date: momentNow.format("YYYY-MM-DD")
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
            [name]: value
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
            <form className="pb-3" onSubmit={this.handleSubmit}>
                <h3>Add Transaction</h3>
                <div className="row">
                    <div className="form-group col-md-12">
                        <label htmlFor="transactionAddDescription">Description:</label>
                        <input name="description" type="text" className="form-control" id="transactionAddDescription" placeholder="Description" value={this.state.description} onChange={this.handleChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-md-5">
                        <label htmlFor="transactionAddAmount">Amount:</label>
                        <div className="input-group">
                            <span className="input-group-addon">$</span>
                            <input name="amount" type="number" className="form-control" id="transactionAddAmount" placeholder="Amount" value={this.state.amount} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="transactionAddDate">Date:</label>
                        <div className="input-group">
                            <input name="date" type="text" className="form-control" id="transactionAddDate" value={this.state.date} onChange={this.handleChange} />
                            <span className="input-group-btn">
                                <button className="btn btn-secondary" type="button">Cal</button>
                            </span>
                        </div>
                    </div>
                    <div className="input-group col-md-3">
                        <input className="btn btn-outline-primary btn-block" type="submit" value="Add Transaction" />
                    </div>
                </div>
            </form>
        )
    }
}