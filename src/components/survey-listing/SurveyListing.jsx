import React from 'react';
import endpoint from '../../backend';
import { Link } from 'react-router';
import $ from 'jquery';
import { SelectActionCreator } from './actions';
import { connect } from 'react-redux';
import './Surveys.css';

const ENTER_KEY_CODE = 13;

class SurveyListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      surveys: []
    };
    this.filters = {
      status: 'pending'
    };
    this.page = 0;
    this.getSurveyListing = this.getSurveyListing.bind(this);
    this.onFilterStatusChange = this.onFilterStatusChange.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.prePage = this.prePage.bind(this);
    this.lastPage = this.lastPage.bind(this);
    this.firstPage = this.firstPage.bind(this);
    this.jumpTo = this.jumpTo.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.getSurveyListing();
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

  onKeyDown(event) {
    if (event.keyCode === ENTER_KEY_CODE
      && !isNaN(event.target.value)) {
      this.jumpTo(Number(event.target.value) - 1);
    }
  }

  getSurveyListing() {
    return new Promise((resolve) => {
      $.get(`${endpoint}/surveys/${this.filters.status}?page=${this.page}`, (data) => {
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
    return (
      <div className="survey-container">
        <div className="survey-section">
          <label>状态</label>
          <select ref="statusFilter" onChange={ this.onFilterStatusChange }>
            <option value="pending">待处理</option>
            <option value="handled">已处理</option>
          </select>
        </div>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>手机</th>
                <th>日期</th>
                <th>状态</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              {this.state.surveys.map((survey) => (
                <tr key={survey.id} onClick={ () => this.props.onSurveySelected(survey) }>
                  <td>{survey.mobile}</td>
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

export default connect(null, mapDispatchToProps)(SurveyListing);