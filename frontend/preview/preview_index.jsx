import React from 'react';

import Question from './question';

class PreviewIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: JSON.parse(localStorage.getItem('form'))
    };
  }

  renderQuestions() {
    return Object.keys(this.state.form).map(id => (
      <Question
        key={ id }
        question={ this.state.form[id].question }
        type={ this.state.form[id].type }
        subInputs={ this.state.form[id].subInputs }
      />
    ));
  }

  render() {
    return (
      <main>
        { this.renderQuestions.bind(this)() }
      </main>
    );
  }
}

export default PreviewIndex;
