import React from 'react';

import StandardSurveyWizard from './StandardSurveyWizard.jsx';

const Survey = (props) => {
  console.log(props.params.name);
  return <StandardSurveyWizard/> 
}

export default Survey;
