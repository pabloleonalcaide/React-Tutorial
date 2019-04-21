import React, { Component } from "react";

export default class Forms extends Component {
    constructor(){
        super();
        this.state = {
            inputName: '',
            inputTwitter: '@',
            inputTerms: true
        }
    }
  handleSubmit = (e) => {
    e.preventDefault(); // we need arrow functions to control the context (this)
    console.log(this.state)
  };

  handleChange = (e) =>{
    this.setState({inputTerms: e.target.checked})
  }
  render() {
    return (
      <div>
        <h3>Forms</h3>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label htmlFor="name">Name: </label>
            <input
              id="name"
              name="username"
              placeholder="Your name"
              ref={inputElement => (this.inputName = inputElement)}
              onChange={e => this.setState({inputName: e.target.value})}
              value={this.state.inputName}
            />
          </p>
          <p>
            <label htmlFor="twitter">Twitter: </label>
            <input
              id="twitter"
              name="twitterAccount"
              placeholder="Twitter Account"
              ref={inputElement => (this.inputMail = inputElement)}
              onChange={e => this.setState({inputTwitter: e.target.value})}
              value={this.state.inputTwitter}
            />
          </p>
          <p>
            <label>
              <input 
                checked={this.state.inputTerms}
                onChange={this.handleChange}type="checkbox" />
              Accepted terms
            </label>
          </p>
          <button>Send</button>
        </form>
      </div>
    );
  }
}
