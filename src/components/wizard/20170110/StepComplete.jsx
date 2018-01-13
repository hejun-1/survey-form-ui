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
                    工作人员会尽快的处理您的调查问卷，请耐心等候
                    <div>
                      您的调查问卷编号为：第{Number(this.props.getStore().seqNo)}号
                    </div>
                    <div>
                      您的微信商城ID：{this.props.getStore().userId}
                    </div>
                    <div>
                      本调查问卷前1500人可获取红包奖励，如果您的编号小于1500，且在填写调查问卷2天内未收到红包，请联系客服领取
                    </div>
                    <div>
                      联系方式：
                    </div>
                    <ul>
                      <li>
                        1. 登陆www.renaijiance.com点击右下方客服进行咨询（早9点至晚6点，无节假日）
                      </li>
                      <li>
                        2. 加客服QQ：3284883815（早9点至晚6点，无节假日）
                      </li>
                      <li>
                        3.客服电话（周一至周五早9点至晚6点）：010-56315141
                      </li>
                    </ul>
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
