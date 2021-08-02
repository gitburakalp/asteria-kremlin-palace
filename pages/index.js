import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { i18n, withTranslation } from '../i18n';

import MainLayout from './layouts/mainLayout';
import SeoHead from '../components/SeoHead';

import { Button, ImageBlock, TitlesAndDescription, TabMenu } from '../components';

import { mainLayoutMenu } from '../constants';

import '../styles/main.scss';

class Index extends React.Component {
  render() {
    const { t, lang } = this.props;
    const section_4_data = t('home.section_4.menu', { returnObjects: true });

    return (
      <MainLayout>
        <SeoHead title={'ASTERIA HOTELS'} description={t('seo.metaDescription')} lang={lang} route={'/'} />
        <section className="image-section">
          <ImageBlock src="../public/images/stock-images/main-image.jpg"></ImageBlock>
        </section>
        <section className="section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <TitlesAndDescription title={t('home.section_2.title')} subtitle={t('home.section_2.subtitle')} description={t('home.section_2.description')}></TitlesAndDescription>
              </div>
              <div className="col-md-6 px-md-1">
                <ImageBlock src="../public/images/stock-images/hotel-image.jpg" radius={true} data-card-image></ImageBlock>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container mt-xl-5">
            <div className="row justify-content-center">
              <div className="col col-xl-10">
                <TitlesAndDescription
                  title={t('home.section_3.title')}
                  titleClass="title--sm"
                  subtitle={t('home.section_3.subtitle')}
                  subtitleClass={'subtitle--xs'}
                  description={t('home.section_3.description')}
                  centered={true}
                ></TitlesAndDescription>
              </div>
              <div className="col-xl-12 mt-md-3 mt-xl-4">
                <ImageBlock src="../public/images/stock-images/accommodation-image.jpg" radius={true} aspect-ratio="16:9">
                  <Button src={t('home.section_3.buttonHref')} className={'image-link'} icons={true} iconsClass={'icons--chevron-right-circle-transparent'}>
                    <span className="primary">{t('home.section_3.buttonTitle')}</span>
                    <span className="secondary">{t('home.section_3.buttonDescription')}</span>
                  </Button>
                </ImageBlock>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <TabMenu data={section_4_data}></TabMenu>
        </section>
      </MainLayout>
    );
  }
}

Index.getInitialProps = async ({ req }) => {
  const lang = req ? req.language : i18n.language;

  return {
    namespacesRequired: ['common'],
    lang: lang,
  };
};

Index.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(Index);
