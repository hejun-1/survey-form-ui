import React from 'react';
import { Form } from '../../survey-forms/20170110';
import ReactTooltip from 'react-tooltip';

class StepSurvey extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      validateStateClass: ''
    };

    this.onUserIdChange = this.onUserIdChange.bind(this);
  }

  onUserIdChange(evt) {
    this.props.updateStore({
      ...this.props.getStore(),
      userId: evt.target.value
    });
  }

  isValidated() {
    if (!this.props.getStore().userId) {
      this.setState({
        validateStateClass: 'validate-error'
      });
      return false;
    }
    return true;
  }

  getHowToGetWeChatId() {
    const html = '1. 关注“仁爱康联”公众号（出示仁爱康联公众号二维码）<br/>2. 打开仁爱康联公众号，点击菜单栏“我的商城”, 点击菜<br/>单栏“会员主页”获取ID（ID在头像右边)';
    return html;
  }


  render() {
    return (
      <div>
        <div className="row">
          <div>
            <div className="wizard-step-header">
              <code>
                本次调查问卷前1500人可获取20元红包奖励
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
                      <label>你的微信商城ID</label>
                      <label>
                        <code data-tip={this.getHowToGetWeChatId()} className="glyphicon glyphicon-question-sign" style={{cursor: "pointer"}}>如何查看自己的微信商城ID</code>
                        <ReactTooltip multiline={true} place="bottom" type="dark" effect="float"/>
                      </label>
                      <div className="ui form"><input className="form-control" onChange={this.onUserIdChange}/></div>
                    </div>
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
