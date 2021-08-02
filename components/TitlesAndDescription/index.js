import React from 'react';
import PropTypes from 'prop-types';

class TitlesAndDescription extends React.Component {
  render() {
    const { titleClass, title, subtitle, subtitleClass, description, centered } = this.props;
    const hasSubtitle = subtitle !== undefined;

    return (
      <div className={'title-desc-wrapper' + (centered ? ' text-center' : '')}>
        <h2 className={'title ' + titleClass}>{title}</h2>
        {hasSubtitle ? <h3 className={'subtitle mb-2 ' + (subtitleClass != undefined ? subtitleClass : '')}>{subtitle}</h3> : null}
        <p className="description" dangerouslySetInnerHTML={{ __html: description }}></p>
      </div>
    );
  }
}

TitlesAndDescription.defaultProps = {
  titleClass: 'title',
  title: 'Default Title',
  description: 'Default description',
  centered: false,
};

TitlesAndDescription.propTypes = {
  titleClass: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  centered: PropTypes.bool,
};

export default TitlesAndDescription;
