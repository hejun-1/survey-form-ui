import React from 'react';

import Wizard from '../Wizard';
import StepSurvey from './StepSurvey';
import StepComplete from './StepComplete';

const steps = [
  StepSurvey, StepComplete
];

const SurveyWizard = () => <Wizard steps={steps}/>;

export default SurveyWizard;
