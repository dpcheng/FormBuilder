import React from 'react';

class SubInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: this.props.question,
      condition: this.props.condition,
      type: this.props.type,
      subInputs: this.props.subInputs,
      path: this.props.path
    };
  }

  render() {
    return (
      <main className="input">
        <div className="input-field">
          <label>Condition</label>
          <select defaultValue={ this.state.condition[0] }>
            <option>Equal</option>
            <option>Less Than</option>
            <option>More Than</option>
          </select>
          <input type="text"
            defaultValue={ this.state.condition[1] }>
          </input>
        </div>
        <div className="input-field">
          <label>Question</label>
          <input type="text" defaultValue={ this.state.question }></input>
        </div>
        <div className="input-field">
          <label>Type</label>
          <select defaultValue={ this.state.type }>
            <option>Text</option>
            <option>Number</option>
            <option>Yes/No</option>
          </select>
        </div>
        <div className="input-buttons">
          <li className="button">Add Sub-Input</li>
          <li className="button">Delete</li>
        </div>
      </main>
    );
  }
}

export default SubInput;
