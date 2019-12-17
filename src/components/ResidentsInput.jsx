import React from 'react';

class ResidentsInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    this.setState({
      message: "Message"
    });
  };

  render() {
    return (<div>
      {this.state.message && <span>{this.state.message}</span>}
      <form onSubmit={this.onSubmit}>
        <label>Spouse <input type="number"/></label>
        <label>Roommates <input type="number"/></label>
        <label>Children <input type="number"/></label>
        <input type="submit" value="Next"/>
      </form>
    </div>);
  }
}

export default ResidentsInput;