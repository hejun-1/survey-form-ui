import React from 'react';
import { Question as ChoiceQuestion } from '../../choice-question';
import { Question as SubjectiveQuestion } from '../../subjective-question';
import { Question as SelectionQuestion } from '../../selection-question';
import { Question as QuestionSet } from '../../question-set';
import './Form.css';

class Form extends React.PureComponent {
  constructor(props) {
    super(props);

    this.model = {
      questions: [],
      name: '中国疾控中心-中国性病艾滋病防治协会自检人群匿名有奖问卷调查项目'
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
        <div className="question"><ChoiceQuestion onChange={(q)=>{this.model.questions[2] = q}} options={[{label: "未婚", value: "未婚"}, {label: "已婚", value: "已婚"}, {label: "离婚或丧偶", value: "离婚或丧偶"}]} label="A03: 婚姻状况"></ChoiceQuestion></div>
        <div className="question"><ChoiceQuestion onChange={(q)=>{this.model.questions[3] = q}} options={[{label: "异性同居", value: "异性同居"}, {label: "同性同居", value: "同性同居"}, {label: "独居", value: "独居"}]} label="A04: 同居状况"></ChoiceQuestion></div>
        <div className="question"><SubjectiveQuestion onChange={(q)=>{this.model.questions[4] = q}} label="A05: 民族"/></div>
        <div className="question"><ChoiceQuestion onChange={(q)=>{this.model.questions[5] = q}} enableCustomValue={true} options={[{label: "自由职业者", value: "自由职业者"}, {label: "学生", value: "学生"}, {label: "工人", value: "工人"}, {label: "白领", value: "白领"}, {label: "商人", value: "商人"}, {label: "机关、国企及事业单位人员", value: "机关、国企及事业单位人员"}]} label="A06: 职业"></ChoiceQuestion></div>
        <div className="question"><ChoiceQuestion onChange={(q)=>{this.model.questions[6] = q}} options={[{label: "小学及以下", value: "小学及以下"}, {label: "初中", value: "初中"}, {label: "高中或中专", value: "高中或中专"}, {label: "大专或本科", value: "大专或本科"}, {label: "研究生及以上", value: "研究生及以上"}]} label="A07: 文化程度"></ChoiceQuestion></div>
        <div className="question"><ChoiceQuestion onChange={(q)=>{this.model.questions[7] = q}} options={[{label: "小于2000", value: "小于2000"}, {label: "2000～3000", value: "2000～3000"}, {label: "3001～5000", value: "3001～5000"}, {label: "5001～10000", value: "5001～10000"}, {label: "10000以上", value: "10000以上"}]} label="A08: 个人收入(元/月)"></ChoiceQuestion></div>

        <div className="question"><ChoiceQuestion onChange={(q)=>{this.model.questions[8] = q}} options={[{label: "同性", value: "同性"}, {label: "异性", value: "异性"}, {label: "双性", value: "双性"}, {label: "不确定", value: "不确定"}]} label="B01: 性取向"></ChoiceQuestion></div>
        <div className="question"><ChoiceQuestion onChange={(q)=>{this.model.questions[9] = q}} options={[{label: "无", value: "无"}, {label: "有", value: "有"}]} label="B02: 是否得过性病"></ChoiceQuestion></div>

        <div className="question"><ChoiceQuestion onChange={(q)=>{this.model.questions[10] = q}} options={[{label: "1个月", value: "1个月"}, {label: "3个月", value: "3个月"}, {label: "6个月", value: "6个月"}, {label: "1年", value: "1年"}]} label="C01: 高危行为后多长时间做一次艾滋病检测？"></ChoiceQuestion></div>
        <div className="question"><ChoiceQuestion onChange={(q)=>{this.model.questions[11] = q}} options={[{label: "社区小组", value: "社区小组"}, {label: "疾控中心", value: "疾控中心"}, {label: "医院", value: "医院"}, {label: "网购自检", value: "网购自检"}]} enableCustomValue={true} label="C02: 最近一次检测是在哪里进行的"></ChoiceQuestion></div>

        <div className="question"><SubjectiveQuestion onChange={(q)=>{this.model.questions[12] = q}} label="D01: 您购买的HIV自检试剂的品牌?"/></div>
        <div className="question"><SubjectiveQuestion onChange={(q)=>{this.model.questions[13] = q}} label="D02: 您购买HIV自检试剂的花费?"/></div>
        <div className="question"><ChoiceQuestion onChange={(q)=>{this.model.questions[14] = q}} options={[{label: "是", value: "是"}, {label: "否", value: "否"}]} label="D03: 自检之后，您是否有寻找后续的咨询及转介服务？（转介服务是指去疾控或者医院寻求确证及治疗服务）"></ChoiceQuestion></div>
        <div className="question">
          <QuestionSet onChange={(q)=>{this.model.questions[15] = q}} label="D04 影响您网购HIV试剂的主要因素是 （按重要程度排序， 1=最重要，2=重要，3=一般，4=不重要，5=最不重要）："
                       enableCustomValue={true}
                       options={[
                                  {label: "保密性"},
                                  {label: "价格及花费"},
                                  {label: "检测试剂的质量"},
                                  {label: "检测后的咨询及后续服务是否到位"}
                               ]}
          />
        </div>

        <div className="question"><ChoiceQuestion onChange={(q)=>{this.model.questions[16] = q}} options={[{label: "是", value: "是"}, {label: "否", value: "否"}]} label="E01: 最近六个月，您与同性发生过无保护性性行为吗？"></ChoiceQuestion></div>
        <div className="question"><ChoiceQuestion onChange={(q)=>{this.model.questions[17] = q}} options={[{label: "是", value: "是"}, {label: "否", value: "否"}]} label="E02: 最近六个月，您与异性发生过无保护性性行为吗？"></ChoiceQuestion></div>
        <div className="question"><ChoiceQuestion onChange={(q)=>{this.model.questions[18] = q}} options={[{label: "是", value: "是"}, {label: "否", value: "否"}]} label="E03: 您最近一次性行为时使用安全套了吗？"></ChoiceQuestion></div>
        <div className="question"><ChoiceQuestion onChange={(q)=>{this.model.questions[19] = q}} options={[{label: "未使用", value: "未使用"}, {label: "有时使用", value: "有时使用"}, {label: "每次都用", value: "每次都用"}]} label="E04: 最近六个月，您性行为时使用安全套的频率如何？"></ChoiceQuestion></div>

        <div className="question"><ChoiceQuestion onChange={(q)=>{this.model.questions[20] = q}} options={[{label: "愿意", value: "愿意"}, {label: "不愿意", value: "不愿意"}]} label="F01: “自采样送检”模式是：想要进行HIV检测的人，参照说明书自行采集样本（血液及尿液），邮寄至专业实验室检测，数日后凭借唯一样本编码，通过网络查询结果，并获得咨询及转介服务。您是否愿意接受自采样送检的检测方式？"></ChoiceQuestion></div>
        <div className="question"><ChoiceQuestion onChange={(q)=>{this.model.questions[21] = q}} options={[{label: "担心新方法的准确性", value: "担心新方法的准确性"}, {label: "标本的采集过程比较麻烦", value: "标本的采集过程比较麻烦"}]} label="如果不愿意，原因是" enableCustomValue={true}></ChoiceQuestion></div>

        <div className="question" style={{fontWeight: 'bold'}}>
          如果愿意接受，继续问卷
        </div>

        <div className="question">
          <QuestionSet onChange={(q)=>{this.model.questions[22] = q}} label="F02 关于自采样送检，您主要关心的因素有哪些？（按重要程度排序， 1=最重要，2=重要，3=一般，4=不重要，5=最不重要）"
                       enableCustomValue={true}
                       options={[
                                  {label: "检测结果的准确性"},
                                  {label: "结果等待时间"},
                                  {label: "价格及花费"},
                                  {label: "是否方便获得尿液筛查服务包或血样采集卡服务包"},
                                  {label: "检测后的咨询及后续服务是否到位"}
                               ]}
          />
        </div>
        <div className="question">
          <ChoiceQuestion onChange={(q)=>{this.model.questions[23] = q}} options={[{label: "采集尿液抗体检测", value: "采集尿液抗体检测"}, {label: "采集干血斑抗体检测", value: "采集干血斑抗体检测"}, {label: "采集干血斑核酸检测", value: "采集干血斑核酸检测"}]} label="F03 下面几种情况中，你更乐于接受哪种类型的标本采集？"></ChoiceQuestion>
        </div>
        <code>
          <ul>
            各种标本采集的优劣势：
            <li>
              采集尿液抗体检测：无创检测，方便采样，减少采样失误
            </li>
            <li>
              采集干血斑抗体检测：血液抗体含量高，检测结果稳定，需要采血
            </li>
            <li>
              采集干血斑核酸检测：窗口期10天左右，灵敏度高，费用较贵
            </li>
          </ul>
        </code>

        <div className="question"><SubjectiveQuestion onChange={(q)=>{this.model.questions[24] = q}} label="G01: 对于自采样送检模式，您还有哪些顾虑和疑问"/></div>
      </div>
    );
  }
};

Form.PropTypes = {
  getStore: React.PropTypes.func,
  updateStore: React.PropTypes.func
};

export default Form;