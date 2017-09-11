import React from 'react';
import StepZilla from 'react-stepzilla';
import StepAgreement from './StepAgreement';
import StepSurvey from './StepSurvey';
import StepUploadPicture from './StepUploadPicture';
import StepShippingAddress from './StepShippingAddress';
import StepComplete from './StepComplete';
import './Wizard.css';

class Wizard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.surveyStore = {};
  }

  getStore() {
    return this.surveyStore;
  }

  updateStore(update) {
    this.surveyStore = {
      ...this.surveyStore,
      ...update,
    }
  }

  render() {
    const steps =
      [
        {name: '1', component: <StepAgreement getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
        {name: '2', component: <StepSurvey getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
        {name: '3', component: <StepUploadPicture getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
        {name: '4', component: <StepShippingAddress getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
        {name: '5', component: <StepComplete getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
      ]

    return (
      <div className='wizard'>
        <div className='step-progress'>
          <StepZilla
            steps={steps}
            nextButtonText={"下一步"}
            backButtonText={"上一步"}
            preventEnterSubmission={true}
            nextTextOnFinalActionStep={"提交"}
            hocValidationAppliedTo={[]}
            nextButtonCls={"btn btn-prev btn-success btn-lg pull-right"}
            backButtonCls={"btn btn-next btn-success btn-lg pull-left"}/>
        </div>
      </div>
    )
  }
};

export default Wizard

