import React, { Component } from 'react';
import { render } from 'react-dom';
import InputLedger from './inputLedger'



export default class LedgerList extends Component {

    constructor(props) {
        super();
        this.state = {
            ledgerList: [],
            isShowAddTemp: false,
            totalAmount: { debit: 0, credit: 0 },
            showToast: false

        };
        this.showAddTemplate = this.showAddTemplate.bind(this);

    }
    showAddTemplate() {
        this.setState({
            isShowAddTemp: true
        })
    }
    addLedger(ev) {
        console.log(ev)
        let oldLedger = this.state.ledgerList
        let showToster = false
        oldLedger.push(ev)
        let totalCredit = this.state.totalAmount.credit + parseInt(ev.credit)
        let totalDebit = this.state.totalAmount.debit + parseInt(ev.debit)
        if (totalCredit != totalDebit) {
         console.log(totalCredit,totalDebit)
            showToster = true;

        }

        this.setState({ ledgerList: oldLedger, isShowAddTemp: false, showToast: showToster, totalAmount: { credit: totalCredit, debit: totalDebit } })
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
            <div style={{ padding: 44 }} >           
             <table >
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
                    <tr><td>total</td><td>{this.state.totalAmount.credit}</td><td>{this.state.totalAmount.debit}</td></tr>
                </tbody>

            </table>

            {this.state.showToast &&
                   <p >Debited and Credited total amount must be same</p>                }
<br></br>            
                <a className="btn-floating btn-small waves-effect waves-light red" onClick={this.showAddTemplate}><i className="material-icons">+</i></a>
                {this.state.isShowAddTemp &&
                    <InputLedger addLedger={(ev) => { this.addLedger(ev) }} />
                }

            </div>

        );
    }
}

