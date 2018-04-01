import React from 'react';

import StandardSurveyWizard from './StandardSurveyWizard.jsx';
import Survey20170110 from './20170110/SurveyWizard.jsx';
import Survey20180401 from './20180401/SurveyWizard.jsx';
import Survey20180402 from './20180402/SurveyWizard.jsx';
import Survey20180403 from './20180403/SurveyWizard.jsx';
import Survey20180404 from './20180404/SurveyWizard.jsx';

const Surveys = {
  '20170110': <Survey20170110/>,
  '20180401': <Survey20180401/>,
  '20180402': <Survey20180402/>,
  '20180403': <Survey20180403/>,
  '20180404': <Survey20180404/>
};

const Survey = (props) => Surveys[props.params.name] ? Surveys[props.params.name] : <StandardSurveyWizard/>;

export default Survey;
