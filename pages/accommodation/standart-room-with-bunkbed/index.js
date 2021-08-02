import React from 'react';
import PropTypes from 'prop-types';
import { i18n, withTranslation } from '../../../i18n';
import { getRoomDataByName } from '../../../constants';
import { AccommodationInnerPages } from '../../../components';

class StandartRoomWithBunkbed extends React.Component {
  render() {
    const { t, lang } = this.props;
    const roomName = 'Standart Room With Bunkbed';
    const filteredData = getRoomDataByName(roomName, t('accommodation.rooms', { returnObjects: true }));

    return <AccommodationInnerPages data={filteredData} roomName={roomName} lang={lang}></AccommodationInnerPages>;
  }
}

StandartRoomWithBunkbed.getInitialProps = async ({ req }) => {
  const lang = req ? req.language : i18n.language;

  return {
    namespacesRequired: ['common'],
    lang: lang,
  };
};

StandartRoomWithBunkbed.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(StandartRoomWithBunkbed);
