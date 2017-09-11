import React from 'react';
import {Uploader} from 'react-file-upload';
import {FileUploader} from '../file-uploader';
import endpoint from '../../backend';

class StepUploadPicture extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onError = this.onError.bind(this);
    this.onSuccess = this.onSuccess.bind(this);
    this.pictureUrl = null;
    this.state = {
      validateError: false
    }
  }

  onError(error) {
  }

  onSuccess(data) {
    this.pictureUrl = data;
    this.setState({
      validateError: false
    });
    this.props.updateStore({
      pictureUrl: this.pictureUrl
    });
  }

  isValidated() {
    const isValidated = this.pictureUrl !== null;
    if (!isValidated) {
      this.setState({
        validateError: true
      });
    }
    return isValidated;
  }

  render() {
    return (
      <div>
        <div className="row">
          <div>
            <div className="wizard-step-header">
              <label className="col-md-12 control-label">
                <h2>第三步: 上传检测结果照片</h2>
                {
                  this.state.validateError && <div className={"validate-error"}>
                    <code>进行下一步前请上传照片,以便工作人员进行处理</code>
                  </div>
                }

              </label>
              <div className="wizard-card wizard-scroll-container">
                <FileUploader onSuccess={this.onSuccess} onError={this.onError} uploadUrl={`${endpoint}/pictures`}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

StepUploadPicture.PropTypes = {
  getStore: React.PropTypes.func,
  updateStore: React.PropTypes.func
};

export default StepUploadPicture;
