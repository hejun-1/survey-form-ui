import React from 'react';

class ReportViewer extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const items = [
      {
        label: "HIV-DNA定性检测",
        idx: "method_6",
        base: "阴性"
      },
      {
        label: "尿HIV抗体检测",
        idx: "method_2",
        base: "阴性"
      }];
    return (
      <div className="report-content ">
        <div>
          <div className="report-section">
            <div className="report-statement-item"><span className="report-label">样本代码:</span><span>{this.props.model.ExaminationNumber}</span></div>
            <div className="report-statement-item"><span className="report-label">样本类型:</span><span>{this.props.model.SpecimenType}</span></div>
            <div className="report-statement-item"><span className="report-label">检测方法:</span><span>{this.props.model.ExaminationMethod}</span></div>
            <div className="report-statement-item"><span className="report-label">送检方式:</span><span>{this.props.model.ReceiveMethod}</span></div>
            <div className="report-statement-item"><span className="report-label">检测机构:</span><span>{this.props.model.LibraryName}</span></div>
          </div>
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
              <tr>
                <th>检测项目</th>
                <th>结果</th>
                <th>参考值</th>
              </tr>
              </thead>
              <tbody>
                {
                  items.map((item) => {
                    const result = this.props.model[item.idx + '_result'];
                    if (result) {
                      const className = result === '阴性' ? 'result-green' : 'result-red';
                      return (
                        <tr key={item.idx}>
                          <td>{item.label}</td>
                          <td><span className={className}>{result}</span></td>
                          <td>{item.base}</td>
                        </tr>
                      )
                    }
                  })
                }
              </tbody>
            </table>
          </div>
          <div className="report-section">
            <div className="report-statement-item"><span className="report-label">检测人:</span><span>{this.props.model.Tester}</span></div>
            <div className="report-statement-item"><span className="report-label">审核人:</span><span>{this.props.model.Reviewer}</span></div>
            <div className="report-statement-item"><span className="report-label">收样日期:</span><span>{this.props.model.ReceiveYear}年{this.props.model.ReceiveMonth}月{this.props.model.ReceiveDay || '  '}日</span></div>
            <div className="report-statement-item"><span className="report-label">报告日期:</span><span>{this.props.model.TestYear}年{this.props.model.TestMonth}月{this.props.model.TestDate || '  '}日</span></div>
            <div className="report-statement-item">
              <span className="report-label">备注:</span><span>{this.props.model.Comment}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ReportViewer.propTypes = {
  model: React.PropTypes.object.isRequired
}

export default ReportViewer;