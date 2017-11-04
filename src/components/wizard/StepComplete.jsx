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
                    <ul>
                      <li>
                        申请到免费服务包后，我们会安排发货，京津翼地区正常情况2天内到达，其他地区是2-5天，偏远地区5-7天。
                      </li>
                      <li>
                        如果您的照片不合格，仁爱网将会于您提交调查问卷2天内发邮件通知您。
                      </li>
                      <li>
                        如果您需要了解发货情况可以在您提交调查问卷2天后，发邮件向仁爱网咨询，仁爱网邮箱kefu@renaijiance.com邮件内请注明：您的调查问卷编号。
                      </li>
                    </ul>
                    注：仁爱网首页官方客服通道和QQ客服暂不处理此项目的发货咨询。
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
