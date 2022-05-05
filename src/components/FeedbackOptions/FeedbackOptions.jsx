import { Component } from 'react';
import PropTypes from 'prop-types';

import s from './FeedbackOptions.module.css';

export class FeedbackOptions extends Component {
  static defaultProps = {
    options: [],
  };
  static propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <>
        {options.map(btn => (
          <button
            className={s.btn}
            key={btn}
            value={btn}
            type="button"
            onClick={e => onLeaveFeedback(e)}
          >
            {btn}
          </button>
        ))}
      </>
    );
  }
}
