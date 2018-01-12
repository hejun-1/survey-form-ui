import React from 'react';
import endpoint from '../../backend';
import { Link } from 'react-router';
import $ from 'jquery';
import { browserHistory } from 'react-router';
import { SelectActionCreator } from './actions';
import { connect } from 'react-redux';
import './Surveys.css';

const ENTER_KEY_CODE = 13;

class SurveyListing extends React.Component {
  constructor(props) {
    super(props);
    if (!this.props.session) {
      browserHistory.push('/login');
    } else {
      this.state = {
        surveys: []
      };
      this.filters = {
        status: 'pending',
        tags: null,
        name: ''
      };
      this.page = 0;
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
    if (this.page < this.totalPages) {
      this.page++;
      this.getSurveyListing();
    }
  }

  prePage() {
    if (this.page > 0) {
      this.page--;
      this.getSurveyListing();
    }
  }

  lastPage() {
    this.page = this.totalPages - 1;
    this.getSurveyListing();
  }

  firstPage() {
    this.page = 0;
    this.getSurveyListing();
  }

  jumpTo(page) {
    this.page = page;
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
      $.get(`${endpoint}/surveys/${this.filters.status}?page=${this.page}&name=${surveyName}${tags}`, (data) => {
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
            <option value="">全部</option>
            <option value="HIV血液快速自检阳性者服务项目调查问卷">HIV血液快速自检阳性者服务项目调查问卷</option>
            <option value="网购自我检测调查问卷">网购自我检测调查问卷</option>
          </select>
        </div>
        <div className="survey-section">
          <label>状态</label>
          <select ref="statusFilter" onChange={ this.onFilterStatusChange }>
            <option value="pending">待处理</option>
            <option value="handled">已处理</option>
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
            {this.page+1}/{this.totalPages}
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