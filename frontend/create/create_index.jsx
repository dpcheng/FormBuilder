import React from 'react';

import Input from './input';

class CreateIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { form: {} };
    this.renderInputs = this.renderInputs.bind(this);
  }

  componentWillMount() {
    const prevForm = JSON.parse(localStorage.getItem('form'));
    if (prevForm) {
      this.setState({ form: prevForm});
    }
  }

  deleteChild(form) {
    this.setState({ form });
  }

  renderInputs() {
    let inputs = Object.keys(this.state.form).map(id =>
      <Input
        key={ id }
        inputId={ id }
        deleteSelf={ this.deleteChild.bind(this) }
        question={ this.state.form[id].question }
        type={ this.state.form[id].type }
        subInputs={ this.state.form[id].subInputs }
      />);
    return inputs;
  }

  addInput() {
    let form = JSON.parse(localStorage.getItem('form'));
    const inputs = Object.keys(form);
    const inputId = (inputs[inputs.length - 1] === undefined) ? 0 : parseInt(inputs[inputs.length - 1]) + 1;

    form[inputId] = { question: "", type: "Text", subInputs: {} };
    localStorage.setItem('form', JSON.stringify(form));
    this.setState({ form });
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
