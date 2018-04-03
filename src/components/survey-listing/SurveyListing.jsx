import React from 'react';
import endpoint from '../../backend';
import { Link } from 'react-router';
import $ from 'jquery';
import { browserHistory } from 'react-router';
import { SelectActionCreator } from './actions';
import { connect } from 'react-redux';
import './Surveys.css';

const ENTER_KEY_CODE = 13;

const filters = {
  status: 'pending',
  tags: null,
  name: '',
  page: 0
};

class SurveyListing extends React.PureComponent {
  constructor(props) {
    super(props);
    if (!this.props.session) {
      browserHistory.push('/login');
    } else {
      this.state = {
        surveys: []
      };
      this.filters = filters;
      this.selections = {};
      this.getSurveyListing = this.getSurveyListing.bind(this);
      this.onFilterStatusChange = this.onFilterStatusChange.bind(this);
      this.nextPage = this.nextPage.bind(this);
      this.prePage = this.prePage.bind(this);
      this.lastPage = this.lastPage.bind(this);
      this.firstPage = this.firstPage.bind(this);
      this.jumpTo = this.jumpTo.bind(this);
      this.onKeyDown = this.onKeyDown.bind(this);
      this.onStateChange = this.onStateChange.bind(this);
      this.proceedAll = this.proceedAll.bind(this);
      this.exportToExcel = this.exportToExcel.bind(this);
      this.toggleStatus = this.toggleStatus.bind(this);
      this.getSelectionsParams = this.getSelectionsParams.bind(this);
      this.onFilterSurveyNameChange = this.onFilterSurveyNameChange.bind(this);
      this.getSurveyListing();
    }
  }

  proceedAll(state) {
    $('.survey-checkbox').each((i, el)=>{
      state ? $(el).attr('checked', 'checked') : $(el).removeAttr('checked');
    })
    this.state.surveys.forEach((s) => this.onStateChange(s, state));
  }

  getSelectionsParams() {
    return Object.getOwnPropertyNames(this.selections).toString();
  }

  exportToExcel() {
    window.open(`${endpoint}/surveys/excel?ids=${this.getSelectionsParams()}`);
  }

  toggleStatus() {
    const status = this.filters.status === 'pending' ? 'handled' : 'pending';
    $.ajax({
      type: 'POST',
      url: `${endpoint}/surveys/${status}?ids=${this.getSelectionsParams()}`,
      success: () => this.getSurveyListing()
    });
  }

  onStateChange(survey, state) {
    if (state) {
      this.selections[survey.id] = state;
    } else {
      delete this.selections[survey.id];
    }
  }

  nextPage() {
    if (this.filters.page < this.totalPages) {
      this.filters.page++;
      this.getSurveyListing();
    }
  }

  prePage() {
    if (this.filters.page > 0) {
      this.filters.page--;
      this.getSurveyListing();
    }
  }

  lastPage() {
    this.filters.page = this.totalPages - 1;
    this.getSurveyListing();
  }

  firstPage() {
    this.filters.page = 0;
    this.getSurveyListing();
  }

  jumpTo(page) {
    this.filters.page = page;
    this.getSurveyListing();
  }

  onFilterStatusChange(event) {
    const status = event.target.value;
    this.filters.status = status;
    this.getSurveyListing();
  }

  onFilterSurveyNameChange(event) {
    //this.filters.tags = event.target.value === '' ? null : event.target.value;
    this.filters.name = event.target.value;
    this.getSurveyListing();
  }

  onKeyDown(event) {
    if (event.keyCode === ENTER_KEY_CODE
      && !isNaN(event.target.value)) {
      this.jumpTo(Number(event.target.value) - 1);
    }
  }

  getSurveyListing() {
    return new Promise((resolve) => {
      const tags = this.filters.tags ? `&tags=${this.filters.tags}` : '';
      const surveyName = this.filters.name;
      $.get(`${endpoint}/surveys/${this.filters.status}?page=${this.filters.page}&name=${surveyName}${tags}`, (data) => {
        resolve(data);
      });
    }).then((data)=>{
      this.totalPages = Number(data.totalPages);
      this.setState({
        surveys: data.content
      });
    });
  }

