import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const NavMenu = (props) => {
  const { className, children, tabs, tag: Tag, ...attributes } = props;

  const classes = classNames(
    Tag === "ul" ? "nav" : "",
    tabs && "nav-tabs",
    className
  );

  return (
    <Tag className={classes} {...attributes}>
      {children}
    </Tag>
  );
};

NavMenu.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tabs: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
};

NavMenu.defaultProps = {
  tag: "li",
  tabs: false,
};

export default NavMenu;
