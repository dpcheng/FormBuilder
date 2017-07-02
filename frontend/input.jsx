import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { question: this.props.question, type: this.props.type, subInputs: this.props.subInputs };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(field) {
    const prevForm = JSON.parse(localStorage.getItem('form'));

    return e => {
      if (field === "question") {
        prevForm[this.props.inputId] = { question: e.currentTarget.value, type: this.state.type };
        this.setState({ question: e.currentTarget.value });
      } else {
        prevForm[this.props.inputId] = { question: this.state.question, type: e.currentTarget.value };
        this.setState({ type: e.currentTarget.value });
      }

      localStorage.setItem('form', JSON.stringify(prevForm));
    };
  }

  handleDelete() {
    const prevForm = JSON.parse(localStorage.getItem('form'));
    delete prevForm[this.props.inputId];
    localStorage.setItem('form', JSON.stringify(prevForm));

    this.props.deleteSelf(prevForm);
  }

  render() {
    return (
      <main>
        <main className="input">
          <div className="input-field">
            <label>Question</label>
            <input onChange={ this.handleChange("question") } type="text" defaultValue={ this.state.question }></input>
          </div>
          <div className="input-field">
            <label>Type</label>
            <select onChange={ this.handleChange("type" )} defaultValue={ this.state.type }>
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

      </main>
    );
  }
}

export default Input;
