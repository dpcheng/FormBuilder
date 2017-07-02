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
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e, f, path = this.state.path, form = JSON.parse(localStorage.getItem('form'))) {
    if (path.length === 1) {
      delete form[path[0]];
      return form;
    } else {
      form[path[0]].subInputs = this.handleDelete(e, f, path.slice(1), form[path[0]].subInputs);
    }
    this.props.deleteSelf(parseInt(path[path.length - 1]));
    localStorage.setItem('form', JSON.stringify(form));
    return form;
  }

  render() {
    return (
      <main className="input sub-input">
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
          <li
            onClick={ this.handleDelete }
            className="button">Delete
          </li>
        </div>
      </main>
    );
  }
}

export default SubInput;
