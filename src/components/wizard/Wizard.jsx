import React from 'react';
import StepZilla from 'react-stepzilla';
import StepAgreement from './StepAgreement';
import StepSurvey from './StepSurvey';
import StepUploadPicture from './StepUploadPicture';
import StepShippingAddress from './StepShippingAddress';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import Step6 from './Step6';
import './Wizard.css';

class Wizard extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};

    this.sampleStore = {
      email: '',
      gender: '',
      savedToCloud: false
    };
  }

  componentDidMount() {}

  componentWillUnmount() {}

  getStore() {
    return this.sampleStore;
  }

  updateStore(update) {
    this.sampleStore = {
      ...this.sampleStore,
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
        {name: '5', component: <Step3 getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
        //{name: 'step4', component: <Step4 getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
        //{name: 'Step5', component: <Step5 getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />},
        //{name: 'Step6', component: <Step6 getStore={() => (this.getStore())} updateStore={(u) => {this.updateStore(u)}} />}
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
            hocValidationAppliedTo={[]}/>
        </div>
      </div>
    )
  }
};

export default Wizard

