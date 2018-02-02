import React from 'react';
import './QRCode.css';

const QRCode = () => (
  <div className="survey-qr-code-wrapper">
    <hr className="survey-qr-code-line"/>
    <img width="100%" height="auto" className="survey-qr-code"
         src="http://system-assets.oss-cn-beijing.aliyuncs.com/images/5a61920b1cfb0.gif"/>
  </div>
);

export default QRCode;