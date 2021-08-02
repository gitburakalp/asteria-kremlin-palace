import React from 'react';
import PropTypes from 'prop-types';
import { i18n, withTranslation } from '../../../i18n';
import { getRoomDataByName } from '../../../constants';
import { AccommodationInnerPages } from '../../../components';

class StandartRooms extends React.Component {
  render() {
    const { t, lang } = this.props;
    const roomName = 'Standart Rooms';
    const filteredData = getRoomDataByName(roomName, t('accommodation.rooms', { returnObjects: true }));

    return <AccommodationInnerPages data={filteredData} roomName={roomName} lang={lang}></AccommodationInnerPages>;
  }
}

StandartRooms.getInitialProps = async ({ req }) => {
  const lang = req ? req.language : i18n.language;

  return {
    namespacesRequired: ['common'],
    lang: lang,
  };
};

StandartRooms.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(StandartRooms);
