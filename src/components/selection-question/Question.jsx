import React from 'react';

class Question extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      value: ""
    }
  }

  onChange(event, data) {
    console.log(event);
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
  label: React.PropTypes.string,
  defaultValue: React.PropTypes.string,
  options: React.PropTypes.array
};

export default Question

