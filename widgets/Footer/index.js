import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { i18n, withTranslation } from '../../i18n';
import { destroySwiper, hotelList, footerAllMenus } from '../../constants';
import { Button, ImageBlock } from '../../components';
import { Swiper, SwiperSlide } from 'swiper/react';

class Footer extends React.Component {
  state = {
    ww: '',
  };

  render() {
    const { t } = this.props;
    const footerMenuSocials = { facebook: 'https://www.facebook.com/AsteriaKremlin', instagram: 'https://www.instagram.com/AsteriaKremlin/' };
    const footerMenus = footerAllMenus[i18n.language].menus;
    const footerSubMenu = footerAllMenus[i18n.language].subMenu;

    return (
      <footer>
        <div className="footer-container">
          <div className="row">
            <div className="col-auto order-md-1 mb-active">
              <div className="footer-logo">
                <a href="https://www.asteriahotels.com" className="d-inline-block" target="_blank">
                  <img src="../../public/images/svg/asteria-hotels.svg" alt="Asteria Hotels" />
                </a>
              </div>
            </div>
            <div className="col order-md-last d-flex align-items-center justify-content-md-end mb-active d-xl-none">
              <div className="row justify-content-end social-block">
                <div className="col-auto">
                  <a href={footerMenuSocials.facebook} className="btn--facebook" target="_blank">
                    <i className="icons--facebook"></i>
                  </a>
                </div>
                <div className="col-auto">
                  <a href={footerMenuSocials.instagram} className="btn--instagram" target="_blank">
                    <i className="icons--instagram"></i>
                  </a>
                </div>
                <div className="col-12 mt-phone">
                  <a href="tel:+902424312400" className="btn--phone justify-content-end" type="button" title="Asteria Kremlin Palace Phone">
                    <i className="icons--flag-turkey me-2"></i>
                    <span>+90 242 431 24 00</span>
                    <i className="icons--phone ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md order-md-2 hotels-list-block">
              <Swiper
                spaceBetween={27}
                slidesPerView={1.768}
                breakpoints={{
                  768: { slidesPerView: 2.9715, spaceBetween: 34 },
                  1024: { slidesPerView: 3.75, spaceBetween: 34 },
                  1200: { slidesPerView: 5, spaceBetween: 25 },
                }}
                className={'hotels-block'}
              >
                {hotelList.map((el, idx) => {
                  return (
                    <SwiperSlide key={idx}>
                      <h3 className={'hotels-block-title'} dangerouslySetInnerHTML={{ __html: el.sTitle }}></h3>
                      <ImageBlock src={el.image}>
                        <Button src={el.href} icons={true} iconsClass={'icons--chevron-right-circle'}></Button>
                      </ImageBlock>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
            <div className="col-12 order-md-3">
              <div className="footer-menu-block">
                {footerMenus.map((el, i) => {
                  return (
                    <ul key={i} className="footer-menu">
                      {el.menu.map((item, idx) => {
                        return (
                          <li key={idx} className={'footer-menu-item' + (idx >= 5 ? ' mt-md-3 mt-xl-0' : '')}>
                            <Button src={item.href} className={'footer-menu-link'}>
                              {item.title}
                            </Button>
                          </li>
                        );
                      })}
                    </ul>
                  );
                })}
              </div>
            </div>
            <div className="col-12 order-md-4 col-xl-auto">
              <ul className="footer-menu sub">
                {footerSubMenu.map((el, idx) => {
                  return (
                    <li key={idx} className={'footer-menu-item'}>
                      <Button src={el.href} className={'footer-menu-link'}>
                        {el.title}
                      </Button>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="col-xl-auto col-md order-md-5 d-flex align-items-center ms-xl-auto ps-xl-0">
              <p className="copyright">{t('footer.copyright')}</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

Footer.getInitialProps = async ({ req }) => {
  const lang = req ? req.language : i18n.language;

  return {
    namespacesRequired: ['common'],
    lang: lang,
  };
};

Footer.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(Footer);
