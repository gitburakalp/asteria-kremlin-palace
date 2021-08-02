import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { i18n, withTranslation } from '../../i18n';

import MainLayout from '../layouts/mainLayout';
import SeoHead from '../../components/SeoHead';

import { Header, Footer } from '../../widgets';
import { Button, ImageBlock, TitlesAndDescription, NavMenu, TabMenu, FullWidthSlider } from '../../components';

import '../../styles/main.scss';

class KidsClub extends React.Component {
  constructor(props) {
    super(props);

    const { t, lang } = this.props;

    this.state = {
      items: t('kids_club.kids_club_list', { returnObjects: true }),
      galleries: t('kids_club.imageList', { returnObjects: true }),
    };
  }

  render() {
    const { t, lang } = this.props;
    const { items, galleries } = this.state;

    return (
      <MainLayout>
        <SeoHead title={t('kids_club.title')} description={t('kids_club.description')} lang={lang} route={'/'} />
        <section className="image-section">
          <ImageBlock src={t('kids_club.main_image')}></ImageBlock>
        </section>
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <TitlesAndDescription title={t('kids_club.title')} description={t('kids_club.description')}></TitlesAndDescription>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="row align-items-center mb-4">
              <div className="col-md">
                <h4 className="title--xs text-center text-md-start">{t('kids_club.items_title')}</h4>
              </div>
            </div>
            <div className="flex-list-block">
              {items.map((el, idx) => {
                return <div key={idx}>{el}</div>;
              })}
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
            <FullWidthSlider data={galleries}></FullWidthSlider>
          </div>
        </section>
      </MainLayout>
    );
  }
}

KidsClub.getInitialProps = async ({ req }) => {
  const lang = req ? req.language : i18n.language;

  return {
    namespacesRequired: ['common'],
    lang: lang,
  };
};

KidsClub.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(KidsClub);
