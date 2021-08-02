import React, { useState } from 'react';
import Link from 'next/link';
import { i18n } from '../../i18n';

import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = props => {
  const { children, className, src, id, tabs, icons, iconsClass, ...attributes } = props;

  const classes = classNames((tabs ? 'nav-link' : '') + className);
  const iconsclasses = classNames('icons', iconsClass);

  const tabProps = tabs
    ? {
        id: id + '-tab',
        'data-bs-toggle': 'tab',
        'data-bs-target': '#' + id,
        role: 'tab',
        'aria-controls': id,
        'aria-selected': 'false',
      }
    : {};

  return src !== undefined ? (
    <Link href={src} as={i18n.language !== 'en' ? '/' + i18n.language + src : src}>
      <a type="button" className={classes} {...tabProps} {...attributes}>
        {children}
        {icons ? <i className={iconsclasses}></i> : ''}
      </a>
    </Link>
  ) : (
    <a type="button" className={classes} {...tabProps} {...attributes}>
      {children}
      {icons ? <i className={iconsclasses}></i> : ''}
    </a>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  icons: PropTypes.bool,
  tabs: PropTypes.bool,
  src: PropTypes.string,
  id: PropTypes.string,
};

Button.defaultProps = {
  className: '',
  iconsClass: 'icons',
  icons: false,
  tabs: false,
};

export default Button;
