import React from 'react';
import PropTypes from 'prop-types';
import { i18n, withTranslation } from '../../i18n';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectFade, Navigation, Pagination } from 'swiper';
import { ImageBlock } from '../../components';
import { getWindowDimensions } from '../../constants';

import 'swiper/components/effect-fade/effect-fade.scss';
import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([EffectFade, Navigation, Pagination]);

class FullWidthSlider extends React.Component {
  render() {
    const { t, lang, data } = this.props;

    return (
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        className={'full-width-slider'}
        navigation
        pagination={{ clickable: true, dynamicBullets: true }}
        effect="fade"
        onSlideChange={() => {
          const fullWidthSlider = document.querySelector('.full-width-slider');
          const title = fullWidthSlider.closest('.container').querySelector('.swiper-title');
          title.innerHTML = fullWidthSlider.querySelector('.swiper-slide-active').getAttribute('data-title');
        }}
      >
        {data.map((el, idx) => {
          return (
            <SwiperSlide key={idx} data-title={el.title}>
              <ImageBlock src={el.imageSource} radius={true}></ImageBlock>
            </SwiperSlide>
          );
        })}
      </Swiper>
    );
  }
}

FullWidthSlider.getInitialProps = async ({ req }) => {
  const lang = req ? req.language : i18n.language;

  return {
    namespacesRequired: ['common'],
    lang: lang,
  };
};

FullWidthSlider.propTypes = {
  t: PropTypes.func.isRequired,
  data: PropTypes.array,
};

export default withTranslation('common')(FullWidthSlider);
