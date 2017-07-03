import React from 'react';

class PreviewIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { form: JSON.parse(localStorage.getItem('form'))};
  }

  renderTopLevelQuestions() {
    return Object.keys(this.state.form).map(id => (
      id
    ));
  }

  render() {
    return (
      <main>
        { this.renderTopLevelQuestions.bind(this)() }
      </main>
    );
  }
}

export default PreviewIndex;
