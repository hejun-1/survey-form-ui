import React from 'react';
import { Form } from '../../survey-forms/20170110';

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
              <code>
                测试问卷
              </code>
              <label className="col-md-12 control-label">
                <h2>第一步: 自采样送检调查问卷</h2>
              </label>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="wizard-card wizard-scroll-container">
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
