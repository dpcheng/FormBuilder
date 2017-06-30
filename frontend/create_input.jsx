import React from 'react';

class CreateInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main className="input">
        <div className="input-field">
          <label>Question</label>
          <input type="text"></input>
        </div>
        <div className="input-buttons">
          <li className="button">Add Sub-Input</li>
          <li className="button">Delete</li>
        </div>
      </main>
    );
  }
}

export default CreateInput;
