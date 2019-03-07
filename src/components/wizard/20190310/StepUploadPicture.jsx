import React from 'react';
import {Uploader} from 'react-file-upload';
import {FileUploader} from '../../file-uploader';
import endpoint from '../../../backend';
import service from '../../../service.jsx';

class StepUploadPicture extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onError = this.onError.bind(this);
    this.onSuccess = this.onSuccess.bind(this);
    this.pictureUrl = null;
    this.state = {
      validateError: false,
      errorMessage: null
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
      return false;
    }
    const store = this.props.getStore();
    store.tags = store.questions.map((q) => q.value).filter((t) => t && t.length > 0);
    return service.submit(store).then((seqNo) => {
      store.seqNo = seqNo;
    }).catch((error) => {
      this.setState({
        errorMessage: error
      });
      return Promise.reject();
    });
  }

  render() {
    return (
      <div>
        <div className="row">
          <div>
            <div className="wizard-step-header">
              <label className="col-md-12 control-label">
                <h2>第{this.props.index}步: 上传检测结果照片</h2>
                {
                  this.state.validateError && <div className={"validate-error"}>
                    <code>进行下一步前请上传照片,以便工作人员进行处理</code>
                  </div>
                }
              </label>
                {this.state.errorMessage && <code>{this.state.errorMessage}</code>}
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
