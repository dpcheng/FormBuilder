import React from 'react';

class CreateInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main>
        <label>Question
          <input type="text" ></input>
        </label>
        <button>Add Sub-Input</button>
        <button>Delete</button>
      </main>
    );
  }
}

export default CreateInput;
