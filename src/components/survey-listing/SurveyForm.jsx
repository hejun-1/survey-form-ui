import React from 'react';

class SurveyForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.params.id);
    return (
      <div>
        Survey Form
      </div>
    );
  }
}

SurveyForm.PropTypes = {
  survey:  React.PropTypes.object.required
};

export default SurveyForm;