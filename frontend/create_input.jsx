import React from 'react';
import ReactDOM from 'react-dom';

class CreateInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {deleted: false};
  }

  handleDelete() {
    const prevForm = JSON.parse(localStorage.getItem('form'));
    delete prevForm[this.props.inputId];
    localStorage.setItem('form', JSON.stringify(prevForm));

    this.props.deleteSelf(prevForm);
  }

  render() {
    return (
      <main className="input">
        <div className="input-field">
          <label>Question</label>
          <input type="text"></input>
        </div>
        <div className="input-field">
          <label>Type</label>
          <select>
            <option>Text</option>
            <option>Number</option>
            <option>Yes/No</option>
          </select>
        </div>
        <div className="input-buttons">
          <li className="button">Add Sub-Input</li>
          <li onClick={ this.handleDelete.bind(this) } className="button">Delete</li>
        </div>
      </main>
    );
  }
}

export default CreateInput;
