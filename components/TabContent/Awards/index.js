import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { i18n, withTranslation } from '../../../i18n';
import { Swiper, SwiperSlide } from 'swiper/react';

import { NavMenu, Button, ImageBlock, TitlesAndDescription } from '../../../components';
import { getWindowDimensions } from '../../../constants';

const Awards = props => {
  const [width, setWidth] = useState(0);

  function renderMobile() {
    const { data } = props;

    return (
      <>
        <Swiper
          spaceBetween={22}
          slidesPerView={1.9019}
          observer={true}
          observeParents={true}
          breakpoints={{
            768: { slidesPerView: 3.5, spaceBetween: 28, centeredSlides: false },
          }}
          className={'awards-block'}
        >
          {data.map((el, idx) => {
            return (
              <SwiperSlide key={idx} className={'awards-item'}>
                <div className={'bordered-cards'}>
                  <ImageBlock src={el.imageSource}></ImageBlock>
                  <Button src={el.buttonHref} className={'pure-link'}>
                    <span>{el.buttonSmallTitle}</span>
                    <span>{el.buttonTitle}</span>
                  </Button>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </>
    );
  }

  function renderDesktop() {
    const { data } = props;

    return (
      <>
        <div className="awards-block">
          {data.map((el, idx) => {
            return (
              <div key={idx} className={'awards-item'}>
                <div className={'bordered-cards'}>
                  <ImageBlock src={el.imageSource}></ImageBlock>
                  <Button src={el.buttonHref} className={'pure-link'}>
                    <span>{el.buttonSmallTitle}</span>
                    <span>{el.buttonTitle}</span>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }

  useEffect(() => {
    window.addEventListener('load', function () {
      setWidth(window.outerWidth);
    });

    window.addEventListener('resize', function () {
      setWidth(window.outerWidth);
    });
  }, [width]);

  return width < 1200 ? renderMobile() : renderDesktop();
};

Awards.getInitialProps = async ({ req }) => {
  const lang = req ? req.language : i18n.language;

  return {
    namespacesRequired: ['common'],
    lang: lang,
  };
};

Awards.propTypes = {
  t: PropTypes.func.isRequired,
  data: PropTypes.array,
  windowWidth: PropTypes.number,
};

export default withTranslation('common')(Awards);
