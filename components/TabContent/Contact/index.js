import React from 'react';
import PropTypes from 'prop-types';
import { i18n, withTranslation } from '../../../i18n';
import { Swiper, SwiperSlide } from 'swiper/react';

import { NavMenu, Button, ImageBlock, TitlesAndDescription } from '../../../components';
import { getWindowDimensions } from '../../../constants';

class Contact extends React.Component {
  render() {
    const { t, lang, data } = this.props;

    return (
      <div className="row">
        <div className="col-12">
          <div className="contact-block">
            {data.description}
            <p dangerouslySetInnerHTML={{ __html: data[0].description }}></p>
          </div>
        </div>
      </div>
    );
  }
}

Contact.getInitialProps = async ({ req }) => {
  const lang = req ? req.language : i18n.language;

  return {
    namespacesRequired: ['common'],
    lang: lang,
  };
};

Contact.propTypes = {
  t: PropTypes.func.isRequired,
  windowWidth: PropTypes.number,
};

export default withTranslation('common')(Contact);
