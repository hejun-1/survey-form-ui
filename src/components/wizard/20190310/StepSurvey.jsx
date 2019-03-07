import React from 'react';
import { Form } from '../../survey-forms/20190310';
import service from '../../../service.jsx';

class StepSurvey extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            validateStateClass: '',
            showStatements: false,
            sn: null
        };
        this.onSNChange = this.onSNChange.bind(this);
    }

    onSNChange(evt) {
        this.setState({ sn: evt.target.value });
        this.props.updateStore({
            ...this.props.getStore(),
            sn: evt.target.value
        });
    }

    isValidated() {
        const { sn } = this.state;
        if (!sn) {
            this.setState({
                validateStateClass: 'validate-error'
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
                                <h2>第{this.props.index}步: 填写调查问卷</h2>
                            </label>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="wizard-card wizard-scroll-container">
                                    <div className={this.state.validateStateClass}>
                                        <div className="question">
                                            <label>您的尿液网络查询编码是？</label>
                                            <div className="ui form"><input placeholder="请输入尿液采样器或者尿液采样器木棒上的编码" className="form-control" onBlur={this.onSNChange} onChange={this.onSNChange}/></div>
                                        </div>
                                    </div>
                                    <Form getStore={() => (this.props.getStore())} updateStore={(u) => {this.props.updateStore(u)}}></Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

StepSurvey.PropTypes = {
    getStore: React.PropTypes.func,
    updateStore: React.PropTypes.func
};

export default StepSurvey;
