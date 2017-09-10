import React from 'react';
import { TextArea } from 'semantic-ui-react';

class Question extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.updateModel = this.updateModel.bind(this);
    this.updateModel(null);
  }

  updateModel(value) {
    this.props.model[this.props.dataIndex] = {
      question: this.props.label,
      value
    };
  }

  onChange(event) {
    const value = event.target.value;
    this.props.model[this.props.dataIndex] = {
      question: this.props.label,
      value
    };
  }

  render() {
    return (
      <div>
        <label>{ this.props.label }</label>
        <div className="ui form"><input className="form-control" onChange={this.onChange}/></div>
      </div>
    );
  }
};

Question.PropTypes = {
  label: React.PropTypes.string.required,
  model: React.PropTypes.object.required,
  dataIndex: React.PropTypes.string.required
};

export default Question

