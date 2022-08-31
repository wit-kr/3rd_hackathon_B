/* eslint-disable react/prop-types,react/jsx-props-no-spreading */
import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import GlobalStyle from '@/styles/globalstyle';
import { useEffect } from 'react';

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    const removeEvent = (e) => {
      e.preventDefault();
      e.stopPropagation();
    };

    const disableScroll = () => {
      document
        .querySelector('body')
        .removeEventListener('touchmove', removeEvent);
      document.querySelector('body').addEventListener('onclick', removeEvent);
      document
        .querySelector('body')
        .addEventListener('mousewheel', removeEvent);
    };
    disableScroll();

    // const enableScroll = () => {
    //   document
    //     .querySelector('body')
    //     .removeEventListener('touchmove', removeEvent);
    //   document
    //     .querySelector('body')
    //     .removeEventListener('onclick', removeEvent);
    //   document
    //     .querySelector('body')
    //     .removeEventListener('mousewheel', removeEvent);
    // };
  }, []);
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1 maximum-scale=1 user-scalable=no"
        />
        <meta content="#34aa70" name="theme-color" />
        <meta content="#34aa70" name="msapplication-navbutton-color" />
        <meta content="#34aa70" name="apple-mobile-web-app-status-bar-style" />
        <meta content="yes" name="apple-mobile-web-app-capable" />
        <title>하루그린</title>
      </Head>
      <GlobalStyle />
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
};

export default MyApp;
