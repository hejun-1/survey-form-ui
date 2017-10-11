import React from 'react';
import { Question as ChoiceQuestion } from '../../choice-question';
import { Question as SubjectiveQuestion } from '../../subjective-question';
import { Question as SelectionQuestion } from '../../selection-question';
import './Form.css';

class Form extends React.PureComponent {
  constructor(props) {
    super(props);
    this.options = [
      {label: 'Option A', value: 'A'},
      {label: 'Option B', value: 'B'}
    ];

    this.model = {
      questions: []
    };
    this.props.updateStore({
      ...this.model
    });
  }

  render() {
    return (
      <div>
        <div className="question"><SubjectiveQuestion onChange={(q)=>{this.model.questions[0] = q}} label="A01: 出生年份"/></div>
        <div className="question"><ChoiceQuestion onChange={(q)=>{this.model.questions[1] = q}} options={[{label: "男", value: "男"}, {label: "女", value: "女"}]} label="A02: 性别"></ChoiceQuestion></div>
        <div className="question"><ChoiceQuestion onChange={(q)=>{this.model.questions[2] = q}} enableCustomValue={true} options={[{label: "未婚", value: "未婚"}, {label: "已婚", value: "已婚"}, {label: "同居", value: "同居"}, {label: "离婚或丧偶", value: "离婚或丧偶"}]} label="A03: 婚姻状况"></ChoiceQuestion></div>
        <div className="question"><SubjectiveQuestion onChange={(q)=>{this.model.questions[3] = q}} label="A04: 民族"/></div>
        <div className="question"><ChoiceQuestion onChange={(q)=>{this.model.questions[4] = q}} options={[{label: "无业", value: "无业"}, {label: "学生", value: "学生"}, {label: "工人", value: "工人"}, {label: "企业白领", value: "企业白领"}, {label: "商人", value: "商人"}, {label: "公务员(机关及事业单位)", value: "公务员(机关及事业单位)"}]} label="A05: 职业"></ChoiceQuestion></div>
        <div className="question"><ChoiceQuestion onChange={(q)=>{this.model.questions[5] = q}} options={[{label: "小学及以下", value: "小学及以下"}, {label: "初中", value: "初中"}, {label: "高中或中专", value: "高中或中专"}, {label: "大专或本科", value: "大专或本科"}, {label: "研究生", value: "研究生"}]} label="A06: 文化程度"></ChoiceQuestion></div>
        <div className="question"><ChoiceQuestion onChange={(q)=>{this.model.questions[6] = q}} options={[{label: "小于2000", value: "小于2000"}, {label: "2000～3000", value: "2000～3000"}, {label: "3001～5000", value: "3001～5000"}, {label: "5001～10000", value: "5001～10000"}, {label: "10000以上", value: "10000以上"}]} label="A07: 个人收入(元/月)"></ChoiceQuestion></div>

        <div className="question"><ChoiceQuestion onChange={(q)=>{this.model.questions[7] = q}} options={[{label: "同性", value: "同性"}, {label: "异性", value: "异性"}, {label: "双性", value: "双性"}, {label: "不确定", value: "不确定"}]} label="B01: 性取向"></ChoiceQuestion></div>
        <div className="question"><ChoiceQuestion onChange={(q)=>{this.model.questions[8] = q}} options={[{label: "无", value: "无"}, {label: "有", value: "有"}]} label="B02: 是否得过性病"></ChoiceQuestion></div>

        <div className="question"><ChoiceQuestion onChange={(q)=>{this.model.questions[9] = q}} options={[{label: "是", value: "是"}, {label: "否", value: "否"}]} label="C01: 您以前是否做过艾滋病检测"></ChoiceQuestion></div>
        <div className="question"><ChoiceQuestion onChange={(q)=>{this.model.questions[10] = q}} options={[{label: "社区小组", value: "社区小组"}, {label: "疾控中心", value: "疾控中心"}, {label: "医院", value: "医院"}, {label: "网购自检", value: "网购自检"}, {label: "其他", value: "其他"}]} multiple={true} label="C02: 在哪里进行的艾滋病检测？(可多选)"></ChoiceQuestion></div>
        <div className="question"><ChoiceQuestion onChange={(q)=>{this.model.questions[11] = q}} options={[{label: "觉得自己没有可能感染", value: "觉得自己没有可能感染"}, {label: "不知道哪里能够做检测", value: "不知道哪里能够做检测"}, {label: "担心检测时隐私被暴露", value: "担心检测时隐私被暴露"}, {label: "担心一旦查出阳性遭受歧视", value: "担心一旦查出阳性遭受歧视"}]} enableCustomValue={true} label="C03: 如果否，您没有进行过HIV检测的原因是（请选择最主要的一个原因）？"></ChoiceQuestion></div>

        <div className="question"><ChoiceQuestion onChange={(q)=>{this.model.questions[12] = q}} options={[{label: "是", value: "是"}, {label: "否", value: "否"}]} label="D01: 最近六个月，您与同性发生过无保护性性行为吗？"></ChoiceQuestion></div>
        <div className="question"><ChoiceQuestion onChange={(q)=>{this.model.questions[13] = q}} options={[{label: "是", value: "是"}, {label: "否", value: "否"}]} label="D02: 最近六个月，您与异性发生过无保护性性行为吗？"></ChoiceQuestion></div>
        <div className="question"><ChoiceQuestion onChange={(q)=>{this.model.questions[14] = q}} options={[{label: "是", value: "是"}, {label: "否", value: "否"}]} label="D03: 您最近一次性行为时使用安全套了吗？"></ChoiceQuestion></div>
        <div className="question"><ChoiceQuestion onChange={(q)=>{this.model.questions[15] = q}} options={[{label: "未使用", value: "未使用"}, {label: "有时使用", value: "有时使用"}, {label: "每次都用", value: "每次都用"}]} label="D04: 最近六个月，您性行为时使用安全套的频率如何？"></ChoiceQuestion></div>

        <div className="question"><ChoiceQuestion onChange={(q)=>{this.model.questions[16] = q}} options={[{label: "愿意", value: "愿意"}, {label: "不愿意", value: "不愿意"}]} label="E01: 您是否愿意接受自采样送检的检测方式？"></ChoiceQuestion></div>
        <div className="question"><ChoiceQuestion onChange={(q)=>{this.model.questions[17] = q}} options={[{label: "担心新方法的准确性", value: "担心新方法的准确性"}, {label: "标本的采集过程比较麻烦", value: "标本的采集过程比较麻烦"}]} enableCustomValue={true} label="如果不愿意，原因是？"></ChoiceQuestion></div>
        <div className="section-title">
          如果愿意接受，继续问卷
        </div>

        <div className="question"><ChoiceQuestion onChange={(q)=>{this.model.questions[18] = q}} options={[{label: "只采集尿液", value: "只采集尿液"}, {label: "只采集干血斑", value: "只采集干血斑"}, {label: "同时采集尿液和干血斑", value: "同时采集尿液和干血斑"}]} label="E03: 下面几种情况中，你更乐于接受哪种类型的标本采集？"></ChoiceQuestion></div>
        <div className="question"><ChoiceQuestion onChange={(q)=>{this.model.questions[19] = q}} options={[{label: "自行采集样本，邮寄给专业机构", value: "自行采集样本，邮寄给专业机构"}, {label: "自行采集样本，亲自送到专业机构", value: "自行采集样本，亲自送到专业机构"}, {label: "在专业医务人员辅助下进行标本采集，邮寄到专业机构", value: "在专业医务人员辅助下进行标本采集，邮寄到专业机构"}]} label="E04: 关于标本采集的方式，您更倾向于以下哪一种？"></ChoiceQuestion></div>
        <div className="question"><ChoiceQuestion onChange={(q)=>{this.model.questions[20] = q}} options={[{label: "亲自到送检机构询问结果", value: "亲自到送检机构询问结果"}, {label: "拨打咨询电话，语音告知结果", value: "拨打咨询电话，语音告知结果"}, {label: "拨打咨询电话，人工告知结果", value: "拨打咨询电话，人工告知结果"}, {label: "登录指定网站，自行查看结果", value: "登录指定网站，自行查看结果"}, {label: "留下联系方式，由检测机构主动告知", value: "留下联系方式，由检测机构主动告知"}]} label="E05: 对于结果的获知，您最倾向于哪种方式？"></ChoiceQuestion></div>

        <div className="question"><SubjectiveQuestion onChange={(q)=>{this.model.questions[21] = q}} label="F01: 对于自采样送检模式，您还有哪些顾虑和疑问？"></SubjectiveQuestion></div>
      </div>
    );
  }
};

Form.PropTypes = {
  getStore: React.PropTypes.func,
  updateStore: React.PropTypes.func
};

export default Form;