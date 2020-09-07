import React from 'react';
// import LANG from './langEN';

class ReportViewer extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const items = [
      {
        label: LANG["HIV_DNA_QUALITATIVE_TEST"],
        idx: "method_6",
        base: LANG["NEGATIVE"]
      },
      {
        label: LANG["URINE_HIV_ANTIBODY_TEST"],
        idx: "method_2",
        base: LANG["NEGATIVE"]
      },
      {
        label: LANG["HIV_ANTIBODY_TEST"],
        idx: "method_3",
        base: LANG["NEGATIVE"]
      }
    ];
    return (
      <div className="report-content ">
        <div>
          <div className="report-section">
            <div className="report-statement-item"><span className="report-label">{LANG["SAMPLE_CODE"]}</span><span>{this.props.model.ExaminationNumber}</span></div>
            <div className="report-statement-item"><span className="report-label">{LANG["SAMPLE_TYPE"]}</span><span>{this.props.model.SpecimenType}</span></div>
            <div className="report-statement-item"><span className="report-label">{LANG["TEST_METHOD"]}</span><span>{this.props.model.ExaminationMethod}</span></div>
            <div className="report-statement-item"><span className="report-label">{LANG["TEST_DELIVERY_METHOD"]}</span><span>{this.props.model.ReceiveMethod}</span></div>
            <div className="report-statement-item"><span className="report-label">{LANG["TEST_INSTITUTION"]}</span><span>{this.props.model.LibraryName}</span></div>
          </div>
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
              <tr>
                <th>{LANG["TEST_ITEM"]}</th>
                <th>{LANG["RESULT"]}</th>
                <th>{LANG["REFERENCE_VALUE"]}</th>
              </tr>
              </thead>
              <tbody>
                {
                  items.map((item) => {
                    const result = this.props.model[item.idx + '_result'];
                    if (result) {
                      const className = result === LANG["NEGATIVE"] ? 'result-green' : 'result-red';
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
            <div className="report-statement-item"><span className="report-label">{LANG["TEST_PEOPLE"]}</span><span>{this.props.model.Tester}</span></div>
            <div className="report-statement-item"><span className="report-label">{LANG["SAMPLE_RECEIVE_DATE"]}</span><span>{this.props.model.ReceiveYear}{LANG["YEAR"]}{this.props.model.ReceiveMonth}{LANG["MONTH"]}{this.props.model.ReceiveDay || '  '}{LANG["DAY"]}</span></div>
            <div className="report-statement-item"><span className="report-label">{LANG["REPORT_DATE"]}</span><span>{this.props.model.TestYear}{LANG["YEAR"]}{this.props.model.TestMonth}{LANG["MONTH"]}{this.props.model.TestDate || '  '}{LANG["DAY"]}</span></div>
            <div className="report-statement-item">
              <span className="report-label">{LANG["NOTE"]}</span><span>{this.props.model.Comment}</span>
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
