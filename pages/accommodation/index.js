import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { i18n, withTranslation } from '../../i18n';
import { Swiper, SwiperSlide } from 'swiper/react';

import MainLayout from '../layouts/mainLayout';
import SeoHead from '../../components/SeoHead';

import { Header, Footer } from '../../widgets';
import { Button, ImageBlock, TitlesAndDescription, NavMenu, TabMenu, FullWidthSlider } from '../../components';

import '../../styles/main.scss';

class Accommodation extends React.Component {
  constructor(props) {
    super(props);

    const { t, lang } = this.props;

    this.state = {
      roomList: t('accommodation.rooms', { returnObjects: true }),
      roomsGalleries: [],
    };
  }

  render() {
    const { t, lang } = this.props;
    const { roomsGalleries, roomList } = this.state;

    roomList.map((el, idx) => {
      const roomTitle = el.title.toUpperCase();

      el.imageList.map((e, i) => {
        const item = { title: roomTitle, imageSource: e.imageSource };
        roomsGalleries.push(item);
      });
    });

    return (
      <MainLayout>
        <SeoHead title={t('accommodation.title')} description={t('accommodations.title')} lang={lang} route={'/'} />
        <section className="image-section">
          <ImageBlock src={t('accommodation.main_image')}></ImageBlock>
        </section>
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <TitlesAndDescription title={t('accommodation.title')} subtitle={t('accommodation.subtitle')} description={t('accommodation.description')}></TitlesAndDescription>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="card-swiper with-glass-button enabled-desktop-swiper">
              <Swiper
                spaceBetween={33}
                slidesPerView={1.44859}
                breakpoints={{
                  574: { slidesPerView: 2.339, spaceBetween: 30 },
                  768: { slidesPerView: 3.339, spaceBetween: 30 },
                  1200: { slidesPerView: 3.34, spaceBetween: 33 },
                  // 1920: { slidesPerView: 3.9036, spaceBetween: 33 },
                  // 2048: { slidesPerView: 4.0617, spaceBetween: 33 },
                }}
              >
                {roomList.map((el, idx) => {
                  return (
                    <SwiperSlide key={idx}>
                      <ImageBlock src={el.cardImageSource} radius={true}>
                        <Button src={el.buttonHref} className={'glass-button'} icons={true} iconsClass={'icons--chevron-right-circle-yellow'}>
                          <span>ASTERIA</span>
                          <span>{el.title.toUpperCase()}</span>
                        </Button>
                      </ImageBlock>
                      <Button src={''} className={'btn--primary'} icons={true} iconsClass={'icons--chevron-right-circle'}>
                         {t('book_now').toUpperCase()}
                      </Button>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="row align-items-center mb-4">
              <div className="col-md">
                <h4 className="title--xs text-center text-md-start">{t('accommodation.gallery_title')}</h4>
              </div>
              <div className="col-md-auto">
                <h4 className="swiper-title text-center text-md-start mt-3 mt-md-0"></h4>
              </div>
            </div>
            <FullWidthSlider data={roomsGalleries}></FullWidthSlider>
          </div>
        </section>
      </MainLayout>
    );
  }
}

Accommodation.getInitialProps = async ({ req }) => {
  const lang = req ? req.language : i18n.language;

  return {
    namespacesRequired: ['common'],
    lang: lang,
  };
};

Accommodation.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(Accommodation);
