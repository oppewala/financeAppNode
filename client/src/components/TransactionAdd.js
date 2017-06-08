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
            <form onSubmit={this.handleSubmit}>
                <label>
                    Description:
                    <input name="description" type="text" value={this.state.description} onChange={this.handleChange} />
                </label>
                <label>
                    Amount:
                    <input name="amount" type="number" value={this.state.amount} onChange={this.handleChange} />
                </label>
                <label>
                    Date:
                    <input name="date" type="text" value={this.state.date} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Add Transaction" />
            </form>
        )
    }
}