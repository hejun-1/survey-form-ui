import React from 'react';
import { Question as ChoiceQuestion } from '../../choice-question';
import { Question as SubjectiveQuestion } from '../../subjective-question';
import { Question as SelectionQuestion } from '../../selection-question';
import './Form.css';

class Form extends React.PureComponent {
  constructor(props) {
    super(props);
    this.options = [
      {label: 'Option A', value: 'A'},
      {label: 'Option B', value: 'B'}
    ];

    this.model = {
      questions: []
    };
    this.props.updateStore({
      ...this.model
    });
  }

  render() {
    return (
      <div>
        <div className="question"><SubjectiveQuestion onChange={(q)=>{this.model.questions[0] = q}} label="A01: 出生年份"/></div>
        <div className="question"><ChoiceQuestion onChange={(q)=>{this.model.questions[1] = q}} options={[{label: "男", value: "男"}, {label: "女", value: "女"}]} label="A02: 性别"></ChoiceQuestion></div>
        <div className="question"><ChoiceQuestion onChange={(q)=>{this.model.questions[2] = q}} enableCustomValue={true} options={[{label: "未婚", value: "未婚"}, {label: "已婚", value: "已婚"}, {label: "同居", value: "同居"}, {label: "离婚或丧偶", value: "离婚或丧偶"}]} label="A03: 婚姻状况"></ChoiceQuestion></div>
        <div className="question"><SelectionQuestion onChange={(q)=>{this.model.questions[3] = q}} options={[{label: "汉", value: "汉"}, {label: "回", value: "回"}, {label: "蒙", value: "蒙"}, {label: "苗", value: "苗"}]} label="A04: 民族"></SelectionQuestion></div>
      </div>
    );
  }
};

Form.PropTypes = {
  getStore: React.PropTypes.func,
  updateStore: React.PropTypes.func
};

export default Form;