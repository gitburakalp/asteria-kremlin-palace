import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { i18n, withTranslation } from '../../../i18n';
import { Swiper, SwiperSlide } from 'swiper/react';

import { NavMenu, Button, ImageBlock, TitlesAndDescription } from '../../../components';
import { getWindowDimensions } from '../../../constants';

const Factsheet = props => {
  const [width, setWidth] = useState(0);

  function factsheetCards() {
    const { data } = props;

    const menuContent = data.menuContent;
    const menuContent_2 = data.menuContent_2;
    const menuContent_2_Cards = data.menuContent_2.cards;

    return (
      <>
        <div className="row">
          <div className="col-12">
            <TitlesAndDescription
              title={menuContent_2.title.toUpperCase()}
              titleClass="title--sm"
              subtitle={menuContent_2.subtitle}
              subtitleClass={'subtitle--sm'}
              description={menuContent_2.description}
              centered={true}
            ></TitlesAndDescription>
          </div>
        </div>
        <div className="row justify-content-center two-cards-block">
          {menuContent_2_Cards.map((el, idx) => {
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

  function renderMobile() {
    const { data } = props;

    return (
      <>
        <Swiper
          spaceBetween={22.88}
          slidesPerView={1.44859}
          centeredSlides={true}
          breakpoints={{
            768: { slidesPerView: 3.2085, spaceBetween: 30, centeredSlides: false },
          }}
          className={'factsheet-section'}
          observer={true}
          observeParents={true}
        >
          {data.menuContent.map((el, idx) => {
            return (
              <SwiperSlide key={idx} className={'factsheet-card'}>
                <ImageBlock src={el.imageSource}>
                  <Button src={el.buttonHref} className={'glass-button'} icons={true} iconsClass={'icons--chevron-right-circle-yellow'}>
                    <span>{el.buttonSmallTitle}</span>
                    <span>{el.buttonTitle}</span>
                  </Button>
                </ImageBlock>
              </SwiperSlide>
            );
          })}
        </Swiper>
        {factsheetCards()}
      </>
    );
  }

  function renderDesktop() {
    const { data } = props;

    return (
      <>
        <div className="factsheet-section">
          {data.menuContent.map((el, idx) => {
            return (
              <div key={idx} className={'factsheet-card'}>
                <ImageBlock src={el.imageSource}>
                  <Button src={el.buttonHref} className={'glass-button'} icons={true} iconsClass={'icons--chevron-right-circle-yellow'}>
                    <span>{el.buttonSmallTitle}</span>
                    <span>{el.buttonTitle}</span>
                  </Button>
                </ImageBlock>
              </div>
            );
          })}
        </div>
        {factsheetCards()}
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

Factsheet.getInitialProps = async ({ req }) => {
  const lang = req ? req.language : i18n.language;

  return {
    namespacesRequired: ['common'],
    lang: lang,
  };
};

Factsheet.propTypes = {
  t: PropTypes.func.isRequired,
  windowWidth: PropTypes.number,
};

export default withTranslation('common')(Factsheet);
