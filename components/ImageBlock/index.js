import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ImageBlock = props => {
  const { className, hover, overlay, src, radius, ...attributes } = props;
  const classnames = className + (overlay ? ' has-overlay' : '') + (hover ? ' has-hover' : '') + (radius ? ' has-radius' : '');

  const imageContent = () => {
    let minSource = '';

    if (src.length != 1 && src.length != 0) {
      return <img src={src} loading="lazy" className="img-fluid" />;
    } else {
      minSource = idx === 0 ? el.srcset : '';
      return (
        <>
          <picture>
            {src.map((el, idx) => {
              return <source key={idx} media={`(min-width: ${el.breakpoints}px)`} srcset={el.srcset} />;
            })}
            <img loading="lazy" src={minSource} />
          </picture>
        </>
      );
    }
  };

  return (
    <figure className={classnames} {...attributes}>
      {imageContent()}
      {props.children}
    </figure>
  );
};

ImageBlock.propTypes = {
  className: PropTypes.string,
  hover: PropTypes.bool,
  overlay: PropTypes.bool,
  src: PropTypes.string,
  radius: PropTypes.bool,
};

ImageBlock.defaultProps = {
  className: 'figure',
  overlay: false,
  hover: false,
  radius: false,
};

export default ImageBlock;
