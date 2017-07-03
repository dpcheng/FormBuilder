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
        <label className="preview-label">
          <input
            className="preview-radio"
            type="radio"
            name="Yes/No"
            value="Yes"
            onClick={ this.handleChange }
          ></input>
          Yes
        </label>
        <labeL className="preview-label">
          <input
            className="preview-radio"
            type="radio"
            name="Yes/No"
            value="No"
            onClick={ this.handleChange }
          ></input>
          No
        </labeL>
      </div>;
    } else {
      return <div>
        <input
          className="preview-field"
          type="text"
          onChange={ this.handleChange }
          ></input>
      </div>;
    }
  }

  renderSubQuestion() {
    const subInputs = this.props.subInputs;
    const conditionFulfilledIds = Object.keys(subInputs)
      .filter(id => {
        const condition = subInputs[id].condition;
        let conditionFulfilled = false;

        if (condition[0] === "Less Than") {
          conditionFulfilled =  parseInt(this.state.answer) <
            parseInt(condition[1]);
        } else if (condition[0] === "More Than") {
          conditionFulfilled =  parseInt(this.state.answer) >
            parseInt(condition[1]);
        } else {
          conditionFulfilled =  this.state.answer === condition[1];
        }

        return conditionFulfilled;
      }
    );

    return conditionFulfilledIds.map(id => (
      <Question
        key={ id }
        question={ subInputs[id].question }
        type={ subInputs[id].type }
        subInputs={ subInputs[id].subInputs }
      />
    ));
  }

  render() {
    return (
      <main className="preview-question">
        <div>
          { this.props.question }
        </div>
          { this.renderField.bind(this)() }
          { this.renderSubQuestion.bind(this)() }
      </main>
    );
  }
}

export default Question;
