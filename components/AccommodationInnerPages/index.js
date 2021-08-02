import React from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { i18n, withTranslation } from '../../i18n';
import { getRoomDataByName } from '../../constants';

import { SeoHead, ImageBlock, TitlesAndDescription, FullWidthSlider, Button } from '../../components';
import MainLayout from '../../pages/layouts/mainLayout';

import '../../styles/main.scss';

class AccommodationInnerPages extends React.Component {
  componentDidMount() {
    window.addEventListener('load', function () {
      var item = document.querySelector("header [data-title='accommodation']").parentElement;

      item.classList.add('is-active');
    });
  }

  render() {
    const { t, lang, data, roomName } = this.props;
    const bigImage = data.imageList[0].imageSource;
    const rooms = t('accommodation.rooms', { returnObjects: true });
    const otherRooms = [];

    rooms.forEach((el, idx) => {
      if (el.primary_title.toLowerCase() !== roomName.toLowerCase()) {
        otherRooms.push(el);
      }
    });

    return (
      <MainLayout>
        <SeoHead title={data.title + ' | ' + t('accommodation.title')} description={data.description} lang={lang} route={'/'} />
        <section className="image-section">
          <ImageBlock src={bigImage}></ImageBlock>
        </section>
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <TitlesAndDescription title={data.title} titleClass={'text-uppercase'} description={data.description}></TitlesAndDescription>
              </div>
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
            <FullWidthSlider data={data.imageList}></FullWidthSlider>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="row align-items-center mb-4">
              <div className="col-md">
                <h4 className="title--xs text-center text-md-start">{t('accommodation.other_rooms')}</h4>
              </div>
              <div className="col-md-auto">
                <h4 className="swiper-title text-center text-md-start mt-3 mt-md-0"></h4>
              </div>
            </div>
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
                {otherRooms.map((el, idx) => {
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
      </MainLayout>
    );
  }
}

AccommodationInnerPages.getInitialProps = async ({ req }) => {
  const lang = req ? req.language : i18n.language;

  return {
    namespacesRequired: ['common'],
    lang: lang,
  };
};

AccommodationInnerPages.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(AccommodationInnerPages);
