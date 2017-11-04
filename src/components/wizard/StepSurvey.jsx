import React from 'react';
import { Form } from '../survey-forms/standard-form';

class StepSurvey extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  isValidated() {
    return true;
  }

  render() {
    return (
      <div>
        <div className="row">
          <div>
            <div className="wizard-step-header">
              <label className="col-md-12 control-label">
                <h2>第二步: 自采样送检调查问卷</h2>
              </label>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="wizard-card wizard-scroll-container">
                  <p>"自采样送检"模式是想要进行HIV感染检测的人，参照说明书自行采集样本（血液及尿液），邮寄至艾滋病专业实验室检测，数日后凭借唯一样本编码，通过网络查询结果，并获得咨询及转介服务。</p>
                  <p>为更好地设计和实施此模式，我们需要了解您的意见和建议，希望您配合我们回答以下几个问题：</p>
                  <Form getStore={() => (this.props.getStore())} updateStore={(u) => {this.props.updateStore(u)}}></Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

StepSurvey.PropTypes = {
  getStore: React.PropTypes.func,
  updateStore: React.PropTypes.func
};

export default StepSurvey;
