import React from 'react';

import Wizard from '../Wizard';
import StepSurvey from './StepSurvey';
import StepUploadPicture from './StepUploadPicture';
import StepComplete from './StepComplete';
import StepClosed from '../StepClosed';

const steps = [
  StepClosed
];

const SurveyWizard = () => <Wizard steps={steps}/>;

export default SurveyWizard;
