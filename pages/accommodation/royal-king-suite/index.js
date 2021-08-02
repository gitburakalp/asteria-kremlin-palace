import React from 'react';
import PropTypes from 'prop-types';
import { i18n, withTranslation } from '../../../i18n';
import { getRoomDataByName } from '../../../constants';
import { AccommodationInnerPages } from '../../../components';

class RoyalKingSuite extends React.Component {
  render() {
    const { t, lang } = this.props;
    const roomName = 'Royal King Suite';
    const filteredData = getRoomDataByName(roomName, t('accommodation.rooms', { returnObjects: true }));

    return <AccommodationInnerPages data={filteredData} roomName={roomName} lang={lang}></AccommodationInnerPages>;
  }
}

RoyalKingSuite.getInitialProps = async ({ req }) => {
  const lang = req ? req.language : i18n.language;

  return {
    namespacesRequired: ['common'],
    lang: lang,
  };
};

RoyalKingSuite.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(RoyalKingSuite);
