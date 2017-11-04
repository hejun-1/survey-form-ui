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
        <div>
          <ul>
            <li>
              一般情况下检测机构收到样本后，一周左右出结果。
            </li>
            <li>
              请您务必确定本人能够承受检测的结果，如有任何问题要及时寻求帮助，您可以通过仁爱网官方客服（www.renaijiance.com客服通道或者客服QQ：3284883815）与我们联系。
            </li>
          </ul>
        </div>
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