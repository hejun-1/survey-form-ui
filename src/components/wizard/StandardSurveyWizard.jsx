import React from 'react';

import Wizard from './Wizard';
import StepAgreement from './StepAgreement';
import StepSurvey from './StepSurvey';
import StepUploadPicture from './StepUploadPicture';
import StepShippingAddress from './StepShippingAddress';
import StepComplete from './StepComplete';

const steps = [
  StepAgreement, StepSurvey, StepShippingAddress, StepComplete
];

const SurveyWizard = () => <Wizard steps={steps}/>;

export default SurveyWizard;
