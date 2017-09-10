import React from 'react';
import { TextArea } from 'semantic-ui-react';

class Question extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event, data) {
    console.log(event.target.value);
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
  label: React.PropTypes.string
};

export default Question

