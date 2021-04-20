import React from 'react';
import endpoint from '../../backend';
import $ from 'jquery';
import ReportViewer from './ReportViewer';
import './Report.css';
import LANG from './langLW';

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
        const reportData = JSON.parse(unescape(data.data).replace(/\n/g, ''));
        this.setState({
          reportData,
          error: null
        });
      },
      error: () => {
        this.setState({
          reportData: null,
          error: LANG["SAMPLE_CODE_ERROR_OR_UNPUBLISHED_REPORT"]
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
              {LANG["SAMPLE_DELIVERED_WAIT_5_DAYS"]}
            </li>
            <li>
              {LANG["WARNING_FOR_RESULT"]}
              {LANG["CONTACT_INFO"]}
              <div>{LANG["CONSULT_INSTRUCTION_1"]}</div>
              <div>{LANG["CONSULT_INSTRUCTION_2"]}</div>
              <div>{LANG["CONSULT_INSTRUCTION_3"]}</div>
            </li>
          </ul>
        </div>
        <div className="input-group">
          <input type="text" ref="number" placeholder={LANG["ENTER_SAMPLE_CODE"]} className="form-control"/>
            <span className="input-group-addon"
                  onClick={this.onClick}
                  style={{cursor: "pointer"}}>{LANG["SEARCH"]}</span>
        </div>
        {this.state.reportData && <ReportViewer model={this.state.reportData}/>}

      </div>
    );
  }
}

export default ReportSearch;
