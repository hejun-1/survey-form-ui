import React from 'react';
import endpoint from '../../backend';
import $ from 'jquery';
import ReportViewer from './ReportViewer';
import './Report.css';

class ReportSearch extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      reportData: null,
      error: null
    }
  }

  onClick() {
    $.ajax({
      type: 'GET',
      url: `${endpoint}/reports/${this.refs.number.value}`,
      dataType: 'json',
      success: (data) => {
        const reportData = JSON.parse(unescape(data.data));
        reportData.Comment = unescape(data.comment);
        this.setState({
          reportData,
          error: null
        });
      },
      error: () => {
        this.setState({
          reportData: null,
          error: '样本编号不正确或者报告还未发布'
        });
      }
    });
  }

  render() {
    return (
      <div className="report-search-box">
        {this.state.error && <div className="report-search-error">{ this.state.error }</div>}
        <div className="input-group">
          <input type="text" ref="number" placeholder="输入样本编号" className="form-control"/>
            <span className="input-group-addon"
                  onClick={this.onClick}
                  style={{cursor: "pointer"}}>搜索</span>
        </div>
        {this.state.reportData && <ReportViewer model={this.state.reportData}/>}

      </div>
    );
  }
}

export default ReportSearch;