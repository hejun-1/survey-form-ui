import React from 'react';
import { Checkbox, CheckboxGroup } from 'react-checkbox-group';

class StepAgreement extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      agree: null,
      validateStateClass: ''
    };
    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(values) {
    const agree = values.length > 0 ? values[0] : false;

    this.setState({
      agree: agree
    });

    this.props.updateStore({
      agreement: agree
    });
  }

  isValidated() {
    const isValidated = this.state.agree;
    if (!isValidated) {
      this.setState({
        validateStateClass: 'validate-error'
      })
    }
    return isValidated;
  }

  render() {
    return (
      <div>
        <div className="row">
          <div>
            <div className="wizard-step-header">
              <code>
                项目截止日期是2018年2月28日，回寄样本的截止日期是2018年3月31日
              </code>
              <label className="col-md-12 control-label">
                <h2>第一步: 项目介绍及知情同意书</h2>
                <h4>请仔细阅读并且选择<code>"同意"</code>选项后进行下一步</h4>
              </label>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="wizard-card wizard-scroll-container">
                  <p>
                    我们邀请您参加"HIV血液快速自检阳性者服务项目"。本知情同意书提供给您一些信息以帮助您决定是否参加此项目，请您仔细阅读。
                  </p>
                  <p>
                    本项目已通过中国疾控中心艾防中心伦理委员会审查。
                  </p>
                  <h3>背景：</h3>
                  <p>
                    为了帮助自我检测阳性人群在匿名状态下得到专业机构的服务，排除假阳性，我们设立了此项目。即检测者自行采集样本（血液及尿液），将其邮寄至艾滋病专业实验室检测，
                    数日后凭借唯一样本编码，通过网络查询结果，并获得咨询及转介服务。
                  </p>
                  <p>
                    该项目操作简便，全程匿名，由国家艾滋病参比实验室出具专业的检测结果。
                  </p>
                  <h3>步骤:</h3>
                  <p>
                    您只需要在线上传血液自检阳性结果，填写调查问卷，网站后台将为您免费邮寄尿液筛查服务包及血样采集卡服务包。您收到后，自采尿液并取末梢血制备滤纸片干血斑，
                    邮寄到国家艾滋病参比实验室（地址附在寄给您的服务包内）。实验室收到样本后进行检测，并于收到样本后的5个工作日将检测结果上载到网络，
                    您可根据样本号在网上查询结果并接受后续服务。
                  </p>
                  <h3>安全:</h3>
                  <p>
                    本项目使用的尿液筛查服务包和血样采集卡服务包，均为一次性产品，不会造成疾病的医源性传播，请您放心。
                  </p>
                  <h3>风险与不适:</h3>
                  <p>
                    对于您来说，尿液的自采毫无风险。在您取末梢血制备滤纸片干血斑时，可能会有一些非常小的风险，包括短暂的疼痛，局部青紫，少数人会有轻度头晕。
                    参加本项目的风险不会高于正常体检。
                  </p>
                  <h3>受益:</h3>
                  <p>
                    通过检测您的尿液抗体及干血斑核酸，可以对您的感染情况做出更加专业准确的判断，排除假阳性。
                  </p>
                  <h3>隐私问题:</h3>
                  <p>
                    本项目全程匿名，进行HIV检测的国家艾滋病参比实验室和查询结果的网站都只有采样条码和检测结果，并且严格保密。项目结果发表时，将不会披露您个人的任何资料。
                  </p>
                  <h3>如果您因参与这项研究而受到伤害:</h3>
                  <p>
                    您可以获得免费治疗和相应合理的补偿。
                  </p>
                  <p>
                    您可以选择不参加本项目，或者在任何时候要求退出，您的任何与本项目有关的医疗待遇与权益不会因此而受到影响。
                  </p>
                  <p>
                    您可随时了解与本项目有关的信息资料和进展，如果您有任何问题，或您在参与项目过程中发生了任何不适与伤害，您可以通过客服电话(010-56315141，028-64070534)或邮件(kefu@renaijiance.com，liuzhihao@screnbo.com)与我们取得联系。
                  </p>
                </div>
              </div>
              <div className="wizard-mark-el">
                <div className={this.state.validateStateClass}>
                  <CheckboxGroup
                    onChange = { this.onSelect }>
                    <label><Checkbox value={"agree"}/>是否同意</label>
                  </CheckboxGroup>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

StepAgreement.PropTypes = {
  getStore: React.PropTypes.func,
  updateStore: React.PropTypes.func
};

export default StepAgreement;
