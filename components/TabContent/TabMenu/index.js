import React from 'react';
import PropTypes from 'prop-types';
import { i18n, withTranslation } from '../../../i18n';
import { Swiper, SwiperSlide } from 'swiper/react';

import { NavMenu, Button, Factsheet, Awards, Multimedia, Contact } from '../../../components';

const TabMenu = props => {
  const { t, lang, data } = props;

  const renderTabMenuContent = (type, data) => {
    switch (type) {
      case 'factsheet':
        return <Factsheet data={data}></Factsheet>;
        break;
      case 'awards':
        return <Awards data={data.awards_data}></Awards>;
        break;
      case 'multimedia':
        return <Multimedia data={data.multimedia_data}></Multimedia>;
        break;
      case 'contact':
        return <Contact data={data.contact_data}></Contact>;
        break;
    }
  };

  return (
    <div className="container">
      <div className="main-layout-menu">
        <NavMenu tag="ul" tabs={true}>
          {data.map((e, idx) => {
            const title = e.title.toLowerCase();

            return (
              <NavMenu key={idx} className="nav-item" role="presentation">
                <Button id={title} tabs={true} className={idx === 0 ? ' active' : ''}>
                  {e.title.toUpperCase()}
                </Button>
              </NavMenu>
            );
          })}
        </NavMenu>
      </div>
      <div className="description-block">
        <p className="description text-center px-2 mb-0" dangerouslySetInnerHTML={{ __html: t('home.section_4.menu_description') }}></p>
      </div>
      <div className="tab-content pt-xl-5">
        {data.map((dt, idx) => {
          const id = dt.title.toLowerCase();

          return (
            <NavMenu key={idx} tag="div" className={'tab-pane fade' + (idx === 0 ? ' active show' : '')} id={id} role="tabpanel" aria-labelledby={id + '-tab'}>
              {renderTabMenuContent(id, dt)}
            </NavMenu>
          );
        })}
      </div>
    </div>
  );
};

TabMenu.getInitialProps = async ({ req }) => {
  const lang = req ? req.language : i18n.language;

  return {
    namespacesRequired: ['common'],
    lang: lang,
  };
};

TabMenu.propTypes = {
  t: PropTypes.func.isRequired,
  data: PropTypes.array,
};

export default withTranslation('common')(TabMenu);
