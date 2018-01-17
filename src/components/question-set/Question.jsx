import React from 'react';
import './Question.css';

const customValueLabel = '其他';

class Question extends React.PureComponent {
  constructor(props) {
    super(props);
    this.props.onChange({ question: this.props.label, value: null, values: null});
    this.onCustomValueChange = this.onCustomValueChange.bind(this);
    this.onSingleInputChange = this.onSingleInputChange.bind(this);
    this.onChange = this.onChange.bind(this);
    this.answers = {};
    this.props.options.forEach(o => this.answers[o.label] = '');
    this.answers[customValueLabel] = '';
  }

  onChange() {
    const values = Object.keys(this.answers).map(l => l + '=' + this.answers[l]);
    this.props.onChange({ question: this.props.label, value: values.toString(), values: values});
  }

  onSingleInputChange(label, value) {
    this.answers[label] = value;
    this.onChange();
  }

  onCustomValueChange(event) {
    this.answers[customValueLabel] = event.target.value;
    this.onChange();
  }

  render() {
    return (
      <div>
        <label>{ this.props.label }</label>
        {
          this.props.options.map((option, index) =>
            <div key={`qs-${index}`} className="qs-line">
              <div className="qs-label">{option.label}</div>
              <div className="ui form">
                <input className="form-control" onChange={(evt) => {
                  this.onSingleInputChange(option.label, evt.target.value);
                }}/>
              </div>
            </div>
          )
        }
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
  enableCustomValue: React.PropTypes.bool,
  onChange: React.PropTypes.func.required
};

export default Question

