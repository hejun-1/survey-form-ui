import React from 'react';
import { Checkbox, CheckboxGroup } from 'react-checkbox-group';
import './Question.css';

class Question extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { values: [] };
    this.onSelect = this.onSelect.bind(this);
    this.onCustomValueChange = this.onCustomValueChange.bind(this);
    this.props.onChange({ question: this.props.label, value: null, values: null});
  }

  onCustomValueChange(event) {
    this.state = { values: [] };
    const value = event.target.value;
    this.props.onChange({ question: this.props.label, value: value, values: null});
  }

  onSelect(choices) {
    if (!this.props.multiple && choices.length === 2) {
      choices = choices.splice(1, 1);
    }
    this.setState({
      values: choices
    });

    this.props.onChange({ question: this.props.label, value: choices.toString(), values: choices});
  }

  render() {
    return (
      <div>
        <label>{ this.props.label }</label>
        <CheckboxGroup
          onChange = { this.onSelect }
          value = { this.state.values }>
          {this.props.options.map((option) => (
            <div key={ option.value }><span><Checkbox key={ option.value } value={ option.value }/>{ option.label }</span></div>
          ))}
        </CheckboxGroup>
        {this.props.enableCustomValue &&
          <div style={{overflow: "hidden"}}>
            <span className="choice-other-label">其他: </span><input className="form-control choice-other-field" onChange={this.onCustomValueChange}/>
          </div>
        }
      </div>
    );
  }
};

Question.PropTypes = {
  options: React.PropTypes.array.required,
  label: React.PropTypes.string.required,
  multiple: React.PropTypes.bool,
  enableCustomValue: React.PropTypes.bool,
  onChange: React.PropTypes.func.required
};

export default Question

