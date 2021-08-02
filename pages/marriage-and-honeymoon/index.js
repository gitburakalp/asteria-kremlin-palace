import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { i18n, withTranslation } from '../../i18n';

import MainLayout from '../layouts/mainLayout';
import SeoHead from '../../components/SeoHead';

import { Header, Footer } from '../../widgets';
import { Button, ImageBlock, TitlesAndDescription, NavMenu, TabMenu, FullWidthSlider } from '../../components';

import '../../styles/main.scss';

class MariageAndHoneymoon extends React.Component {
  constructor(props) {
    super(props);

    const { t, lang } = this.props;

    this.state = {
      items: t('marriage_and_honeymoon.items', { returnObjects: true }),
    };
  }

  render() {
    const { t, lang } = this.props;
    const { items, galleries } = this.state;

    return (
      <MainLayout>
        <SeoHead title={t('marriage_and_honeymoon.title')} description={t('marriage_and_honeymoon.description')} lang={lang} route={'/'} />
        <section className="image-section">
          <ImageBlock src={t('marriage_and_honeymoon.main_image')}></ImageBlock>
        </section>
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <TitlesAndDescription title={t('marriage_and_honeymoon.title')} description={t('marriage_and_honeymoon.description')}></TitlesAndDescription>
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
                <div className="row">
                  <div className="col-12 flex-list-block">
                    <strong className="my-3 d-block">{el.subtitle}</strong>
                    {el.packages.map((e, i) => {
                      return <div key={i} dangerouslySetInnerHTML={{ __html: e }}></div>;
                    })}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </MainLayout>
    );
  }
}

MariageAndHoneymoon.getInitialProps = async ({ req }) => {
  const lang = req ? req.language : i18n.language;

  return {
    namespacesRequired: ['common'],
    lang: lang,
  };
};

MariageAndHoneymoon.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(MariageAndHoneymoon);
