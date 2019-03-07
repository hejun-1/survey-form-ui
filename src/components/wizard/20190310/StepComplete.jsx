import React from 'react';
import $ from 'jquery';
import { QRCode } from '../../qr-code';

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
                    谢谢您的参与，如有问题请与我们联系
                    <div>
                      联系方式：
                    </div>
                    <ul>
                      <li>
                        QQ：3284883815（早9点至晚6点，无节假日）
                      </li>
                      <li>
                        电话：010-56315141（周一至周五早9点至晚6点）
                      </li>
                      <li>
                        邮件：kefu@renaijiance.com
                      </li>
                      <li>
                        公众号内留言（请注明支付宝账号以及问卷编号）
                      </li>
                    </ul>
                  </p>
                </div>
                <div>
                  <QRCode/>
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
