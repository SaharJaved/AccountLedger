import React, { Component } from 'react';
import { render } from 'react-dom';


export default class InputLedger extends Component {
  constructor(props) {
    super();
    this.state = {
      input: { accountFrom: '', accountTo: '', debit: 0, credit: 0, title: '' },



    };
    this.changeInput = this.changeInput.bind(this);

  }


  changeInput(ev) {
    console.log('changer', ev.target.name)
    this.state.input[ev.target.name] = ev.target.value

    this.setState({
      input: this.state.input
    })
    console.log(this.state.input)
  }

  addLedger() {

    this.props.addLedger(this.state.input);

    this.setState({
      input: ""
    })
  }

  render() {
    return (
     
      <div style={{ margin: 10 }}>
        <form className="col s12 form-padding">
          <div className="row">
            <div className="input-field col s6">

              <input
                value={this.state.input.accountFrom}
                placeholder="accountFrom"
                onChange={this.changeInput}
                name="accountFrom"

              />
              <label className="active" htmlFor="accountFrom">accountFrom</label>
            </div>
            <div className="input-field col s6">

              <input
                value={this.state.input.accountTo}
                placeholder="accountTo"
                onChange={this.changeInput}
                name="accountTo"
               

              />
              <label className="active" htmlFor="accountTo">accountTo</label>

            </div>
            <div className="input-field col s6 ">
              <input
                value={this.state.input.credit}
                placeholder="credit"
                onChange={this.changeInput}
                name="credit"
                type="number"
              />
              <label className="active" htmlFor="credit">credit</label>
            </div>
            <div className="input-field col s6 ">

              <input
                value={this.state.input.debit}
                placeholder="debit"
                onChange={this.changeInput}
                name="debit"
                type="number"
              />
              <label className="active" htmlFor="debit">debit</label>
            </div>

            <div className="input-field col s12">

              <textarea id="textarea1" className="materialize-textarea" name="title"   onChange={this.changeInput}></textarea>
              <label className="active" htmlFor="textarea1">Textarea</label>
            </div>
          </div>
          <a style={{ margin: 5 }} className="waves-effect waves-light btn" onClick={() => { this.addLedger() }}>
            Add</a>

        </form>
      </div>
      
    );
  }
}

