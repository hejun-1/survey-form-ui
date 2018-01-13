import React from 'react';

import Wizard from '../Wizard';
import StepSurvey from './StepSurvey';
import StepUploadPicture from '../StepUploadPicture';
import StepComplete from '../StepComplete';

const steps = [
  StepSurvey, StepUploadPicture, StepComplete
];

const SurveyWizard = () => <Wizard steps={steps}/>;

export default SurveyWizard;
