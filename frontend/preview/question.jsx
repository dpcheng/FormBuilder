import React from 'react';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = { answer: "" };
  }

  renderField() {
    if (this.props.type === "Yes/No") {
      return <div>
        <label>
          <input type="radio"></input>
          Yes
        </label>
        <labeL>
          <input type="radio"></input>
          No
        </labeL>
      </div>;
    } else {
      return <input type="text" ></input>;
    }
  }

  render() {
    return (
      <main>
        <div>
          { this.props.question }
        </div>
          { this.renderField.bind(this)() }
      </main>
    );
  }
}

export default Question;
