import React from 'react';
import { Form } from '../../survey-forms/20170110';
import service from '../../../service.jsx';

class StepSurvey extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      validateStateClass: '',
      showStatements: false
    };

    this.onUserIdChange = this.onUserIdChange.bind(this);
    this.onPhoneChange = this.onPhoneChange.bind(this);
    this.toggleStatement = this.toggleStatement.bind(this);
  }

  toggleStatement(state) {
    this.setState({
      showStatements: state
    });
  }

  onPhoneChange(evt) {
    this.props.updateStore({
      ...this.props.getStore(),
      mobile: evt.target.value
    });
  }

  onUserIdChange(evt) {
    this.props.updateStore({
      ...this.props.getStore(),
      userId: evt.target.value
    });

    if (!evt.target.value) {
      this.setState({
        validateStateClass: 'validate-error'
      });
    } else {
      service.validateUserId('中国疾控中心-中国性病艾滋病防治协会自检人群匿名有奖问卷调查项目', evt.target.value).then(() => {
        this.setState({
          validateStateClass: ''
        });
      }).catch(() => {
        this.setState({
          validateStateClass: 'validate-error'
        });
      });
    }
  }

  isValidated() {
    if (!this.props.getStore().userId) {
      this.setState({
        validateStateClass: 'validate-error'
      });
      return false;
    }
    return service.validateUserId('中国疾控中心-中国性病艾滋病防治协会自检人群匿名有奖问卷调查项目', this.props.getStore().userId);
  }

  render() {
    return (
      <div>
        <div className="row">
          <div>
            <div className="wizard-step-header">
              <code>
                本次调查问卷前500人可获取20元红包奖励!
              </code>
              <label className="col-md-12 control-label">
                <h2>第{this.props.index}步: 填写调查问卷</h2>
              </label>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="wizard-card wizard-scroll-container">
                  <div className={this.state.validateStateClass}>
                    <div className="question">
                      <code class="tishi">注意：<br></br>1、填问卷时请留下真实有效的支付宝帐号（必须是邮箱或手机支付宝帐号，否则无法收到红包）<br></br>2、红包为人工发放，2个工作日内到账<br></br>
</code>
                      <br></br>
                      <label>您的支付宝账号</label>
                      <div className="ui form"><input placeholder="每个支付宝账号ID仅能提交一次问卷" className="form-control" onBlur={this.onUserIdChange} onChange={this.onUserIdChange}/></div>
                    </div>
                  </div>
                  <div className="question">
                    <label>您的手机号码</label>
                    <div className="ui form"><input placeholder="选填，填写后可收到奖励发放通知" className="form-control" onBlur={this.onPhoneChange} onChange={this.onPhoneChange}/></div>
                  </div>
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
