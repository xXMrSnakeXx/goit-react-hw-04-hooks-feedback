import { Component } from 'react';
import PropTypes from 'prop-types';

import s from './Statistics.module.css';

export class Statistics extends Component {
  static defaultProps = {
    stat: { good: 0, neutral: 0, bad: 0 },
    total: 0,
  };

  static propTypes = {
    stat: PropTypes.shape({
      good: PropTypes.number.isRequired,
      neutral: PropTypes.number.isRequired,
      bad: PropTypes.number.isRequired,
    }).isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  };
  render() {
    const { stat, total, positivePercentage } = this.props;
    return (
      <>
        {Object.entries(stat).map(([key, value]) => (
          <p className={s.text} key={key}>
            {key}: {value}
          </p>
        ))}
        <p className={s.text}> Total: {total}</p>
        <p className={s.text}> Positive feedback: {positivePercentage}%</p>
      </>
    );
  }
}
