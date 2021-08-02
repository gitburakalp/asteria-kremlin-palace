import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';

import { appWithTranslation, i18n } from '../i18n';
import makeStore from '../redux/store';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) pageProps = await Component.getInitialProps(ctx);
    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Provider store={store}>
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default withRedux(makeStore)(appWithTranslation(MyApp));
