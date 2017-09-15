import React from 'react';
import $ from 'jquery';
import endpoint from '../../backend';

class StepShippingAddress extends React.PureComponent {
  constructor(props) {
    super(props);
    this.getVerifyCode = this.getVerifyCode.bind(this);
    this.onAddressChange = this.onAddressChange.bind(this);
    this.onPhoneChange = this.onPhoneChange.bind(this);
    this.onVerifyCodeChange = this.onVerifyCodeChange.bind(this);
    this.state = {
      validateError: null
    }
  }

  onVerifyCodeChange(event) {
    const verifyCode = event.target.value;
    this.verifyCode = verifyCode;
  }

  getVerifyCode() {
    $.ajax({
      url: `${endpoint}/surveys/${this.mobile}/verifycode`,
      type: 'GET',
      complete: (data) => {}
    });
  }

  onPhoneChange(event) {
    const mobile = event.target.value;
    this.props.updateStore({
      mobile
    });
    this.mobile = mobile;
  }

  onAddressChange(event) {
    const shippingAddress = event.target.value;
    this.props.updateStore({
      shippingAddress
    });
    this.shippingAddress = shippingAddress;
  }

  isValidated() {
    if (!this.shippingAddress) {
      this.setState({
        validateError: '请填写邮寄地址'
      });
      return false;
    } else if (!this.mobile) {
      this.setState({
        validateError: '电话号码错误'
      });
      return false;
    }
    // } else if (!this.verifyCode) {
    //   this.setState({
    //     validateError: '验证码错误'
    //   });
    //   return false;
    // }

    const store = this.props.getStore();
    store.tags = store.questions.map((q) => q.value).filter((t) => t && t.length > 0);

    return new Promise((resolve, reject) => {
      $.ajax({
        url: `${endpoint}/surveys?verifyCode=${this.verifyCode}`,
        data: JSON.stringify(store),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        type: 'POST',
        complete: (data) => {
          if (data.statusText == 'error') {
            this.setState({
              validateError: '提交失败,请重试或者联系我们解决'
            });
            reject();
          } else if (data.responseText == 'SUCCESS') {
            resolve();
          } else {
            this.setState({
              validateError: '提交失败,请重试或者联系我们解决'
            });
            reject();
          }
        }
      });
    });
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
                {
                  this.state.validateError && <div className={"validate-error"}>
                    <code>{this.state.validateError}</code>
                  </div>
                }
              </label>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="wizard-card wizard-scroll-container">
                  <div>
                    <label>手机号:</label>
                    <input type="text" className="form-control" onChange={this.onPhoneChange}/>
                    <div style={{display: "none"}} className="input-group">
                      <span className="input-group-addon" onClick={this.getVerifyCode} style={{cursor: "pointer"}}>获取验证码</span>
                    </div>
                  </div>
                  <div style={{display: "none"}}>
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

StepShippingAddress.PropTypes = {
  getStore: React.PropTypes.func,
  updateStore: React.PropTypes.func
};

export default StepShippingAddress;
