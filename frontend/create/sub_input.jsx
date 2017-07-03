import React from 'react';

class SubInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: this.props.question,
      condition: this.props.condition,
      type: this.props.type,
      subInputs: this.props.subInputs,
      path: this.props.path,
      form: JSON.parse(localStorage.getItem('form'))
    };
    this.handleChange = this.handleChange.bind(this);
    this.addSubInput = this.addSubInput.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(e, f, path = this.state.path, form = JSON.parse(localStorage.getItem('form'))) {
    const field = e.currentTarget.className;
    const val = e.currentTarget.value;
    if (path.length === 1) {
      let condition = this.state.condition;
      if (field === "question") {
        form[path[0]].question = val;
      } else if (field === "condition") {
        condition[0] = val;
        form[path[0]].condition = condition;
      } else if (field === "condition-val") {
        condition[1] = val;
        form[path[0]].condition = condition;
      } else {
        form[path[0]].type = val;
      }
      return form;
    } else {
      form[path[0]].subInputs = this.handleChange(e, f, path.slice(1), form[path[0]].subInputs);
    }

    this.setState({ form });
    localStorage.setItem('form', JSON.stringify(form));
    return form;
  }

  addSubInput(e, f, path = this.state.path, form = JSON.parse(localStorage.getItem('form'))) {
    if (path.length === 1) {
      let subInputsIds = Object.keys(this.state.subInputs);
      const subInputId = (subInputsIds[subInputsIds.length - 1] === undefined) ? 0 : parseInt(subInputsIds[subInputsIds.length - 1]) + 1;

      let subInputs = this.state.subInputs;
      subInputs[subInputId] = { condition: ["Equal", ""], question: "", type: "Text", subInputs: {} };
      this.setState({ subInputs });
      form[path[0]].subInputs[subInputId] = subInputs[subInputId];
      return form;
    } else {
      form[path[0]].subInputs = this.addSubInput(e, f, path.slice(1), form[path[0]].subInputs);
    }

    this.setState({ form });
    localStorage.setItem('form', JSON.stringify(form));
    return form;
  }

  deleteChild(subInputId) {
    let subInputs = this.state.subInputs;
    delete subInputs[subInputId];
    this.setState({ subInputs });
  }

  handleDelete(e, f, path = this.state.path, form = JSON.parse(localStorage.getItem('form'))) {
    if (path.length === 1) {
      delete form[path[0]];
      this.props.deleteSelf(parseInt(path[0]));
      return form;
    } else {
      form[path[0]].subInputs = this.handleDelete(e, f, path.slice(1), form[path[0]].subInputs);
    }

    this.setState({ form });
    localStorage.setItem('form', JSON.stringify(form));
    return form;
  }

  renderSubInputs() {
    return Object.keys(this.state.subInputs).map(id => (
      <SubInput
        key={ id }
        question={ this.state.subInputs[id].question }
        condition={ this.state.subInputs[id].condition }
        type={ this.state.subInputs[id].type }
        subInputs={ this.state.subInputs[id].subInputs }
        path={ this.state.path.concat([id]) }
        deleteSelf={ this.deleteChild.bind(this) }
      />
    ));
  }

  render() {
    return (
      <main className="sub-input">
        <main className="input">
          <div className="input-field">
            <label>Condition</label>
            <select
              className="condition"
              defaultValue={ this.state.condition[0] }
              onChange={ this.handleChange }
            >
              <option>Equal</option>
              <option>Less Than</option>
              <option>More Than</option>
            </select>
            <input
              className="condition-val"
              type="text"
              defaultValue={ this.state.condition[1] }
              onChange={ this.handleChange }
            ></input>
          </div>
          <div className="input-field">
            <label>Question</label>
            <input
              className="question"
              type="text"
              defaultValue={ this.state.question }
              onChange={ this.handleChange }
            ></input>
          </div>
          <div className="input-field">
            <label>Type</label>
            <select
              className="type"
              defaultValue={ this.state.type }
              onChange={ this.handleChange }
            >
              <option>Text</option>
              <option>Number</option>
              <option>Yes/No</option>
            </select>
          </div>
          <div className="input-buttons">
            <li
              onClick={ this.addSubInput }
              className="button">Add Sub-Input
            </li>
            <li
              onClick={ this.handleDelete }
              className="button">Delete
            </li>
          </div>
        </main>
        { this.renderSubInputs() }
      </main>
    );
  }
}

export default SubInput;
