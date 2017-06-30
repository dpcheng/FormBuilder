import React from 'react';

import CreateInput from './create_input';

class CreateIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {form: {}};
    this.renderInputs = this.renderInputs.bind(this);
  }

  componentWillMount() {
    const prevForm = JSON.parse(localStorage.getItem('form'));
    if (prevForm) {
      this.setState({ form: prevForm });
    }
  }

  renderInputs() {
    let inputs = Object.keys(this.state.form).map(id => <CreateInput key={id} />);
    return inputs;
  }

  addInput() {
    const inputCount = Object.keys(this.state.form).length;
    let form = this.state.form;
    form[inputCount] = {};
    this.setState({ form });
    localStorage.setItem('form', JSON.stringify(this.state.form));
  }

  render() {
    return (
      <main>
        { this.renderInputs() }
        <li className="button" onClick={ this.addInput.bind(this) }>Add Input</li>
      </main>
    );
  }
}

export default CreateIndex;
