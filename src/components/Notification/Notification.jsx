import { Component } from 'react';
import PropTypes from 'prop-types';

import s from './Notification.module.css';

export class Notification extends Component {
  static defaultProps = {
    message: ' ',
  };
  static propTypes = {
    message: PropTypes.string,
  };
  render() {
    const { message } = this.props;
    return <h2 className={s.title}>{message}</h2>;
  }
}
