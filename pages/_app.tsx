import type { AppProps } from 'next/app'
import Head from 'next/head';
import Script from 'next/script';
import { useEffect } from 'react';

declare global {
  interface Window {
    Kakao: any;
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if(!window.Kakao.isInitialized()) window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_KEY);
  }, []);

  return <>
      <Script src="https://t1.kakaocdn.net/kakao_js_sdk/2.0.0/kakao.min.js" integrity="sha384-PFHeU/4gvSH8kpvhrigAPfZGBDPs372JceJq3jAXce11bVA6rMvGWzvP4fMQuBGL" crossOrigin="anonymous"></Script>
      <Head>
        <title>카카오톡 낚시하기</title>
        <meta name="description" content="뿌링클 선착순에 실패하고 분노하며 개발한 웹사이트" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
}

export default MyApp
