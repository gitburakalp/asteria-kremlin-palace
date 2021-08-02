import React from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import { i18n, withTranslation } from '../../i18n';
import { getRoomDataByName } from '../../constants';
import { Link } from 'next';

import { SeoHead, ImageBlock, TitlesAndDescription, FullWidthSlider } from '../../components';
import Layout from '../../pages/index';

import '../../styles/main.scss';

class Breadcrumbs extends React.Component {
  render() {
    const { t, lang, pathArray } = this.props;

    return (
      <section className="breadcrumbs">
        <div className="container">
          <ul>
            <li>
              <a
                onClick={() => {
                  Router.push({ pathname: '/' });
                }}
              >
                {t('seo.homepage')}
              </a>
            </li>
            {pathArray.length != 0
              ? pathArray.map((el, idx) => {
                  return (
                    <li key={idx}>
                      <a
                        onClick={() => {
                          Router.push({ pathname: el.href });
                        }}
                        role="button"
                        className={idx + 1 === pathArray.length ? 'active' : ''}
                      >
                        {el !== undefined ? el.breadcrumb.replace(/-/g, ' ').replace(/_/g, ' ') : null}
                      </a>
                    </li>
                  );
                })
              : null}
          </ul>
        </div>
      </section>
    );
  }
}

Breadcrumbs.getInitialProps = async ({ req }) => {
  const lang = req ? req.language : i18n.language;

  return {
    namespacesRequired: ['common'],
    lang: lang,
  };
};

Breadcrumbs.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(Breadcrumbs);
