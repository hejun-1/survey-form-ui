import React from 'react';
import $ from 'jquery';

class StepComplete extends React.PureComponent {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    $('#prev-button').hide();
  }

  componentDidUpdate() {
    $('#prev-button').hide();
  }

  render() {
    return (
      <div>
        <div className="row">
          <div>
            <div className="wizard-step-header">
              <label className="col-md-12 control-label">
                <h2>提交成功！</h2>
              </label>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="wizard-card wizard-scroll-container">
                  <p>
                    工作人员会尽快的处理您的调查问卷，请耐心等候。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

StepComplete.PropTypes = {
  getStore: React.PropTypes.func,
  updateStore: React.PropTypes.func
};

export default StepComplete;