  render() {
    if (!this.state) return null;
    return (
      <div className="survey-container">
        <div className="survey-section">
          <label>调查问卷名称</label>
          <select onChange={ this.onFilterSurveyNameChange }>
            <option selected={this.filters.name == ""} value="">全部</option>
            <option selected={this.filters.name == "HIV血液快速自检阳性者服务项目调查问卷"} value="HIV血液快速自检阳性者服务项目调查问卷">HIV血液快速自检阳性者服务项目调查问卷</option>
            <option selected={this.filters.name == "中国疾控中心-中国性病艾滋病防治协会自检人群匿名有奖问卷调查项目"} value="中国疾控中心-中国性病艾滋病防治协会自检人群匿名有奖问卷调查项目">中国疾控中心-中国性病艾滋病防治协会自检人群匿名有奖问卷调查项目</option>
            <option selected={this.filters.name == "自采尿液送检HIV问卷调查-昆明医科大学"} value="自采尿液送检HIV问卷调查-昆明医科大学">自采尿液送检HIV问卷调查-昆明医科大学</option>
            <option selected={this.filters.name == "自采尿液送检HIV问卷调查-昆明学院"} value="自采尿液送检HIV问卷调查-昆明学院">自采尿液送检HIV问卷调查-昆明学院</option>
            <option selected={this.filters.name == "自采尿液送检HIV问卷调查-北京航空航天大学"} value="自采尿液送检HIV问卷调查-北京航空航天大学">自采尿液送检HIV问卷调查-北京航空航天大学</option>
            <option selected={this.filters.name == "自采尿液送检HIV问卷调查-北京信息科技大学"} value="自采尿液送检HIV问卷调查-北京信息科技大学">自采尿液送检HIV问卷调查-北京信息科技大学</option>
          </select>
        </div>
        <div className="survey-section">
          <label>状态</label>
          <select ref="statusFilter" onChange={ this.onFilterStatusChange }>
            <option selected={this.filters.status == "pending"} value="pending">待处理</option>
            <option selected={this.filters.status == "handled"} value="handled">已处理</option>
          </select>
        </div>
        <div className="survey-section">
          <button className="btn btn-default" onClick={this.exportToExcel}>导出</button>
          <button className="btn btn-default" onClick={this.toggleStatus}>更新状态</button>
        </div>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th><input type="checkbox" onChange={(e)=>this.proceedAll($(e.target).is(':checked'))}/></th>
                <th>问卷名称</th>
                <th>序号</th>
                <th>手机</th>
                <th>邮箱</th>
                <th>日期</th>
                <th>状态</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              {this.state.surveys && this.state.surveys.map((survey) => (
                <tr key={survey.id} onClick={ () => this.props.onSurveySelected(survey) }>
                  <td><input className="survey-checkbox" checked={this.state.allState} onChange={(e)=>this.onStateChange(survey, $(e.target).is(':checked'))} type="checkbox"/></td>
                  <td>{survey.name}</td>
                  <td>{survey.seqNo}</td>
                  <td>{survey.mobile}</td>
                  <td>{survey.email}</td>
                  <td>{survey.date}</td>
                  <td>{survey.status}</td>
                  <td><Link to={`/listing/details/${survey.id}`}>查看</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <ul className="pagination pagination-sm">
            <li><a onClick={this.firstPage} href="javascript:void(0)"><span className="glyphicon glyphicon-backward"></span></a></li>
            <li><a onClick={this.prePage} href="javascript:void(0)"><span className="glyphicon glyphicon-chevron-left"></span></a></li>
            <li>跳转到<input onKeyDown={this.onKeyDown} className="form-control pagination-page-index"/>页</li>
            <li><a onClick={this.nextPage} href="javascript:void(0)"><span className="glyphicon glyphicon-chevron-right"></span></a></li>
            <li><a onClick={this.lastPage} href="javascript:void(0)"><span className="glyphicon glyphicon-forward"></span></a></li>
            {this.filters.page+1}/{this.totalPages}
          </ul>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onSurveySelected: (survey) => dispatch(SelectActionCreator(survey))
});

const mapStateToProps = ({CredentialReducer}) => ({
  session: CredentialReducer.session
});

export default connect(mapStateToProps, mapDispatchToProps)(SurveyListing);