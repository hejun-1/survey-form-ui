import React from 'react';
import { Question as ChoiceQuestion } from '../../choice-question';
import { Question as SubjectiveQuestion } from '../../subjective-question';
import './Form.css';

class Form extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      errors: new Array(16)
    };

    this.model = {
      questions: [],
      name: `自采尿液送检HIV问卷调查-${this.props.school}`
    };
    this.props.updateStore({
      ...this.model
    });
  }

  validate() {
    let hasError = false;
    const errors = [];
    this.model.questions.forEach((q, i) => {
      if (!this.props.showGroupCQuestions && i > 11) return;
      if (!q || (!q.value && !q.values)) {
        errors[i] = 'validate-error';
        hasError = true;
      }
    });

    if (hasError) {
      this.setState({
        errors
      });
    }

    return !hasError;
  }

  render() {
    return (
      <div>
        <div className={`question ${this.state.errors[0]}`}><ChoiceQuestion onChange={(q)=>{this.model.questions[0] = q}} options={[{label: "男", value: "男"}, {label: "女", value: "女"}]} label="A02: 性别"></ChoiceQuestion></div>
        <div className={`question ${this.state.errors[1]}`}><ChoiceQuestion onChange={(q)=>{this.model.questions[1] = q}} options={[{label: "是", value: "是"}, {label: "否", value: "否"}]} label="B01: 您是否支持在新生体检时，开展相关的HIV检测?"></ChoiceQuestion></div>
        <div className={`question ${this.state.errors[2]}`}><ChoiceQuestion onChange={(q)=>{this.model.questions[2] = q}} options={[{label: "是", value: "是"}, {label: "否", value: "否"}]} label="B02: 您是否知晓自采尿液送检HIV？如是，请回答B03,如否，请直接回答B04"></ChoiceQuestion></div>
        <div className={`question ${this.state.errors[3]}`}><ChoiceQuestion onChange={(q)=>{this.model.questions[3] = q}} options={[{label: "电视或广播", value: "电视或广播"}, {label: "网络", value: "网络"}, {label: "报纸或杂志", value: "报纸或杂志"}, {label: "同学", value: "同学"}, {label: "老师", value: "老师"}, {label: "讲座", value: "讲座"}, {label: "海报", value: "海报"}]} enableCustomValue={true} label="B03: 您是通过什么途径了解到自采尿液送检HIV的？"></ChoiceQuestion></div>
        <div className={`question ${this.state.errors[4]}`}><ChoiceQuestion onChange={(q)=>{this.model.questions[4] = q}} options={[{label: "是", value: "是"}, {label: "否", value: "否"}]} label="B04: 您是否支持在贵校推广自采尿液送检HIV？"></ChoiceQuestion></div>
        <div className={`question ${this.state.errors[5]}`}><ChoiceQuestion onChange={(q)=>{this.model.questions[5] = q}} options={[{label: "担心检测结果不准确", value: "担心检测结果不准确"}, {label: "担心自己个人信息被泄露", value: "担心自己个人信息被泄露"}]} enableCustomValue={true} label="如果不支持，原因是？"></ChoiceQuestion></div>
        <div className={`question ${this.state.errors[6]}`}><ChoiceQuestion onChange={(q)=>{this.model.questions[6] = q}} options={[{label: "自助售货机出售(30元/盒)", value: "自助售货机出售(30元/盒)"}, {label: "学校相关机构免费发放", value: "学校相关机构免费发放"}]} label="B05: 以下哪种方式领取自采尿液送检HIV服务包易于接受？"></ChoiceQuestion></div>
        <div className={`question ${this.state.errors[7]}`}><ChoiceQuestion onChange={(q)=>{this.model.questions[7] = q}} options={[{label: "正常对待", value: "正常对待"}, {label: "不歧视，但保持距离", value: "不歧视，但保持距离"}, {label: "害怕紧张，希望隔离她/他", value: "害怕紧张，希望隔离她/他"}]} label="B06: 如果您的同学是HIV感染者，您会？"></ChoiceQuestion></div>
        <div className={`question ${this.state.errors[8]}`}><ChoiceQuestion onChange={(q)=>{this.model.questions[8] = q}} options={[{label: "超市", value: "超市"}, {label: "校医院", value: "校医院"}, {label: "宿舍楼", value: "宿舍楼"}, {label: "食堂", value: "食堂"}, {label: "学生活动中心", value: "学生活动中心"}, {label: "图书馆", value: "图书馆"}]} enableCustomValue={true} label="B07: 您更乐于接受的尿液自助售卖机摆放位置? "></ChoiceQuestion></div>
        <div className={`question ${this.state.errors[9]}`}><ChoiceQuestion onChange={(q)=>{this.model.questions[9] = q}} options={[{label: "是", value: "是"}, {label: "否", value: "否"}]} label="B08: 您是否接受自采尿液送检HIV服务包、尿液回收样本与其他食物饮料放在一个自助售货机里？"></ChoiceQuestion></div>
        <div className={`question ${this.state.errors[10]}`}><ChoiceQuestion onChange={(q)=>{this.model.questions[10] = q}} options={[{label: "医院", value: "医院"}, {label: "当地疾控中心", value: "当地疾控中心"}, {label: "学校红会", value: "学校红会"}]} label="B09: 如果通过自采尿液送检HIV，发现您的结果是阳性，希望去以下哪家机构咨询？"></ChoiceQuestion></div>
        <div className={`question ${this.state.errors[11]}`}><SubjectiveQuestion onChange={(q)=>{this.model.questions[11] = q}} label="B10: 对于自采尿液送检HIV，您还有哪些顾虑和疑问？"/></div>
        {this.props.showGroupCQuestions && <div>
          <p>已开展尿液传递检测的高校</p>
          <div className={`question ${this.state.errors[12]}`}><ChoiceQuestion onChange={(q)=>{this.model.questions[12] = q}} options={[{label: "是", value: "是"}, {label: "否", value: "否"}]} label="C01: 您是否知晓贵校有自助售货机出售自采尿液送检HIV服务包（30元/盒）？"></ChoiceQuestion></div>
          <div className={`question ${this.state.errors[13]}`}><ChoiceQuestion onChange={(q)=>{this.model.questions[13] = q}} options={[{label: "是", value: "是"}, {label: "否", value: "否"}]} label="C02: 您是否在贵校自助售货机购买过自采尿液送检HIV服务包?"></ChoiceQuestion></div>
          <div className={`question ${this.state.errors[14]}`}><ChoiceQuestion onChange={(q)=>{this.model.questions[14] = q}} options={[{label: "是", value: "是"}, {label: "否", value: "否"}]} label="C03: 您是否知晓贵校有相关机构免费发放自采尿液送检HIV服务包?"></ChoiceQuestion></div>
          <div className={`question ${this.state.errors[15]}`}><ChoiceQuestion onChange={(q)=>{this.model.questions[15] = q}} options={[{label: "是", value: "是"}, {label: "否", value: "否"}]} label="C04: 您是否免费领取过自采尿液送检HIV服务包?"></ChoiceQuestion></div>
        </div>}
      </div>
    );
  }
};

Form.PropTypes = {
  getStore: React.PropTypes.func,
  updateStore: React.PropTypes.func,
  school: React.PropTypes.string,
  showGroupCQuestions: React.PropTypes.boolean
};

export default Form;