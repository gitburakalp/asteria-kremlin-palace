import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { i18n, withTranslation } from '../../i18n';

import { Breadcrumbs } from '../../components';
import { Header, Footer } from '../../widgets/';

const MainLayout = props => {
  const router = useRouter();
  const [paths, setPaths] = useState([]);

  const getPaths = linkPath => {
    linkPath.shift();
    const pathArray = [];

    linkPath.map((path, i) => {
      if (path !== '' && path !== 'tr' && path !== 'en' && path !== 'ru' && path !== 'de') {
        pathArray.push({ breadcrumb: path, href: '/' + linkPath.slice(0, i + 1).join('/') });
      }
    });

    if (pathArray.length != 0) {
      return pathArray;
    } else {
      return [];
    }
  };

  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split('/');
      router.route != '/' ? setPaths(getPaths(linkPath)) : null;

      if (router.asPath.includes('#') && router.route === '/') {
        const redirectValue = router.asPath.replace(/^[/ru|/de|/tr]+/, '').replace(/^\//, '');
        setTimeout(() => {
          var el = document.querySelector(redirectValue);
          if (el !== undefined && el !== null) {
            const elTop = document.querySelector(redirectValue).parentNode.offsetTop - 300;
            window.scroll({ top: elTop, behavior: 'smooth' });
            document.querySelector(redirectValue + '-tab').click();
          }
        }, 200);
      }
    }
  }, [router]);

  return (
    <>
      <Header />
      <main className="main">
        {paths.length > 0 ? <Breadcrumbs pathArray={paths}></Breadcrumbs> : null}
        {props.children}
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
