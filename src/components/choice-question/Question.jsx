import React from 'react';
import { Checkbox, CheckboxGroup } from 'react-checkbox-group';

class Question extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { values: [] };
    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(choices) {
    if (!this.props.multiple && choices.length === 2) {
      choices = choices.splice(1, 1);
    }
    this.setState({
      values: choices
    });
  }

  render() {
    return (
      <div>
        <label>{ this.props.label }</label>
        <CheckboxGroup
          onChange = { this.onSelect }
          value = { this.state.values }>
          {this.props.options.map((option) => (
            <div key={ option.value }><label><Checkbox key={ option.value } value={ option.value }/>{ option.label }</label></div>
          ))}
        </CheckboxGroup>
      </div>
    );
  }
};

Question.PropTypes = {
  options: React.PropTypes.array,
  label: React.PropTypes.string,
  multiple: React.PropTypes.bool
};

export default Question

