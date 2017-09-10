import React from 'react';
import { Checkbox, CheckboxGroup } from 'react-checkbox-group';

class StepAgreement extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      agree: null
    };
    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(values) {
    const agree = values.length > 0 ? values[0] : false;

    this.setState({
      agree: agree
    });

    this.props.updateStore({
      agree
    });
  }

  isValidated() {
    return this.state.agree !== false;
  }

  render() {
    return (
      <div>
        <div className="row">
          <div>
            <div className="wizard-step-header">
              <label className="col-md-12 control-label">
                <h2>第一步: 项目介绍及知情同意书</h2>
                <h4>请仔细阅读并且选择<code>"同意"</code>选项后进行下一步</h4>
              </label>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="wizard-card wizard-scroll-container">
                  <p>
                    我们邀请您参加“HIV血液快速自检阳性者转介机制研究”。本知情同意书提供给您一些信息以帮助您决定是否参加此研究，请您仔细阅读。
                    您参加本项研究是自愿的，本研究已通过本研究机构伦理委员会审查。
                  </p>
                  <h3>研究背景及目的：</h3>
                  <p>
                    我国已经建立了较为完善的HIV实验室网络，筛查实验室及检测点已经遍布全国各地各级疾控、医疗等机构，且提供免费检测，年检测数超过一亿。
                    然而，截止2016年底，依然有约32.1%感染者并不知道自己的感染状态，或从未做过HIV检测.造成这种现状的原因复杂，对艾滋病的歧视和HIV检测实名制都是主要的原因之一。
                    HIV感染者，特别是HIV感染的高危人群担心个人信息暴露而受到歧视，不愿意选择医疗卫生机构的专业实验室检测
                  </p>
                  <p>
                    鉴于类似情况，国内外越来越多的人选择自我检测，即检测者购买艾滋病快速检测试剂（血液、唾液），自行检测并判读结果。另一种方式是自采样送检：
                    检测者自行采集样本（血液、尿液），将其邮/送至艾滋病专业实验室检测，再通过电话或网络获取结果，并由专业人员提供咨询及转介服务。自我检测和自采样送检相比，前者从试剂的购买、
                    检测和结果判读都是个人行为，缺少专业机构的链接；后者与医疗卫生机构的专业服务相链接，结果更准确，且更容易获得专业人员的帮助并能快捷地纳入国家艾滋病防控系统。
                    这种自采样送检模式是否能与现行国内HIV检测咨询系统有机的结合，及国人的接受程度尚未可知。
                  </p>
                  <p>
                    一次性尿液采集器和滤纸片干血斑成本低廉，操作简便，生物危险性低，便于储存和运输，且有很好的生物稳定性。检测者可自行采集样本，邮寄到专业实验室检测，具有很好的保密性，
                    解决了自检者羞于面对医务工作者的心理，易于为检测者所接受。此外，应用滤纸片干血斑不仅可进行HIV-1抗体初筛与确认实验，而且通过HIV-1 DNA的检测可以发现窗口期感染者。
                    本研究的目的是为网络购买血液快速试剂自检阳性者免费提供一次性尿液采集器或滤纸片干血斑，从而有效转介自检阳性者。
                  </p>
                  <h3>研究过程:</h3>
                  <p>
                    为了实现以上研究目的，您需要在线上传血液自检阳性结果，填写调查问卷，并选择免费获得一次性尿液采集器或滤纸片干血斑，之后自采尿液或取末梢血制备干血斑，邮寄给我们。
                  </p>
                  <h3>安全:</h3>
                  <p>
                    本研究使用的尿液采集器或滤纸片干血斑，均为一次性产品，不会造成疾病的医源性传播，请您放心。
                  </p>
                  <h3>风险与不适:</h3>
                  <p>
                    对于您来说，尿液的自采毫无风险。在您取末梢血制备干血斑时，可能会有一些非常小的风险，包括短暂的疼痛，局部青紫，少数人会有轻度头晕，或极为罕见的针头感染。
                  </p>
                  <h3>受益:</h3>
                  <p>
                    通过对您的标本（血液或尿液）进行检测将有助于对您的感染情况做出准确的诊断，为您的治疗提供必要的建议，或为疾病的研究提供有益的信息。
                  </p>
                  <h3>隐私问题:</h3>
                  <p>
                    本研究采用匿名检测，进行HIV抗体检测的国家艾滋病参比室和查询结果的仁爱康联网站都只有采样条码和检测结果，并且严格保密，您的个人身份和检测结果信息不会泄露。此外，可以识别您身份的信息将不会透露给研究小组以外的成员，除非获得您的许可。这项研究结果发表时，将不会披露您个人的任何资料。
                  </p>
                  <h3>如果您因参与这项研究而受到伤害:</h3>
                  <p>
                    如发生与该项研究相关的伤害时，您可以获得免费治疗和相应的补偿。
                  </p>
                  <p>
                    您可以选择不参加本项研究，或者在任何时候通知研究者要求退出，您的数据将不纳入研究结果，您的任何医疗待遇与权益不会因此而受到影响。
                  </p>
                  <p>
                    您可随时了解与本研究有关的信息资料和研究进展，如果您有与本研究有关的问题，或您在研究过程中发生了任何不适与伤害，或有关于本项研究参加者权益方面的问题，您可以通过_______(电话号码)与我们取得联系。
                  </p>
                </div>
              </div>
              <div className="wizard-mark-el">
                <CheckboxGroup
                  onChange = { this.onSelect }>
                    <label><Checkbox value={"agree"}/>是否同意</label>
                </CheckboxGroup>
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
