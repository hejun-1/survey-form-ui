import React from 'react';
import {Uploader} from 'react-file-upload';
import {FileUploader} from '../file-uploader';

class StepUploadPicture extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onError = this.onError.bind(this);
    this.onSuccess = this.onSuccess.bind(this);
    this.pictureUrl = null;
  }

  onError(error) {
  }

  onSuccess(data) {
    this.pictureUrl = data;
    this.props.updateStore({
      pictureUrl: this.pictureUrl
    });
  }

  isValidated() {
    return  this.pictureUrl !== null;
  }

  render() {
    return (
      <div>
        <div className="row">
          <div>
            <div className="wizard-step-header">
              <label className="col-md-12 control-label">
                <h2>第三步: 上传检测结果照片</h2>
              </label>
              <div className="wizard-card wizard-scroll-container">
                <FileUploader onSuccess={this.onSuccess} onError={this.onError} uploadUrl={"http://0.0.0.0:9190/pictures"}/>
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
