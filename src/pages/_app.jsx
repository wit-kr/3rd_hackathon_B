/* eslint-disable react/prop-types,react/jsx-props-no-spreading */
import Head from 'next/head';
import GlobalStyle from '@/styles/globalstyle';

const MyApp = ({ Component, pageProps }) => {
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
      <Component {...pageProps} />
    </>,
  );
};

export default MyApp;
