import React from 'react';

import CreateInput from './create_input';

class CreateIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { form: {}, inputCount: 0};
    this.renderInputs = this.renderInputs.bind(this);
  }

  componentWillMount() {
    const prevForm = JSON.parse(localStorage.getItem('form'));
    const inputCount = parseInt(localStorage.getItem('inputCount'));
    if (prevForm) {
      this.setState({ form: prevForm, inputCount });
    }
  }

  deleteChild(form) {
    this.setState({ form });
  }

  renderInputs() {
    let inputs = Object.keys(this.state.form).map(id =>
      <CreateInput
        key={ id }
        inputId={ id }
        deleteSelf={ this.deleteChild.bind(this) }
        question={ this.state.form[id].question }
        type={ this.state.form[id].type }
      />);
    return inputs;
  }

  addInput() {
    let form = this.state.form;
    form[this.state.inputCount] = { question: "", type: "Text" };
    localStorage.setItem('form', JSON.stringify(this.state.form));
    localStorage.setItem('inputCount', this.state.inputCount + 1);
    this.setState({ form, inputCount: this.state.inputCount + 1 });
  }

  render() {
    return (
      <main>
        { this.renderInputs() }
        <li id="add-input" className="button" onClick={ this.addInput.bind(this) }>Add Input</li>
      </main>
    );
  }
}

export default CreateIndex;
