import React from 'react';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = { answer: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ answer: e.currentTarget.value });
  }

  renderField() {
    if (this.props.type === "Yes/No") {
      return <div>
        <label>
          <input
            type="radio"
            name="Yes/No"
            value="Yes"
            onClick={ this.handleChange }
          ></input>
          Yes
        </label>
        <labeL>
          <input
            type="radio"
            name="Yes/No"
            value="No"
            onClick={ this.handleChange }
          ></input>
          No
        </labeL>
      </div>;
    } else {
      return <input
        type="text"
        onChange={ this.handleChange }
      ></input>;
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
