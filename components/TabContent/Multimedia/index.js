import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { i18n, withTranslation } from '../../../i18n';
import { Swiper, SwiperSlide } from 'swiper/react';

import { NavMenu, Button, ImageBlock, TitlesAndDescription } from '../../../components';
import { getWindowDimensions } from '../../../constants';

const Multimedia = props => {
  const [width, setWidth] = useState(0);

  function renderMobile() {
    const { data } = props;

    return (
      <>
        <Swiper
          spaceBetween={15}
          slidesPerView={1.1619}
          observer={true}
          observeParents={true}
          breakpoints={{
            768: { slidesPerView: 3.2085, spaceBetween: 30 },
          }}
          className={'multimedia-section'}
        >
          {data.map((el, idx) => {
            return (
              <SwiperSlide key={idx}>
                <ImageBlock src={el.imageSource} radius={true}>
                  <Button icons={true} href={el.href} iconsClass={'icons--chevron-right-circle-transparent'} className={'image-button full-width'}>
                    <span>{el.title}</span>
                    <span>{el.description}</span>
                  </Button>
                </ImageBlock>
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
        <div className="row justify-content-center two-cards-block mt-0">
          {data.map((el, idx) => {
            return (
              <div key={idx} className="col-md col-xl-auto">
                <ImageBlock src={el.imageSource} radius={true}>
                  <Button icons={true} href={el.href} iconsClass={'icons--chevron-right-circle-transparent'} className={'image-button full-width'}>
                    <span>{el.title}</span>
                    <span>{el.description}</span>
                  </Button>
                </ImageBlock>
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

  return width < 768 ? renderMobile() : renderDesktop();
};

Multimedia.getInitialProps = async ({ req }) => {
  const lang = req ? req.language : i18n.language;

  return {
    namespacesRequired: ['common'],
    lang: lang,
  };
};

Multimedia.propTypes = {
  t: PropTypes.func.isRequired,
  data: PropTypes.array,
  windowWidth: PropTypes.number,
};

export default withTranslation('common')(Multimedia);
