import React from 'react';

class CreateIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {form: {}};
  }

  componentWillMount() {
    const prevForm = JSON.parse(localStorage.getItem('form'));
    if (prevForm) {
      this.setState({ form: prevForm });
    }
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
        Create Content
        <li>{JSON.stringify(this.state.form)}</li>
        <button onClick={ this.addInput.bind(this) }>Add Input</button>
      </main>
    );
  }
}

export default CreateIndex;
