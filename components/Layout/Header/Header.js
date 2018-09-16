import React from 'react';
import { translate } from 'react-i18next';
import pirate from '../../../assets/pirate.svg';
import h from './header.scss';

const Header = ({ t, dataHook }) => (
  <div data-hook={dataHook} className={h.header}>
    <img alt="pirate" width="40" height="40" src={pirate} className={h.img} />
    <h2> {t('app.title')} </h2>{' '}
  </div>
);

export default translate(null, {
  wait: false,
})(Header);
