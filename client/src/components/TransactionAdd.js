import React, {Component} from 'react';

export default class TransactionAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: "Desc",
            amount: 50,
            date: "2017-01-01"
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        let trans = this.state;

        this.props.onAddTransaction(trans);

        this.setState({
            description: "",
            amount: 0,
            date: "2017-01-01"
        })
        event.preventDefault();
    }

    render() {
        return (
            <form className="pb-3" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label for="transactionAddDescription">Description:</label>
                    <input name="description" type="text" className="form-control" id="transactionAddDescription" value={this.state.description} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label>
                        Amount:
                        <div className="input-group">
                            <span className="input-group-addon">$</span>
                            <input name="amount" type="number" className="form-control" value={this.state.amount} onChange={this.handleChange} />
                        </div>
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Date:
                        <div className="input-group">
                            <input name="date" type="text" className="form-control" value={this.state.date} onChange={this.handleChange} />
                            <span className="input-group-btn">
                                <button className="btn btn-secondary" type="button">Cal</button>
                            </span>
                        </div>
                    </label>
                </div>
                <div className="input-group">
                    <input className="btn btn-outline-primary" type="submit" value="Add Transaction" />
                </div>
            </form>
        )
    }
}