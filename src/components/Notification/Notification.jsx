import PropTypes from 'prop-types';

import s from './Notification.module.css';

export const Notification = ({ message }) => {
  return <h2 className={s.title}>{message}</h2>;
};
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
