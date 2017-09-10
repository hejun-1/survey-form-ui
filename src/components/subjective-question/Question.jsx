import React from 'react';

class Question extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.props.onChange({ question: this.props.label, value: null });
  }

  onChange(event) {
    const value = event.target.value;
    this.props.onChange({ question: this.props.label, value: value });
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
  onChange: React.PropTypes.func.required
};

export default Question

