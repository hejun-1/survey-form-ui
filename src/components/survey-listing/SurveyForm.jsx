import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import './Surveys.css';

class SurveyForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="survey-container">
        <div className="survey-toolbar">
          <Link to="/listing"><button className="btn btn-default">返回</button></Link>
        </div>
        <div className="section">
          <div><label>填报者手机:</label><span>{this.props.survey.mobile}</span></div>
          <div><label>填报日期:</label><span>{this.props.survey.date}</span></div>
          <div><label>邮寄地址:</label><span>{this.props.survey.shippingAddress}</span></div>
        </div>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>问题</th>
                <th>回答</th>
              </tr>
            </thead>
            <tbody>
            {this.props.survey.questions.map((question, i) => (
              <tr key={`question-${i}` }>
                <td>{question.question}</td>
                <td>{question.value ? question.value : ''}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
        <div>
          <a href={this.props.survey.pictureUrl} target="_blank"><img className="img-responsive" src={this.props.survey.pictureUrl}/></a>
        </div>
      </div>
    );
  }
}

SurveyForm.PropTypes = {
  survey:  React.PropTypes.object.required
};

const mapStateToProps = ({ SurveyActionReducer }) => {
  return {
    survey: SurveyActionReducer.survey
  }
};

export default connect(mapStateToProps)(SurveyForm);