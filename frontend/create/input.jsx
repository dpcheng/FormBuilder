import React from 'react';

import SubInput from './sub_input.jsx';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: this.props.question,
      type: this.props.type,
      subInputs: this.props.subInputs
    };
    this.handleChange = this.handleChange.bind(this);
  }

  deleteChild(subInputId) {
    let subInputs = this.state.subInputs;
    delete subInputs[subInputId];
    this.setState({ subInputs });
  }

  handleChange(field) {
    return e => {
      const prevForm = JSON.parse(localStorage.getItem('form'));
      if (field === "question") {
        prevForm[this.props.inputId] = {
          question: e.currentTarget.value,
          type: this.state.type,
          subInputs: this.state.subInputs
        };

        this.setState({ question: e.currentTarget.value });
      } else {
        prevForm[this.props.inputId] = {
          question: this.state.question,
          type: e.currentTarget.value,
          subInputs: this.state.subInputs
        };
        this.setState({ type: e.currentTarget.value });
      }
      localStorage.setItem('form', JSON.stringify(prevForm));
    };
  }

  addSubInput() {
    let prevForm = JSON.parse(localStorage.getItem('form'));
    let subInputsIds = Object.keys(this.state.subInputs);
    const subInputId = (subInputsIds[subInputsIds.length - 1] === undefined) ? 0 : parseInt(subInputsIds[subInputsIds.length - 1]) + 1;

    let subInputs = this.state.subInputs;
    subInputs[subInputId] = { condition: ["Equal", ""], question: "", type: "Text", subInputs: {} };
    prevForm[this.props.inputId].subInputs[subInputId] = subInputs[subInputId];
    this.setState({ subInputs });

    localStorage.setItem('form', JSON.stringify(prevForm));
  }

  renderSubInputs() {
    return Object.keys(this.state.subInputs).map(id => (
      <SubInput
        key={ id }
        question={ this.state.subInputs[id].question }
        condition={ this.state.subInputs[id].condition }
        type={ this.state.subInputs[id].type }
        subInputs={ this.state.subInputs[id].subInputs }
        path={ [this.props.inputId, id] }
        deleteSelf={ this.deleteChild.bind(this) }
      />
    ));
  }

  handleDelete() {
    const prevForm = JSON.parse(localStorage.getItem('form'));
    delete prevForm[this.props.inputId];
    localStorage.setItem('form', JSON.stringify(prevForm));

    this.props.deleteSelf(prevForm);
  }

  render() {
    return (
      <main className="tab">
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
            <li onClick={ this.addSubInput.bind(this) } className="button">Add Sub-Input</li>
            <li onClick={ this.handleDelete.bind(this) } className="button">Delete</li>
          </div>
        </main>
        { this.renderSubInputs.bind(this)() }
      </main>
    );
  }
}

export default Input;