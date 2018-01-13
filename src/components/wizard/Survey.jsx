import React from 'react';

import StandardSurveyWizard from './StandardSurveyWizard.jsx';
import Survey20170110 from './20170110/SurveyWizard.jsx';

const Survey = (props) => props.params.name === '20170110' ? <Survey20170110/> : <StandardSurveyWizard/>;

export default Survey;
