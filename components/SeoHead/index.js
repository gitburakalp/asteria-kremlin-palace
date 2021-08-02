import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

class SeoHead extends React.Component {
  render() {
    const { title, description, lang, route } = this.props;
    const webUrl = 'https://www.asteriahotels.com';
    const titleAbbr = 'Asteria Hotels';
    const logoUrl = `${webUrl}/images/favicon/android-chrome-512x512.png`;
    const metaUrl = `${webUrl}${lang === 'en' ? '' : `/${lang}`}${route}`;
    const name = 'Asteria Hotels';
    const email = 'contact@atghotels.com';
    const phone = '+90 242 722 42 00';
    const address = 'Kadriye Mah. Taşlıburun Cad. No: 14/2';
    const town = 'Belek';
    const city = 'Antalya';
    const country = 'Turkey';
    const geoLocation = { lat: 36.8567812, lon: 31.0266716 };
    const priceRange = '$$';
    const facebookDomainVerification = 'fsr9hj1zi9uzv3h5rr11s23ndyj8cx';

    const seoJson = [
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: name,
        description: description,
        url: metaUrl,
        primaryImageOfPage: {
          '@type': 'ImageObject',
          contentUrl: logoUrl,
          name: name,
          caption: name,
        },
      },
      {
        '@context': 'http://schema.org',
        '@type': 'Hotel',
        name: name,
        url: webUrl,
        logo: logoUrl,
        image: logoUrl,
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: phone,
          email: email,
          contactType: 'reservations',
        },
        telephone: phone,
        address: {
          '@type': 'PostalAddress',
          streetAddress: address,
          addressLocality: town,
          addressRegion: city,
          addressCountry: country,
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: geoLocation.lat,
          longitude: geoLocation.lon,
        },
        priceRange: priceRange,
      },
    ];

    return (
      <Head>
        <meta name="description" content={description} />
        <meta property="og:site_name" content={webUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={logoUrl} />
        <meta property="og:locale" content={lang} />
        <meta property="og:url" content={metaUrl} />
        <meta name="facebook-domain-verification" content={facebookDomainVerification} />
        <title>{title}</title>
        <link rel="canonical" content={metaUrl} />
        <link rel="alternate" href={`${webUrl}${route}`} hrefLang="en" />
        <link rel="alternate" href={`${webUrl}/de${route}`} hrefLang="de" />
        <link rel="alternate" href={`${webUrl}/ru${route}`} hrefLang="ru" />
        <link rel="alternate" href={`${webUrl}/tr${route}`} hrefLang="tr" />
        <link rel="alternate" href={`${webUrl}${route}`} hrefLang="x-default" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&family=Rubik:ital,wght@0,400;0,500;1,300&display=swap" rel="stylesheet" />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossorigin="anonymous"
        ></script>
      </Head>
    );
  }
}

SeoHead.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
};

export default SeoHead;
