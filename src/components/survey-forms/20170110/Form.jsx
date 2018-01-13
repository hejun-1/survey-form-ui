import React from 'react';
import { Question as ChoiceQuestion } from '../../choice-question';
import { Question as SubjectiveQuestion } from '../../subjective-question';
import { Question as SelectionQuestion } from '../../selection-question';
import './Form.css';

class Form extends React.PureComponent {
  constructor(props) {
    super(props);

    this.model = {
      questions: [],
      name: '网购自我检测调查问卷'
    };
    this.props.updateStore({
      ...this.model
    });
  }

  render() {
    return (
      <div>
        <div className="question"><SubjectiveQuestion onChange={(q)=>{this.model.questions[0] = q}} label="A01: 出生年份"/></div>
      </div>
    );
  }
};

Form.PropTypes = {
  getStore: React.PropTypes.func,
  updateStore: React.PropTypes.func
};

export default Form;