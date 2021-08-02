import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Link from 'next/link';
import { i18n, withTranslation } from '../../i18n';
import { SET_LANG } from '../../redux/actions/langActions';
import { hotelList } from '../../constants';
import { Button } from '../../components';

function Header(props) {
  const [allLang, setAllLang] = useState([]);
  const [collapsed, setCollapsed] = useState(false);
  const [hotelsShown, setHotelsShown] = useState(false);
  const [langShown, setLangShown] = useState(false);
  const [selectedLang, setSelectedLang] = useState('');
  const [pathName, setPathName] = useState('');
  const [width, setWidth] = useState(0);
  const headerRef = useRef(null);

  const { t, lang } = props;

  const navbarItems = t('menu', { returnObjects: true });

  useEffect(() => {
    const width = window.innerWidth;

    setSelectedLang(i18n.language);
    setPathName(window.location.pathname.replace('/', ''));
    setAllLang(i18n.options['allLanguages']);
    setWidth(width);

    document.querySelector('body').addEventListener('click', function (e) {
      var isTarget = e.target.closest('[class*=hotels-block]') !== null || e.target.closest('[class*=language-block]') !== null;

      if (!isTarget) {
        setHotelsShown(false);
        setLangShown(false);
      }
    });

    const getDimensions = ele => {
      const { height } = ele.getBoundingClientRect();
      const offsetTop = ele.offsetTop;
      const offsetBottom = offsetTop + height;

      return {
        height,
        offsetTop,
        offsetBottom,
      };
    };

    const handleScroll = () => {
      const { height: headerHeight } = getDimensions(headerRef.current);
      const scrollPosition = window.scrollY + headerHeight;

      scrollPosition > headerHeight + 400 ? headerRef.current.classList.add('fixed') : headerRef.current.classList.remove('fixed');
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const changeLang = lang => {
    props.fillLang(lang);
    i18n.changeLanguage(lang);
    setSelectedLang(lang);
    document.documentElement.lang = lang;
  };

  const navbarToggle = () => {
    setCollapsed(!collapsed);
  };

  const hotelsToggle = () => {
    setHotelsShown(!hotelsShown);
  };

  return (
    <header className={'header' + (collapsed ? ' is-shown' : '')} ref={headerRef}>
      <nav className={'navbar' + (collapsed ? ' is-shown' : '')}>
        <div className="container">
          <a href={'/'} type="button" className="navbar-brand">
            <img className="img-fluid" src="../../public/images/svg/asteria-kremlin-palace-icon.svg" alt="Asteria Hotel Kremlin Palace" />
          </a>
          <a type="button" className="hamburger" onClick={() => navbarToggle()}>
            <div></div>
            <div></div>
            <div></div>
          </a>
          <div className="header-navigation">
            <div className="header-navigation-block">
              <div className="row ms-xl-auto">
                <div className="col-xl-auto">
                  <div className="phone-block">
                    <a href="tel:+902424312400" className="btn--phone" type="button" title="Asteria Kremlin Palace Phone">
                      <i className="icons--flag-turkey me-2"></i>
                      <span>+90 242 431 24 00</span>
                      <i className="icons--phone ms-2"></i>
                    </a>
                  </div>
                </div>
                <div className="col-xl-auto">
                  <div className="social-block">
                    <div className="d-flex align-items-center">
                      <a href="" className="btn--facebook">
                        <i className="icons--facebook"></i>
                      </a>
                      <a href="" className="btn--instagram">
                        <i className="icons--instagram"></i>
                      </a>
                      <a href="https://book.asteriahotels.com/en/book-rooms" className="btn btn--primary ms-auto" target="_blank">
                        <span>  {t('book_now').toUpperCase()}</span>
                        <i className="icons--chevron-right-circle ms-3"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row bottom-row">
                <div className="col-xl-auto order-2 order-xl-1">
                  <div className="d-flex align-items-center position-xl-relative">
                    <div
                      className={'language-block' + (langShown ? ' is-shown' : '')}
                      onClick={() => {
                        setHotelsShown(false);
                        setLangShown(!langShown);
                      }}
                    >
                      <span>{selectedLang.toUpperCase()}</span>
                      <i className="icons--chevron-up ms-2"></i>
                      <div className="language-block-inner custom-popover--mobile">
                        <ul>
                          {allLang.map((value, index) => {
                            return selectedLang !== value ? (
                              <li
                                key={index}
                                onClick={() => {
                                  changeLang(value);
                                }}
                              >
                                {value.toUpperCase()}
                              </li>
                            ) : null;
                          })}
                        </ul>
                      </div>
                    </div>
                    <div
                      className={'hotels-block' + (hotelsShown ? ' is-shown' : '')}
                      onClick={() => {
                        setLangShown(false);
                        setHotelsShown(!hotelsShown);
                      }}
                    >
                      <span>{t('header.our_hotels').toUpperCase()}</span>
                      <i className="icons--chevron-up-navy ms-2"></i>
                      <div className="hotels-block-inner custom-popover">
                        <ul>
                          {hotelList.map((el, idx) => {
                            return (
                              <li key={idx} className={idx === 0 ? 'is-active' : ''}>
                                <a href={el.href} className="d-block">
                                  {el.title.toUpperCase()}
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-auto order-1 order-xl-2">
                  <div className="main-menu-block">
                    <ul className="main-menu">
                      {navbarItems.map((val, idx) => {
                        return (
                          <li className={'main-menu-item' + (pathName.toLowerCase() === val.title.toLowerCase().replace(/ /g, '-') ? ' is-active' : '')} key={idx}>
                            <Button src={val.href} className={'main-menu-link'} data-title={val.title.toLowerCase()}>
                              {val.title.toUpperCase()}
                            </Button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

const mapStateToProps = (state, ownProps) => {
  const { lang } = state;
  return {
    lang: lang,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fillLang: lang => dispatch({ type: SET_LANG, payload: lang }),
  };
};

Header.propTypes = {
  t: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation('common')(Header));
