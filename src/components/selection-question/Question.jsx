import React from 'react';

class Question extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      value: ""
    }
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
    this.updateModel(value);
  }

  render() {
    return (
      <div>
        <label>{ this.props.label }</label>
        <select
          ref="question"
          autoComplete="off"
          className="form-control"
          required
          defaultValue={this.state.value}
          onChange={this.onChange}>
          <option value="">请选择</option>
          {
            this.props.options.map((o, i) => {
              return <option key={i} value={o.value}>{o.label}</option>
            })
          }
        </select>
      </div>
    );
  }
};

Question.PropTypes = {
  label: React.PropTypes.string.required,
  defaultValue: React.PropTypes.string,
  options: React.PropTypes.array.required,
  model: React.PropTypes.object.required,
  dataIndex: React.PropTypes.string.required
};

export default Question

