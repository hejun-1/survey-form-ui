import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import './FileUploader.css';

class FileUploader extends React.PureComponent {
  constructor(props) {
    super(props);
    this.uploadFile = this.uploadFile.bind(this);
    this.onClick = this.onClick.bind(this);
    this.state = {
      pictureUrl: null
    }
  }

  onClick() {
    this.file.click();
  }

  uploadFile(event) {
    var fd = new FormData();
    fd.append('file', this.file.files[0]);
    $.ajax({
      url: this.props.uploadUrl,
      data: fd,
      processData: false,
      contentType: false,
      type: 'POST',
      success: (data) => {
        this.setState({
          pictureUrl: data
        });
        this.props.onSuccess(data);
      },
      error: this.props.onError
    });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form ref="uploadForm" className="uploader" encType="multipart/form-data" >
          <span className="glyphicon glyphicon-plus upload-btn" onClick={this.onClick}></span>
          <input className="upload-file-input" onChange={this.uploadFile} ref={f=> this.file = ReactDOM.findDOMNode(f)} type="file" name="file"/>
          <img className="upload-preview" src={this.state.pictureUrl}/>
        </form>
      </div>
    );
  }
}

FileUploader.PropTypes = {
  uploadUrl: React.PropTypes.string.required,
  onSuccess: React.PropTypes.func.required,
  onError:  React.PropTypes.func.required
}

export default FileUploader;