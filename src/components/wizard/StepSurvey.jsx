import React from 'react';
import { Form } from '../survey-forms/standard-form';

class StepSurvey extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  isValidated() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(), 2000);
    });
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
                  <p>"自采样送检"模式是想要进行HIV感染检测的人，参照说明书自行采集样本（尿液或血液），邮寄至艾滋病专业实验室进行检测，并凭借唯一样本编码，通过电话或网络获得检测结果和相应的咨询转介服务</p>
                  <p>为了更好的设计和实施此新型检测模式，我们需要了解您的意见和建议，希望您配合我们回答以下几个问题</p>
                  <Form></Form>
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
