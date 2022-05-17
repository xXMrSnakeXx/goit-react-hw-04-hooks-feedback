import PropTypes from 'prop-types';

import s from './Statistics.module.css';

export const Statistics = ({ stat, total, positivePercentage }) => {
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
};
Statistics.propTypes = {
  stat: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
