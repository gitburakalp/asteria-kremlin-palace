import React, { useState, useEffect } from 'react';

const hotelList = [
  {
    title: 'Asteria Bodrum Resort',
    sTitle: 'Asteria<br>Bodrum Resort',
    href: '/',
    image: '../public/images/asteria-hotels/asteria-bodrum-resort.jpg',
  },
  {
    title: 'Asteria Kemer Resort',
    sTitle: 'Asteria<br>Kemer Resort',
    href: '/',
    image: '../public/images/asteria-hotels/asteria-kemer-resort.jpg',
  },
  {
    title: 'Asteria Kremlin Palace',
    sTitle: 'Asteria<br>Kremlin Palace',
    href: '/',
    image: '../public/images/asteria-hotels/asteria-kremlin-palace.jpg',
  },
  {
    title: 'Asteria Zeus Didim',
    sTitle: 'Asteria<br>Zeus Didim',
    href: '/',
    image: '../public/images/asteria-hotels/asteria-zeus-didim.jpg',
  },
  {
    title: 'Asteria Venus Didim',
    sTitle: 'Asteria<br>Venus Didim',
    href: '/',
    image: '../public/images/asteria-hotels/asteria-venus-didim.jpg',
  },
];

const footerAllMenus = {
  tr: {
    menus: [
      {
        menu: [
          { title: 'anasayfa', href: '/' },
          { title: 'restoranlar', href: '/restaurants' },
          { title: 'spa & wellness', href: '/spa-wellness' },
          { title: 'kongre', href: '/conference' },
          { title: 'düğün & balayı', href: '/marriage-and-honeymoon' },
        ],
      },
      {
        menu: [
          { title: 'konaklama', href: '/accommodation' },
          { title: 'aktiviteler', href: '/activities' },
          { title: 'asteria çocuk kulübü', href: '/kids-club' },
          { title: 'spor', href: '/sport' },
        ],
      },
    ],
    subMenu: [
      { title: 'factsheet', href: '/#factsheet' },
      { title: 'ödüller', href: '/#awards' },
      { title: 'multimedia', href: '/#multimedia' },
      { title: 'iletişim', href: '/#contact' },
      { title: 'kişisel verileri koruma kanunu', href: '/gdpr' },
    ],
  },
  en: {
    menus: [
      {
        menu: [
          { title: 'homepage', href: '/' },
          { title: 'restaurants', href: '/restaurants' },
          { title: 'spa & wellness', href: '/spa-wellness' },
          { title: 'conference', href: '/conference' },
          { title: 'marriage & honeymoon', href: '/marriage-and-honeymoon' },
        ],
      },
      {
        menu: [
          { title: 'accommodation', href: '/accommodation' },
          { title: 'activities', href: '/activities' },
          { title: 'asteria kids club', href: '/kids-club' },
          { title: 'sport', href: '/sport' },
        ],
      },
    ],
    subMenu: [
      { title: 'factsheet', href: '/#factsheet' },
      { title: 'awards', href: '/#awards' },
      { title: 'multimedia', href: '/#multimedia' },
      { title: 'contact', href: '/#contact' },
      { title: 'protection of personal data', href: '/gdpr' },
    ],
  },
  de: {
    menus: [
      {
        menu: [
          { title: 'HAUPTSEITE', href: '/' },
          { title: 'RESTAURANTS', href: '/restaurants' },
          { title: 'SPA & WELLNESS', href: '/spa-wellness' },
          { title: 'SİTZUNGSSAAL', href: '/conference' },
          { title: 'HOCHZEIT & FLITTERWOCHEN', href: '/marriage-and-honeymoon' },
        ],
      },
      {
        menu: [
          { title: 'UNTERKUNFT', href: '/accommodation' },
          { title: 'AKTIVITÄTEN', href: '/activities' },
          { title: 'asteria kinderclub', href: '/kids-club' },
          { title: 'SPORT', href: '/sport' },
        ],
      },
    ],
    subMenu: [
      { title: 'KONZEPT', href: '/#factsheet' },
      { title: 'AUSZEICHNUNGEN', href: '/#awards' },
      { title: 'multimedia', href: '/#multimedia' },
      { title: 'KONTAKT', href: '/#contact' },
      { title: 'protection of personal data', href: '/gdpr' },
    ],
  },
  ru: {
    menus: [
      {
        menu: [
          { title: 'ГЛАВНАЯ', href: '/' },
          { title: 'РЕСТОРАНЫ', href: '/restaurants' },
          { title: 'СПА И', href: '/spa-wellness' },
          { title: 'КОНФЕРЕНЦ', href: '/conference' },
          { title: 'СВАДЬБА & МЕДОВЫЙ МЕСЯЦ', href: '/marriage-and-honeymoon' },
        ],
      },
      {
        menu: [
          { title: 'РАЗМЕЩЕНИЕ', href: '/accommodation' },
          { title: 'РАЗВЛЕЧЕНИЯ', href: '/activities' },
          { title: 'ASTERIA ДЕТСКИЙ КЛУБ', href: '/kids-club' },
          { title: 'СПОРТ', href: '/sport' },
        ],
      },
    ],
    subMenu: [
      { title: 'КОНЦЕПЦИЯ', href: '/#factsheet' },
      { title: 'НАГРАДЫ', href: '/#awards' },
      { title: 'multimedia', href: '/#multimedia' },
      { title: 'КОНТАКТЫ', href: '/#contact' },
      { title: 'protection of personal data', href: '/gdpr' },
    ],
  },
};

const mainLayoutMenu = {
  tr: ['Factsheet', 'Awards', 'Multimedia', 'Contact'],
  en: ['Factsheet', 'Awards', 'Multimedia', 'Contact'],
  de: ['Factsheet', 'Awards', 'Multimedia', 'Contact'],
  ru: ['Factsheet', 'Awards', 'Multimedia', 'Contact'],
};

const destroySwiper = (swiper, parentElement) => {
  let parent = document.querySelector(parentElement);
  let swiperContainer = parent.querySelector('.swiper-container');
  let swiperWrapper = swiperContainer.querySelector('.swiper-wrapper');
  let swiperSlides = swiperWrapper.querySelectorAll('.swiper-slide');

  swiper.destroy(true);

  swiperContainer.classList.remove('swiper-container');
  swiperWrapper.classList.remove('swiper-wrapper');
  swiperSlides.forEach(el => {
    el.classList.remove('swiper-slide');
  });
};

const getRoomDataByName = (roomName, data) => {
  let returnedData = {};

  data.map(el => {
    el.primary_title.toLowerCase() === roomName.toLowerCase() ? (returnedData = el) : {};
  });

  return returnedData;
};

export { footerAllMenus, mainLayoutMenu, hotelList, destroySwiper, getRoomDataByName };
