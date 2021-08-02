import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { i18n, withTranslation } from '../../i18n';

import MainLayout from '../layouts/mainLayout';
import SeoHead from '../../components/SeoHead';

import { Header, Footer } from '../../widgets';
import { Button, ImageBlock, TitlesAndDescription, NavMenu, TabMenu, FullWidthSlider } from '../../components';

import '../../styles/main.scss';

class SpaWellness extends React.Component {
  constructor(props) {
    super(props);

    const { t, lang } = this.props;

    this.state = {
      items: t('spa-wellness.items', { returnObjects: true }),
      galleries: t('spa-wellness.imageList', { returnObjects: true }),
    };
  }

  render() {
    const { t, lang } = this.props;
    const { items, galleries } = this.state;

    return (
      <MainLayout>
        <SeoHead title={t('spa-wellness.title')} description={t('spa-wellness.description')} lang={lang} route={'/'} />
        <section className="image-section">
          <ImageBlock src={t('spa-wellness.main_image')}></ImageBlock>
        </section>
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <TitlesAndDescription title={t('spa-wellness.title')} description={t('spa-wellness.description')}></TitlesAndDescription>
              </div>
            </div>
          </div>
        </section>
        {items.map((el, idx) => {
          return (
            <section key={idx} className="section">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <TitlesAndDescription title={el.title.toLowerCase()} titleClass={'title--xs text-capitalize'} description={el.description}></TitlesAndDescription>
                  </div>
                </div>
              </div>
            </section>
          );
        })}

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
            <FullWidthSlider data={galleries}></FullWidthSlider>
          </div>
        </section>
      </MainLayout>
    );
  }
}

SpaWellness.getInitialProps = async ({ req }) => {
  const lang = req ? req.language : i18n.language;

  return {
    namespacesRequired: ['common'],
    lang: lang,
  };
};

SpaWellness.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(SpaWellness);
