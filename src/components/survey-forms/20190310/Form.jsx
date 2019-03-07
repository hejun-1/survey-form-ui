import React from 'react';
import './Form.css';
import {Question as SubjectiveQuestion} from "../../subjective-question";
import {Question as ChoiceQuestion} from "../../choice-question";

class Form extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      errors: new Array(16)
    };

    this.model = {
      questions: [],
      name: '中美疾控中心酒吧MSM项目'
    };
    this.props.updateStore({
      ...this.model
    });
  }

  validate() {
    return true;
  }

  render() {
    return (
      <div>
          <code>为更好的对检测结果进行判读和解释，需收集一些您的基本信息。这些信息不包含个人身份信息，同时也会被严格保密。希望您如实填写，已利于您个人情况的判断，谢谢！</code>
          <div className='question'><SubjectiveQuestion onChange={(q)=>{this.model.questions[0] = q}} label="A01: 联系方式(格式为电话/微信/QQ+号码，例如: QQ+1234567)"/></div>
          <div className='question'><SubjectiveQuestion onChange={(q)=>{this.model.questions[1] = q}} label="B01: 出生年 "/></div>
          <div className='question'><ChoiceQuestion onChange={(q)=>{this.model.questions[2] = q}} options={[{label: "男", value: "男"}, {label: "女", value: "女"}]} label="B02: 性别"></ChoiceQuestion></div>
          <div className='question'><ChoiceQuestion onChange={(q)=>{this.model.questions[3] = q}} options={[{label: "未婚", value: "未婚"}, {label: "已婚", value: "已婚"}, {label: "同性同居", value: "同性同居"}, {label: "异性同居", value: "异性同居"}, {label: "离异或丧偶", value: "离异或丧偶"}]} label="B03: 婚姻状况"></ChoiceQuestion></div>
          <div className='question'><SubjectiveQuestion onChange={(q)=>{this.model.questions[4] = q}} label="B04: 民族 "/></div>
          <div className="question"><ChoiceQuestion enableCustomValue={true} onChange={(q)=>{this.model.questions[5] = q}} options={[{label: "自由职业者", value: "自由职业者"}, {label: "学生", value: "学生"}, {label: "工人", value: "工人"}, {label: "白领", value: "白领"}, {label: "商人", value: "商人"}, {label: "机关、国企及事业单位人员", value: "机关、国企及事业单位人员"}]} label="B05: 职业"></ChoiceQuestion></div>
          <div className="question"><ChoiceQuestion onChange={(q)=>{this.model.questions[6] = q}} options={[{label: "小学及以下", value: "小学及以下"}, {label: "初中", value: "初中"}, {label: "高中或中专", value: "高中或中专"}, {label: "大专或本科", value: "大专或本科"}, {label: "研究生及以上", value: "研究生及以上"}]} label="B06: 文化程度"></ChoiceQuestion></div>
          <div className="question"><ChoiceQuestion onChange={(q)=>{this.model.questions[7] = q}} options={[{label: "小于2000", value: "小于2000"}, {label: "2000～3000", value: "2000～3000"}, {label: "3001～5000", value: "3001～5000"}, {label: "5001～10000", value: "5001～10000"}, {label: "10000以上", value: "10000以上"}]} label="B07: 个人收入(元/月)"></ChoiceQuestion></div>
          <div className="question"><ChoiceQuestion onChange={(q)=>{this.model.questions[8] = q}} options={[{label: "同性", value: "同性"}, {label: "异性", value: "异性"}, {label: "双性", value: "双性"}, {label: "不确定", value: "不确定"}]} label="C01: 性取向"></ChoiceQuestion></div>
          <div className="question"><ChoiceQuestion onChange={(q)=>{this.model.questions[9] = q}} options={[{label: "无", value: "无"}, {label: "有", value: "有"}]} label="C02: 是否得过性病"></ChoiceQuestion></div>
          <div className="question"><ChoiceQuestion onChange={(q)=>{this.model.questions[10] = q}} options={[{label: "是", value: "是"}, {label: "否(跳至E01)", value: "否"}]} label="D01: 最近六个月，您与同性发生过无保护性性行为吗？"></ChoiceQuestion></div>
          <div className='question'><SubjectiveQuestion onChange={(q)=>{this.model.questions[11] = q}} label="D02: 最近六个月，您与多少同性发生过无保护性性行为?"/></div>
          <div className="question"><ChoiceQuestion onChange={(q)=>{this.model.questions[12] = q}} options={[{label: "是", value: "是"}, {label: "否", value: "否"}]} label="D03: 最近六个月中，您最近一次与同性发生无保护性行为时使用安全套了吗?"></ChoiceQuestion></div>
          <div className="question"><ChoiceQuestion onChange={(q)=>{this.model.questions[13] = q}} options={[{label: "是", value: "是"}, {label: "否", value: "否"}]} label="E01: 最近六个月，您与异性发生过无保护性性行为吗？"></ChoiceQuestion></div>
          <div className='question'><SubjectiveQuestion onChange={(q)=>{this.model.questions[14] = q}} label="E02: 最近六个月，您与多少异性发生过无保护性性行为?"/></div>
          <div className="question"><ChoiceQuestion onChange={(q)=>{this.model.questions[15] = q}} options={[{label: "是", value: "是"}, {label: "否", value: "否"}]} label="E03: 最近六个月中，您最近一次与异性发生无保护性行为时使用安全套了吗?"></ChoiceQuestion></div>
          <div className="question"><ChoiceQuestion onChange={(q)=>{this.model.questions[16] = q}} options={[{label: "是", value: "是"}, {label: "否(跳至G01)", value: "否"}]} label="F01: 最近六个月，您发生过商业性行为吗？"></ChoiceQuestion></div>
          <div className="question"><ChoiceQuestion onChange={(q)=>{this.model.questions[17] = q}} options={[{label: "是", value: "是"}, {label: "否", value: "否"}]} label="F02: 最近六个月中，您最近一次商业性行为时使用安全套了吗？"></ChoiceQuestion></div>
          <div className="question"><ChoiceQuestion onChange={(q)=>{this.model.questions[18] = q}} options={[{label: "社区小组", value: "社区小组"}, {label: "疾控中心", value: "疾控中心"}, {label: "医院", value: "医院"}, {label: "网购自检", value: "网购自检"}]} enableCustomValue={true} label="G01: 最近一次检测是在哪里进行的?"></ChoiceQuestion></div>
          <div className="question"><ChoiceQuestion onChange={(q)=>{this.model.questions[11] = q}} options={[{label: "阴性", value: "阴性"}, {label: "阳性", value: "阳性"}, {label: "结果不确定", value: "结果不确定"},  {label: "不知道", value: "不知道"}]} label="G02: 最近一次检测的结果是?"></ChoiceQuestion></div>
      </div>
    );
  }
};

Form.PropTypes = {
  getStore: React.PropTypes.func,
  updateStore: React.PropTypes.func
};

export default Form;
