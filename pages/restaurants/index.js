import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { i18n, withTranslation } from '../../i18n';

import MainLayout from '../layouts/mainLayout';
import SeoHead from '../../components/SeoHead';

import { Header, Footer } from '../../widgets';
import { Button, ImageBlock, TitlesAndDescription, NavMenu, TabMenu, FullWidthSlider } from '../../components';

import '../../styles/main.scss';

class Restaurants extends React.Component {
  constructor(props) {
    super(props);

    const { t, lang } = this.props;

    this.state = {
      restaurants: t('restaurants.all_restaurants', { returnObjects: true }),
      restaurantGalleries: t('restaurants.imageList', { returnObjects: true }),
    };
  }

  render() {
    const { t, lang } = this.props;
    const { restaurants, restaurantGalleries } = this.state;

    return (
      <MainLayout>
        <SeoHead title={t('restaurants.title')} description={t('restaurants.description')} lang={lang} route={'/'} />
        <section className="image-section">
          <ImageBlock src={t('restaurants.main_image')}></ImageBlock>
        </section>
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <TitlesAndDescription title={t('restaurants.title')} subtitle={t('restaurants.subtitle')} description={t('restaurants.description')}></TitlesAndDescription>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="row align-items-center mb-4">
              <div className="col-md">
                <h4 className="title--xs text-center text-md-start">{t('restaurants.all_restaurants_title')}</h4>
              </div>
            </div>
            <div className="flex-list-block">
              <ul className="flex-list">
                {restaurants.map((el, idx) => {
                  return <li key={idx}>{el}</li>;
                })}
              </ul>
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
            <FullWidthSlider data={restaurantGalleries}></FullWidthSlider>
          </div>
        </section>
      </MainLayout>
    );
  }
}

Restaurants.getInitialProps = async ({ req }) => {
  const lang = req ? req.language : i18n.language;

  return {
    namespacesRequired: ['common'],
    lang: lang,
  };
};

Restaurants.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(Restaurants);
