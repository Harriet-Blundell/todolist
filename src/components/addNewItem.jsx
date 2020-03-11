import React from 'react';

export default class AddNewItem extends React.Component {
  state = {
    input: ''
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="Input Task"
          type="text"
          name="input"
          onChange={this.handleChange}
          value={this.state.input}
        />
        <button>Add Task</button>
      </form>
    );
  }

  handleSubmit = event => {
    event.preventDefault();
    const { input } = this.state;
    this.props.newItem(input);
    this.setState({ input: '' });
  };

  handleChange = event => {
    const { value } = event.target;
    this.setState({ input: value });
  };
}
