import React, { Component } from 'react';
import { render } from 'react-dom';
import InputLedger from './inputLedger'
export default class LedgerList extends Component {
    constructor(props) {
        super();
        this.state = {
            ledgerList: [{ title: 'abc', credit: 200, debit: 400 }, { title: 'abc', credit: 0, debit: 200 }],
            isShowAddTemp: false

        };
        this.showAddTemplate = this.showAddTemplate.bind(this);

    }
    showAddTemplate() {
        this.setState({
            isShowAddTemp: true
        })
    }
    addLedger(ev){
        console.log(ev)
    }
    changeInput(ev) {
        console.log('changer', ev.target.name)
        this.state.input[ev.target.name] = ev.target.value

        this.setState({
            input: this.state.input
        })
        console.log(this.state.input)
    }

    render() {
        return (
            <div>            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Credit Amount</th>
                        <th>Debit Amount</th>
                    </tr>
                </thead>

                <tbody>
                    {this.state.ledgerList.map((listValue, index) => {
                        return (
                            <tr key={index}>
                                <td>{listValue.title}</td>
                                <td>{listValue.credit}</td>
                                <td>{listValue.debit}</td>
                            </tr>
                        );
                    })}

                </tbody>
            </table>

                <a className="btn-floating btn-small waves-effect waves-light red" onClick={this.showAddTemplate}><i className="material-icons">+</i></a>
                {this.state.isShowAddTemp &&
                    <InputLedger addLedger={(ev) => { this.addLedger(ev) }} />
                }
            </div>

        );
    }
}

