import { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import s from './FeedbackOptions.module.css';

export class FeedbackOptions extends Component {
  static defaultProps = {
    options: { good: 0, neutral: 0, bad: 0 },
  };
  static propTypes = {
    options: PropTypes.shape({
      good: PropTypes.number,
      neutral: PropTypes.number,
      bad: PropTypes.number,
    }).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <>
        {Object.keys(options).map(option => (
          <button
            className={s.btn}
            key={nanoid()}
            value={option}
            type="button"
            onClick={e => onLeaveFeedback(e)}
          >
            {option}
          </button>
        ))}
      </>
    );
  }
}
