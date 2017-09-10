import React from 'react';
import {Uploader} from 'react-file-upload';

class StepUploadPicture extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onError = this.onError.bind(this);
    this.onSuccess = this.onSuccess.bind(this);
    console.log(this.props.getStore());
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  onError(error) {
    console.log(error);
  }

  onSuccess(data) {
    console.log(data);
  }

  isValidated() {
    return true;
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
              <Uploader url='/upload' multiple={false}
                        onError={this.onError}
                        onSuccess={this.onSuccess} label={<code>选择照片</code>}/>
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
