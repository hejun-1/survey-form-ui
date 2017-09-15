import React from 'react';
import endpoint from '../../backend';
import { Link } from 'react-router';
import $ from 'jquery';

class SurveyListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      surveys: []
    };
    this.getSurveyListing.bind(this);
    this.getSurveyListing().then((data)=>{
      this.setState({
        surveys: data.content
      });
    });
  }

  getSurveyListing() {
    return new Promise((resolve, reject) => {
      $.get(`${endpoint}/surveys/pending`, (data) => {
        resolve(data);
      });
    });
  }

  render() {
    return (
      <div>
        <div className="table-responsive">
          <table className="table table-hover">
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
                <tr key={survey.id}>
                  <td>{survey.mobile}</td>
                  <td>{survey.date}</td>
                  <td>{survey.status}</td>
                  <td><Link to={`/listing/details/${survey.id}`}>查看</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default SurveyListing;