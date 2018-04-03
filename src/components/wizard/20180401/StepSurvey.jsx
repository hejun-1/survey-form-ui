import React from 'react';
import { Form } from '../../survey-forms/20180401';
import service from '../../../service.jsx';
import { QRCode } from '../../qr-code';

let form = null;

class StepSurvey extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      validateStateClass: '',
      statementToggle: false
    };

    this.onUserIdChange = this.onUserIdChange.bind(this);
    this.toggleStatement = this.toggleStatement.bind(this);
  }

  toggleStatement() {
    this.setState({
      statementToggle: !this.state.statementToggle
    })
  };

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
      service.validateUserId('自采尿液送检HIV问卷调查-昆明医科大学', evt.target.value).then(() => {
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
    if (!form.validate()) {
      return false;
    }

    if (!this.props.getStore().userId) {
      this.setState({
        validateStateClass: 'validate-error'
      });
      return false;
    }

    return service.validateUserId('自采尿液送检HIV问卷调查-昆明医科大学', this.props.getStore().userId).then(() => {
      const store = this.props.getStore();
      store.tags = store.questions.map((q) => q.value).filter((t) => t && t.length > 0);
      return service.submit(store).then((seqNo) => {
        store.seqNo = seqNo;
      });
    });
  }

  render() {
    return (
      <div>
        <div className="row">
          <div>
            <div className="wizard-step-header">
              <label className="col-md-12 control-label">
                <h2>第{this.props.index}步: 填写调查问卷(昆明医科大学)</h2>
              </label>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="wizard-card wizard-scroll-container">
                  <div>
                    <code>本次调查问卷前250人可获取10元红包奖励。调查问卷于2018年4月3日开始到2018年4月17日结束</code>
                    <p>
                      “自采尿液送检HIV”是一种既能最大程度保护个人隐私，又能及早知晓自己感染状况的匿名检测方式。
                      学生可在高校自助售货机购买或相关机构免费领取尿液HIV筛查服务包，
                      采集尿液后投放到自助售货机的样品回收箱，志愿者或医务室工作人员定期收集样本送至当地疾控中心实验室进行检测，
                      学生可凭借唯一样本编码网络查询结果，并获得相应的咨询转介服务。
                    </p>
                    <p>
                      为更好地设计和实施此创新检测模式，我们需要了解您的意见和建议，希望您回答以下问题：
                    </p>
                  </div>
                  <div className={`question ${this.state.validateStateClass}`}>
                    <label onClick={this.toggleStatement}>微信商城ID (点击查看如何获取<span className="glyphicon glyphicon-question-sign" style={{"cursor": "pointer"}}></span>)</label>
                    {this.state.statementToggle && <code>
                      <p>1. 关注公众号<QRCode/></p>
                      <p>2. 进入“仁爱康联”公众号，点击底部菜单“我的商城”</p>
                      <p>3. 商城底部菜单，点击“会员主页”</p>
                      <p>4. 头像右边的ID即“商城ID”</p>
                    </code>}
                    <div className="ui form"><input placeholder="微信商城ID仅能提交一次问卷" className="form-control" onBlur={this.onUserIdChange} onChange={this.onUserIdChange}/></div>
                  </div>
                  <Form school={"昆明医科大学"} showGroupCQuestions={true} ref={f => form = f} getStore={() => (this.props.getStore())} updateStore={(u) => {this.props.updateStore(u)}}></Form>
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
