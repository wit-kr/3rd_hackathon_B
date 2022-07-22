/* eslint-disable react/prop-types,react/jsx-props-no-spreading */
import Head from 'next/head';
import GlobalStyle from '@/styles/globalstyle';

const MyApp = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>title</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>,
  );
};

export default MyApp;
