import React from 'react';

export default class StepShippingAddress extends React.PureComponent {
  constructor(props) {
    super(props);
    this.getVerifyCode = this.getVerifyCode.bind(this);
    this.onAddressChange = this.onAddressChange.bind(this);
    this.onPhoneChange = this.onPhoneChange.bind(this);
    this.onVerifyCodeChange = this.onVerifyCodeChange.bind(this);
  }

  onVerifyCodeChange() {

  }

  getVerifyCode() {
    console.log('getVerifyCode');
  }

  onPhoneChange() {
    console.log('onPhoneChange');
  }

  onAddressChange() {
    console.log('onAddressChange');
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
                <h2>第四步: 填写收货地址及联系方式</h2>
                <h4>请务必保证您的<code>收货地址</code>以及<code>电话号码</code>正确</h4>
              </label>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="wizard-card wizard-scroll-container">
                  <div>
                    <label>手机号:</label>
                    <div className="input-group">
                      <input type="text" className="form-control" onChange={this.onPhoneChange}/>
                      <span className="input-group-addon" onClick={this.getVerifyCode} style={{cursor: "pointer"}}>获取验证码</span>
                    </div>
                  </div>
                  <div>
                    <label>验证码:</label>
                    <input className="form-control" onChange={this.onVerifyCodeChange}/>
                  </div>
                  <div>
                    <label>收货地址:</label>
                    <input className="form-control" onChange={this.onAddressChange}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
